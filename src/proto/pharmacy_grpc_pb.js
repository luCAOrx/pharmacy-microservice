// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
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

function serialize_pharmacy_GetAllPharmacysRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetAllPharmacysRequest)) {
    throw new Error('Expected argument of type pharmacy.GetAllPharmacysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetAllPharmacysRequest(buffer_arg) {
  return pharmacy_pb.GetAllPharmacysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_GetAllSubsidiarysRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetAllSubsidiarysRequest)) {
    throw new Error('Expected argument of type pharmacy.GetAllSubsidiarysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetAllSubsidiarysRequest(buffer_arg) {
  return pharmacy_pb.GetAllSubsidiarysRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pharmacy_GetPharmacyByNameRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetPharmacyByNameRequest)) {
    throw new Error('Expected argument of type pharmacy.GetPharmacyByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetPharmacyByNameRequest(buffer_arg) {
  return pharmacy_pb.GetPharmacyByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pharmacy_GetSubsidiaryByNameRequest(arg) {
  if (!(arg instanceof pharmacy_pb.GetSubsidiaryByNameRequest)) {
    throw new Error('Expected argument of type pharmacy.GetSubsidiaryByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_GetSubsidiaryByNameRequest(buffer_arg) {
  return pharmacy_pb.GetSubsidiaryByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_pharmacy_UpdatePharmacyDataRequest(arg) {
  if (!(arg instanceof pharmacy_pb.UpdatePharmacyDataRequest)) {
    throw new Error('Expected argument of type pharmacy.UpdatePharmacyDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_UpdatePharmacyDataRequest(buffer_arg) {
  return pharmacy_pb.UpdatePharmacyDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pharmacy_UpdateSubsidiaryDataRequest(arg) {
  if (!(arg instanceof pharmacy_pb.UpdateSubsidiaryDataRequest)) {
    throw new Error('Expected argument of type pharmacy.UpdateSubsidiaryDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pharmacy_UpdateSubsidiaryDataRequest(buffer_arg) {
  return pharmacy_pb.UpdateSubsidiaryDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  getPharmacyByName: {
    path: '/pharmacy.PharmacyService/getPharmacyByName',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetPharmacyByNameRequest,
    responseType: pharmacy_pb.PharmacysListResponse,
    requestSerialize: serialize_pharmacy_GetPharmacyByNameRequest,
    requestDeserialize: deserialize_pharmacy_GetPharmacyByNameRequest,
    responseSerialize: serialize_pharmacy_PharmacysListResponse,
    responseDeserialize: deserialize_pharmacy_PharmacysListResponse,
  },
  getAllPharmacys: {
    path: '/pharmacy.PharmacyService/getAllPharmacys',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetAllPharmacysRequest,
    responseType: pharmacy_pb.PharmacysListResponse,
    requestSerialize: serialize_pharmacy_GetAllPharmacysRequest,
    requestDeserialize: deserialize_pharmacy_GetAllPharmacysRequest,
    responseSerialize: serialize_pharmacy_PharmacysListResponse,
    responseDeserialize: deserialize_pharmacy_PharmacysListResponse,
  },
  updatePharmacyData: {
    path: '/pharmacy.PharmacyService/updatePharmacyData',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.UpdatePharmacyDataRequest,
    responseType: pharmacy_pb.PharmacyResponse,
    requestSerialize: serialize_pharmacy_UpdatePharmacyDataRequest,
    requestDeserialize: deserialize_pharmacy_UpdatePharmacyDataRequest,
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
  getSubsidiaryByName: {
    path: '/pharmacy.SubsidiaryService/getSubsidiaryByName',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetSubsidiaryByNameRequest,
    responseType: pharmacy_pb.SubsidiarysListResponse,
    requestSerialize: serialize_pharmacy_GetSubsidiaryByNameRequest,
    requestDeserialize: deserialize_pharmacy_GetSubsidiaryByNameRequest,
    responseSerialize: serialize_pharmacy_SubsidiarysListResponse,
    responseDeserialize: deserialize_pharmacy_SubsidiarysListResponse,
  },
  getAllSubsidiarys: {
    path: '/pharmacy.SubsidiaryService/getAllSubsidiarys',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.GetAllSubsidiarysRequest,
    responseType: pharmacy_pb.SubsidiarysListResponse,
    requestSerialize: serialize_pharmacy_GetAllSubsidiarysRequest,
    requestDeserialize: deserialize_pharmacy_GetAllSubsidiarysRequest,
    responseSerialize: serialize_pharmacy_SubsidiarysListResponse,
    responseDeserialize: deserialize_pharmacy_SubsidiarysListResponse,
  },
  updateSubsidiaryData: {
    path: '/pharmacy.SubsidiaryService/updateSubsidiaryData',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.UpdateSubsidiaryDataRequest,
    responseType: pharmacy_pb.SubsidiaryResponse,
    requestSerialize: serialize_pharmacy_UpdateSubsidiaryDataRequest,
    requestDeserialize: deserialize_pharmacy_UpdateSubsidiaryDataRequest,
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
