// package: pharmacy
// file: pharmacy.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pharmacy_pb from "./pharmacy_pb";

interface IPharmacyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPharmacy: IPharmacyServiceService_IcreatePharmacy;
    getPharmacyByNameAndCNPJ: IPharmacyServiceService_IgetPharmacyByNameAndCNPJ;
    getAllPharmacys: IPharmacyServiceService_IgetAllPharmacys;
    updatePharmacyData: IPharmacyServiceService_IupdatePharmacyData;
    deletePharmacy: IPharmacyServiceService_IdeletePharmacy;
}

interface IPharmacyServiceService_IcreatePharmacy extends grpc.MethodDefinition<pharmacy_pb.CreatePharmacyRequest, pharmacy_pb.PharmacyResponse> {
    path: "/pharmacy.PharmacyService/createPharmacy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.CreatePharmacyRequest>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.CreatePharmacyRequest>;
    responseSerialize: grpc.serialize<pharmacy_pb.PharmacyResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.PharmacyResponse>;
}
interface IPharmacyServiceService_IgetPharmacyByNameAndCNPJ extends grpc.MethodDefinition<pharmacy_pb.GetPharmacyByNameAndCNPJRequest, pharmacy_pb.PharmacyResponse> {
    path: "/pharmacy.PharmacyService/getPharmacyByNameAndCNPJ";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.GetPharmacyByNameAndCNPJRequest>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.GetPharmacyByNameAndCNPJRequest>;
    responseSerialize: grpc.serialize<pharmacy_pb.PharmacyResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.PharmacyResponse>;
}
interface IPharmacyServiceService_IgetAllPharmacys extends grpc.MethodDefinition<pharmacy_pb.Empty, pharmacy_pb.PharmacysListResponse> {
    path: "/pharmacy.PharmacyService/getAllPharmacys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.Empty>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.Empty>;
    responseSerialize: grpc.serialize<pharmacy_pb.PharmacysListResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.PharmacysListResponse>;
}
interface IPharmacyServiceService_IupdatePharmacyData extends grpc.MethodDefinition<pharmacy_pb.CreatePharmacyRequest, pharmacy_pb.PharmacyResponse> {
    path: "/pharmacy.PharmacyService/updatePharmacyData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.CreatePharmacyRequest>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.CreatePharmacyRequest>;
    responseSerialize: grpc.serialize<pharmacy_pb.PharmacyResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.PharmacyResponse>;
}
interface IPharmacyServiceService_IdeletePharmacy extends grpc.MethodDefinition<pharmacy_pb.GetPharmacyByIdRequest, pharmacy_pb.Empty> {
    path: "/pharmacy.PharmacyService/deletePharmacy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.GetPharmacyByIdRequest>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.GetPharmacyByIdRequest>;
    responseSerialize: grpc.serialize<pharmacy_pb.Empty>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.Empty>;
}

export const PharmacyServiceService: IPharmacyServiceService;

export interface IPharmacyServiceServer {
    createPharmacy: grpc.handleUnaryCall<pharmacy_pb.CreatePharmacyRequest, pharmacy_pb.PharmacyResponse>;
    getPharmacyByNameAndCNPJ: grpc.handleUnaryCall<pharmacy_pb.GetPharmacyByNameAndCNPJRequest, pharmacy_pb.PharmacyResponse>;
    getAllPharmacys: grpc.handleUnaryCall<pharmacy_pb.Empty, pharmacy_pb.PharmacysListResponse>;
    updatePharmacyData: grpc.handleUnaryCall<pharmacy_pb.CreatePharmacyRequest, pharmacy_pb.PharmacyResponse>;
    deletePharmacy: grpc.handleUnaryCall<pharmacy_pb.GetPharmacyByIdRequest, pharmacy_pb.Empty>;
}

export interface IPharmacyServiceClient {
    createPharmacy(request: pharmacy_pb.CreatePharmacyRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    createPharmacy(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    createPharmacy(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    getPharmacyByNameAndCNPJ(request: pharmacy_pb.GetPharmacyByNameAndCNPJRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    getPharmacyByNameAndCNPJ(request: pharmacy_pb.GetPharmacyByNameAndCNPJRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    getPharmacyByNameAndCNPJ(request: pharmacy_pb.GetPharmacyByNameAndCNPJRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    getAllPharmacys(request: pharmacy_pb.Empty, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacysListResponse) => void): grpc.ClientUnaryCall;
    getAllPharmacys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacysListResponse) => void): grpc.ClientUnaryCall;
    getAllPharmacys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacysListResponse) => void): grpc.ClientUnaryCall;
    updatePharmacyData(request: pharmacy_pb.CreatePharmacyRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    updatePharmacyData(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    updatePharmacyData(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    deletePharmacy(request: pharmacy_pb.GetPharmacyByIdRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePharmacy(request: pharmacy_pb.GetPharmacyByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePharmacy(request: pharmacy_pb.GetPharmacyByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PharmacyServiceClient extends grpc.Client implements IPharmacyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPharmacy(request: pharmacy_pb.CreatePharmacyRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public createPharmacy(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public createPharmacy(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public getPharmacyByNameAndCNPJ(request: pharmacy_pb.GetPharmacyByNameAndCNPJRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public getPharmacyByNameAndCNPJ(request: pharmacy_pb.GetPharmacyByNameAndCNPJRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public getPharmacyByNameAndCNPJ(request: pharmacy_pb.GetPharmacyByNameAndCNPJRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public getAllPharmacys(request: pharmacy_pb.Empty, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacysListResponse) => void): grpc.ClientUnaryCall;
    public getAllPharmacys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacysListResponse) => void): grpc.ClientUnaryCall;
    public getAllPharmacys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacysListResponse) => void): grpc.ClientUnaryCall;
    public updatePharmacyData(request: pharmacy_pb.CreatePharmacyRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public updatePharmacyData(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public updatePharmacyData(request: pharmacy_pb.CreatePharmacyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyResponse) => void): grpc.ClientUnaryCall;
    public deletePharmacy(request: pharmacy_pb.GetPharmacyByIdRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePharmacy(request: pharmacy_pb.GetPharmacyByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePharmacy(request: pharmacy_pb.GetPharmacyByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
}

interface ISubsidiaryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSubsidiary: ISubsidiaryServiceService_IcreateSubsidiary;
    getSubsidiaryByNameAndCNPJ: ISubsidiaryServiceService_IgetSubsidiaryByNameAndCNPJ;
    getAllSubsidiarys: ISubsidiaryServiceService_IgetAllSubsidiarys;
    updateSubsidiaryData: ISubsidiaryServiceService_IupdateSubsidiaryData;
    deleteSubsidiary: ISubsidiaryServiceService_IdeleteSubsidiary;
}

interface ISubsidiaryServiceService_IcreateSubsidiary extends grpc.MethodDefinition<pharmacy_pb.CreateSubsidiaryRequest, pharmacy_pb.SubsidiaryResponse> {
    path: "/pharmacy.SubsidiaryService/createSubsidiary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.CreateSubsidiaryRequest>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.CreateSubsidiaryRequest>;
    responseSerialize: grpc.serialize<pharmacy_pb.SubsidiaryResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.SubsidiaryResponse>;
}
interface ISubsidiaryServiceService_IgetSubsidiaryByNameAndCNPJ extends grpc.MethodDefinition<pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, pharmacy_pb.SubsidiaryResponse> {
    path: "/pharmacy.SubsidiaryService/getSubsidiaryByNameAndCNPJ";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest>;
    responseSerialize: grpc.serialize<pharmacy_pb.SubsidiaryResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.SubsidiaryResponse>;
}
interface ISubsidiaryServiceService_IgetAllSubsidiarys extends grpc.MethodDefinition<pharmacy_pb.Empty, pharmacy_pb.SubsidiarysListResponse> {
    path: "/pharmacy.SubsidiaryService/getAllSubsidiarys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.Empty>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.Empty>;
    responseSerialize: grpc.serialize<pharmacy_pb.SubsidiarysListResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.SubsidiarysListResponse>;
}
interface ISubsidiaryServiceService_IupdateSubsidiaryData extends grpc.MethodDefinition<pharmacy_pb.Subsidiary, pharmacy_pb.SubsidiaryResponse> {
    path: "/pharmacy.SubsidiaryService/updateSubsidiaryData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.Subsidiary>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.Subsidiary>;
    responseSerialize: grpc.serialize<pharmacy_pb.SubsidiaryResponse>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.SubsidiaryResponse>;
}
interface ISubsidiaryServiceService_IdeleteSubsidiary extends grpc.MethodDefinition<pharmacy_pb.GetSubsidiaryByIdRequest, pharmacy_pb.Empty> {
    path: "/pharmacy.SubsidiaryService/deleteSubsidiary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.GetSubsidiaryByIdRequest>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.GetSubsidiaryByIdRequest>;
    responseSerialize: grpc.serialize<pharmacy_pb.Empty>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.Empty>;
}

export const SubsidiaryServiceService: ISubsidiaryServiceService;

export interface ISubsidiaryServiceServer {
    createSubsidiary: grpc.handleUnaryCall<pharmacy_pb.CreateSubsidiaryRequest, pharmacy_pb.SubsidiaryResponse>;
    getSubsidiaryByNameAndCNPJ: grpc.handleUnaryCall<pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, pharmacy_pb.SubsidiaryResponse>;
    getAllSubsidiarys: grpc.handleUnaryCall<pharmacy_pb.Empty, pharmacy_pb.SubsidiarysListResponse>;
    updateSubsidiaryData: grpc.handleUnaryCall<pharmacy_pb.Subsidiary, pharmacy_pb.SubsidiaryResponse>;
    deleteSubsidiary: grpc.handleUnaryCall<pharmacy_pb.GetSubsidiaryByIdRequest, pharmacy_pb.Empty>;
}

export interface ISubsidiaryServiceClient {
    createSubsidiary(request: pharmacy_pb.CreateSubsidiaryRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    createSubsidiary(request: pharmacy_pb.CreateSubsidiaryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    createSubsidiary(request: pharmacy_pb.CreateSubsidiaryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    getSubsidiaryByNameAndCNPJ(request: pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    getSubsidiaryByNameAndCNPJ(request: pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    getSubsidiaryByNameAndCNPJ(request: pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    getAllSubsidiarys(request: pharmacy_pb.Empty, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiarysListResponse) => void): grpc.ClientUnaryCall;
    getAllSubsidiarys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiarysListResponse) => void): grpc.ClientUnaryCall;
    getAllSubsidiarys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiarysListResponse) => void): grpc.ClientUnaryCall;
    updateSubsidiaryData(request: pharmacy_pb.Subsidiary, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    updateSubsidiaryData(request: pharmacy_pb.Subsidiary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    updateSubsidiaryData(request: pharmacy_pb.Subsidiary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    deleteSubsidiary(request: pharmacy_pb.GetSubsidiaryByIdRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSubsidiary(request: pharmacy_pb.GetSubsidiaryByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSubsidiary(request: pharmacy_pb.GetSubsidiaryByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class SubsidiaryServiceClient extends grpc.Client implements ISubsidiaryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createSubsidiary(request: pharmacy_pb.CreateSubsidiaryRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public createSubsidiary(request: pharmacy_pb.CreateSubsidiaryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public createSubsidiary(request: pharmacy_pb.CreateSubsidiaryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public getSubsidiaryByNameAndCNPJ(request: pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public getSubsidiaryByNameAndCNPJ(request: pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public getSubsidiaryByNameAndCNPJ(request: pharmacy_pb.GetSubsidiaryByNameAndCNPJRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public getAllSubsidiarys(request: pharmacy_pb.Empty, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiarysListResponse) => void): grpc.ClientUnaryCall;
    public getAllSubsidiarys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiarysListResponse) => void): grpc.ClientUnaryCall;
    public getAllSubsidiarys(request: pharmacy_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiarysListResponse) => void): grpc.ClientUnaryCall;
    public updateSubsidiaryData(request: pharmacy_pb.Subsidiary, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public updateSubsidiaryData(request: pharmacy_pb.Subsidiary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public updateSubsidiaryData(request: pharmacy_pb.Subsidiary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.SubsidiaryResponse) => void): grpc.ClientUnaryCall;
    public deleteSubsidiary(request: pharmacy_pb.GetSubsidiaryByIdRequest, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSubsidiary(request: pharmacy_pb.GetSubsidiaryByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSubsidiary(request: pharmacy_pb.GetSubsidiaryByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.Empty) => void): grpc.ClientUnaryCall;
}
