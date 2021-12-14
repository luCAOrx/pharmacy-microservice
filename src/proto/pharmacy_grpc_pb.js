// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pharmacy_pb = require('./pharmacy_pb.js');

function serialize_pharmacy_CreatePharmacyRequest(arg) {
  if (!(arg instanceof pharmacy_pb.CreatePharmacyRequest)) {
    throw new Error('Expected argument of type pharmacy.CreatePharmacyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_CreatePharmacyRequest(buffer_arg) {
  return pharmacy_pb.CreatePharmacyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_CreateSubsidiaryRequest(arg) {
  if (!(arg instanceof pharmacy_pb.CreateSubsidiaryRequest)) {
    throw new Error('Expected argument of type pharmacy.CreateSubsidiaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_CreateSubsidiaryRequest(buffer_arg) {
  return pharmacy_pb.CreateSubsidiaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_Empty(arg) {
  if (!(arg instanceof pharmacy_pb.Empty)) {
    throw new Error('Expected argument of type pharmacy.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_Empty(buffer_arg) {
  return pharmacy_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_GetPharmacyByIdRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetPharmacyByIdRequest)) {
    throw new Error('Expected argument of type pharmacy.GetPharmacyByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetPharmacyByIdRequest(buffer_arg) {
  return pharmacy_pb.GetPharmacyByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_GetPharmacyByNameAndCNPJRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetPharmacyByNameAndCNPJRequest)) {
    throw new Error('Expected argument of type pharmacy.GetPharmacyByNameAndCNPJRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetPharmacyByNameAndCNPJRequest(buffer_arg) {
  return pharmacy_pb.GetPharmacyByNameAndCNPJRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_GetSubsidiaryByIdRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetSubsidiaryByIdRequest)) {
    throw new Error('Expected argument of type pharmacy.GetSubsidiaryByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetSubsidiaryByIdRequest(buffer_arg) {
  return pharmacy_pb.GetSubsidiaryByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_GetSubsidiaryByNameAndCNPJRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest)) {
    throw new Error('Expected argument of type pharmacy.GetSubsidiaryByNameAndCNPJRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetSubsidiaryByNameAndCNPJRequest(buffer_arg) {
  return pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_PharmacyResponse(arg) {
  if (!(arg instanceof pharmacy_pb.PharmacyResponse)) {
    throw new Error('Expected argument of type pharmacy.PharmacyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_PharmacyResponse(buffer_arg) {
  return pharmacy_pb.PharmacyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_PharmacysListResponse(arg) {
  if (!(arg instanceof pharmacy_pb.PharmacysListResponse)) {
    throw new Error('Expected argument of type pharmacy.PharmacysListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_PharmacysListResponse(buffer_arg) {
  return pharmacy_pb.PharmacysListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_Subsidiary(arg) {
  if (!(arg instanceof pharmacy_pb.Subsidiary)) {
    throw new Error('Expected argument of type pharmacy.Subsidiary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_Subsidiary(buffer_arg) {
  return pharmacy_pb.Subsidiary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_SubsidiaryResponse(arg) {
  if (!(arg instanceof pharmacy_pb.SubsidiaryResponse)) {
    throw new Error('Expected argument of type pharmacy.SubsidiaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_SubsidiaryResponse(buffer_arg) {
  return pharmacy_pb.SubsidiaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_SubsidiarysListResponse(arg) {
  if (!(arg instanceof pharmacy_pb.SubsidiarysListResponse)) {
    throw new Error('Expected argument of type pharmacy.SubsidiarysListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_SubsidiarysListResponse(buffer_arg) {
  return pharmacy_pb.SubsidiarysListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PharmacyServiceService = exports.PharmacyServiceService = {
  createPharmacy: {
    path: '/pharmacy.PharmacyService/createPharmacy',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.CreatePharmacyRequest,
    responseType: pharmacy_pb.PharmacyResponse,
    requestSerialize: serialize_pharmacy_CreatePharmacyRequest,
    requestDeserialize: deserialize_pharmacy_CreatePharmacyRequest,
    responseSerialize: serialize_pharmacy_PharmacyResponse,
    responseDeserialize: deserialize_pharmacy_PharmacyResponse,
  },
  getPharmacyByNameAndCNPJ: {
    path: '/pharmacy.PharmacyService/getPharmacyByNameAndCNPJ',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetPharmacyByNameAndCNPJRequest,
    responseType: pharmacy_pb.PharmacyResponse,
    requestSerialize: serialize_pharmacy_GetPharmacyByNameAndCNPJRequest,
    requestDeserialize: deserialize_pharmacy_GetPharmacyByNameAndCNPJRequest,
    responseSerialize: serialize_pharmacy_PharmacyResponse,
    responseDeserialize: deserialize_pharmacy_PharmacyResponse,
  },
  getAllPharmacys: {
    path: '/pharmacy.PharmacyService/getAllPharmacys',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.Empty,
    responseType: pharmacy_pb.PharmacysListResponse,
    requestSerialize: serialize_pharmacy_Empty,
    requestDeserialize: deserialize_pharmacy_Empty,
    responseSerialize: serialize_pharmacy_PharmacysListResponse,
    responseDeserialize: deserialize_pharmacy_PharmacysListResponse,
  },
  updatePharmacyData: {
    path: '/pharmacy.PharmacyService/updatePharmacyData',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.CreatePharmacyRequest,
    responseType: pharmacy_pb.PharmacyResponse,
    requestSerialize: serialize_pharmacy_CreatePharmacyRequest,
    requestDeserialize: deserialize_pharmacy_CreatePharmacyRequest,
    responseSerialize: serialize_pharmacy_PharmacyResponse,
    responseDeserialize: deserialize_pharmacy_PharmacyResponse,
  },
  deletePharmacy: {
    path: '/pharmacy.PharmacyService/deletePharmacy',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetPharmacyByIdRequest,
    responseType: pharmacy_pb.Empty,
    requestSerialize: serialize_pharmacy_GetPharmacyByIdRequest,
    requestDeserialize: deserialize_pharmacy_GetPharmacyByIdRequest,
    responseSerialize: serialize_pharmacy_Empty,
    responseDeserialize: deserialize_pharmacy_Empty,
  },
};

exports.PharmacyServiceClient = grpc.makeGenericClientConstructor(PharmacyServiceService);
var SubsidiaryServiceService = exports.SubsidiaryServiceService = {
  createSubsidiary: {
    path: '/pharmacy.SubsidiaryService/createSubsidiary',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.CreateSubsidiaryRequest,
    responseType: pharmacy_pb.SubsidiaryResponse,
    requestSerialize: serialize_pharmacy_CreateSubsidiaryRequest,
    requestDeserialize: deserialize_pharmacy_CreateSubsidiaryRequest,
    responseSerialize: serialize_pharmacy_SubsidiaryResponse,
    responseDeserialize: deserialize_pharmacy_SubsidiaryResponse,
  },
  getSubsidiaryByNameAndCNPJ: {
    path: '/pharmacy.SubsidiaryService/getSubsidiaryByNameAndCNPJ',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest,
    responseType: pharmacy_pb.SubsidiaryResponse,
    requestSerialize: serialize_pharmacy_GetSubsidiaryByNameAndCNPJRequest,
    requestDeserialize: deserialize_pharmacy_GetSubsidiaryByNameAndCNPJRequest,
    responseSerialize: serialize_pharmacy_SubsidiaryResponse,
    responseDeserialize: deserialize_pharmacy_SubsidiaryResponse,
  },
  getAllSubsidiarys: {
    path: '/pharmacy.SubsidiaryService/getAllSubsidiarys',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.Empty,
    responseType: pharmacy_pb.SubsidiarysListResponse,
    requestSerialize: serialize_pharmacy_Empty,
    requestDeserialize: deserialize_pharmacy_Empty,
    responseSerialize: serialize_pharmacy_SubsidiarysListResponse,
    responseDeserialize: deserialize_pharmacy_SubsidiarysListResponse,
  },
  updateSubsidiaryData: {
    path: '/pharmacy.SubsidiaryService/updateSubsidiaryData',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.Subsidiary,
    responseType: pharmacy_pb.SubsidiaryResponse,
    requestSerialize: serialize_pharmacy_Subsidiary,
    requestDeserialize: deserialize_pharmacy_Subsidiary,
    responseSerialize: serialize_pharmacy_SubsidiaryResponse,
    responseDeserialize: deserialize_pharmacy_SubsidiaryResponse,
  },
  deleteSubsidiary: {
    path: '/pharmacy.SubsidiaryService/deleteSubsidiary',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetSubsidiaryByIdRequest,
    responseType: pharmacy_pb.Empty,
    requestSerialize: serialize_pharmacy_GetSubsidiaryByIdRequest,
    requestDeserialize: deserialize_pharmacy_GetSubsidiaryByIdRequest,
    responseSerialize: serialize_pharmacy_Empty,
    responseDeserialize: deserialize_pharmacy_Empty,
  },
};

exports.SubsidiaryServiceClient = grpc.makeGenericClientConstructor(SubsidiaryServiceService);
