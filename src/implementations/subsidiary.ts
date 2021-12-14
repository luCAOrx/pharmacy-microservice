import { PrismaClient } from '@prisma/client'

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
      select: { id: true }
    });

    if (cnpjAlreadyExistis) {
      return callback(new Error('Esse CNPJ já existe.'), null);
    }

    if (subsidiaryLimit.length > 2) {
      return callback(new Error('Não pode criar mais que 3 filias.'), null);
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

export async function getSubsidiaryByNameAndCNPJ(call: any, callback: any) {
  const { nome, cnpj } = call.request;

  try {
    const subsidiary = await prisma.subsidiary.findFirst({
      where: { nome, cnpj },
      include: { farmacia: true }
    });
    
    return callback(null, { subsidiary });
  } catch (error) {
    return callback(error, null);
  }
}

export async function getAllSubsidiarys(call: any, callback: any) {
  try {
    const subsidiarys = await prisma.subsidiary.findMany({
      orderBy: {
        id: 'asc'
      }
    });

    callback(null, { subsidiarys })
  } catch (error) {
    callback(error, null);
  }
}

export async function updateSubsidiaryData(call: any, callback: any) {
  console.log(call.request);
  
  const { 
    id,
    logo,
    nome,
    cnpj,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
  } = call.request;

  try {
    const cnpjAlreadyExistis = await prisma.subsidiary.findFirst({
      where: { cnpj },
      select: { cnpj: true }
    });

    if (cnpjAlreadyExistis?.cnpj) {
      return callback(new Error('Esse CNPJ já existe.'), null);
    }
    
    const subsidiary = await prisma.subsidiary.update({
      where: { id },
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