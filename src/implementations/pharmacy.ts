import { PrismaClient } from '@prisma/client'

import { promisify } from 'util';
import fileSystem from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function createPharmacy(call: any, callback: any) {
  const { 
    logo,
    nome,
    cnpj,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
  } = call.request.pharmacy;

  try {
    const cnpjAlreadyExistis = await prisma.pharmacy.findFirst({
      where: { cnpj },
      select: { cnpj: true }
    });

    if (cnpjAlreadyExistis) {
      return callback(new Error('Esse CNPJ já existe.'), null);
    }

    const pharmacy = await prisma.pharmacy.create({
      data: {
        logo,
        nome,
        cnpj,
        endereco,
        horarioDeFuncionamento,
        responsavel,
        telefone,
        outros,
      }
    });

    return callback(null, { pharmacy });
  } catch (error) {
    return callback(error, null);
  }
}

export async function getPharmacyByNameAndCNPJ(call: any, callback: any) {
  const { nome, cnpj } = call.request;

  try {
    const pharmacy = await prisma.pharmacy.findFirst({
      where: { nome, cnpj }
    });
    
    return callback(null, { pharmacy });
  } catch (error) {
    return callback(error, null);
  }
}

export async function getAllPharmacys(call: any, callback: any) {
  try {
    const pharmacys = await prisma.pharmacy.findMany({
      orderBy: { id: 'desc' }
    });

    return callback(null, { pharmacys })
  } catch (error) {
    return callback(error, null);
  }
}

export async function updatePharmacyData(call: any, callback: any) {
  const { 
    id,
    logo,
    nome,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
  } = call.request.pharmacy;

  try {
    const logoInDataBase = await prisma.pharmacy.findFirst({
      where: { id },
      select: { logo: true }
    })

    promisify(fileSystem.unlink)(path.resolve(
      __dirname, '..', '..', '..', '..', 'api', `uploads/${logoInDataBase?.logo}`,
    ));

    const pharmacy = await prisma.pharmacy.update({
      where: { id },
      data: {
        logo,
        nome,
        endereco,
        horarioDeFuncionamento,
        responsavel,
        telefone,
        outros,
      }
    });

    return callback(null, { pharmacy });
  } catch (error) {
    return callback(error, null);
  }
}

export async function deletePharmacy(call: any, callback: any) {
 const { id } = call.request;

 try {
   await prisma.pharmacy.delete({
     where: { id }
   })

   return callback(null, null)
 } catch (error) {
   return callback(error, null)
 }
}