import { PrismaClient } from '@prisma/client'

import { promisify } from 'util';
import fileSystem from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function createSubsidiary(call: any, callback: any) {
  const { 
    logo,
    nome,
    cnpj,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
    farmacia_id
  } = call.request.subsidiary;

  try {
    const cnpjAlreadyExistis = await prisma.subsidiary.findFirst({
      where: { cnpj },
      select: { cnpj: true }
    });

    const subsidiaryLimit = await prisma.subsidiary.findMany({
      where: { farmacia_id },
      select: { farmacia_id: true }
    });

    if (cnpjAlreadyExistis) {
      return callback(new Error('Esse CNPJ já existe.'), null);
    }

    if (subsidiaryLimit.length > 2) {
      return callback(new Error('A farmácia sede não pode ter mais que 3 filias.'), null);
    }
    
    const subsidiary = await prisma.subsidiary.create({
      data: {
        logo,
        nome,
        cnpj,
        endereco,
        horarioDeFuncionamento,
        responsavel,
        telefone,
        outros,
        farmacia_id,
      }
    });

    return callback(null, { subsidiary });
  } catch (error) {
    return callback(error, null);
  }
}

export async function getSubsidiaryByName(call: any, callback: any) {
  const { nome, page } = call.request;

  try {
    const subsidiarys = await prisma.subsidiary.findMany({
      where: { nome },
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    });
    
    return callback(null, { subsidiarys });
  } catch (error) {
    return callback(error, null);
  }
}

export async function getAllSubsidiarys(call: any, callback: any) {
  const { page } = call.request;

  try {
    const subsidiarys = await prisma.subsidiary.findMany({
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    });

    callback(null, { subsidiarys })
  } catch (error) {
    callback(error, null);
  }
}

export async function updateSubsidiaryData(call: any, callback: any) {
  const { 
    id,
    logo,
    nome,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
  } = call.request.subsidiary;

  try {
    const logoInDataBase = await prisma.subsidiary.findFirst({
      where: { id },
      select: { logo: true }
    })

    promisify(fileSystem.unlink)(path.resolve(
      __dirname, '..', '..', '..', '..', 'api', `uploads/${logoInDataBase?.logo}`,
    ));

    const subsidiary = await prisma.subsidiary.update({
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

    return callback(null, { subsidiary });
  } catch (error) {
    return callback(error, null);
  }
}

export async function deleteSubsidiary(call: any, callback: any) {
  const { id } = call.request;
 
  try {
    await prisma.subsidiary.delete({
      where: { id }
    })
 
    return callback(null, null)
  } catch (error) {
    return callback(error, null)
  }
 }