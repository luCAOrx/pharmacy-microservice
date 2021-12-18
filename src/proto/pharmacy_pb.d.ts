// package: pharmacy
// file: pharmacy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Pharmacy extends jspb.Message { 
    getId(): number;
    setId(value: number): Pharmacy;
    getLogo(): string;
    setLogo(value: string): Pharmacy;
    getNome(): string;
    setNome(value: string): Pharmacy;
    getCnpj(): string;
    setCnpj(value: string): Pharmacy;
    getEndereco(): string;
    setEndereco(value: string): Pharmacy;
    getHorariodefuncionamento(): string;
    setHorariodefuncionamento(value: string): Pharmacy;
    getResponsavel(): string;
    setResponsavel(value: string): Pharmacy;
    getTelefone(): string;
    setTelefone(value: string): Pharmacy;
    getOutros(): string;
    setOutros(value: string): Pharmacy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pharmacy.AsObject;
    static toObject(includeInstance: boolean, msg: Pharmacy): Pharmacy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pharmacy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pharmacy;
    static deserializeBinaryFromReader(message: Pharmacy, reader: jspb.BinaryReader): Pharmacy;
}

export namespace Pharmacy {
    export type AsObject = {
        id: number,
        logo: string,
        nome: string,
        cnpj: string,
        endereco: string,
        horariodefuncionamento: string,
        responsavel: string,
        telefone: string,
        outros: string,
    }
}

export class UpdatePharmacyData extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdatePharmacyData;
    getLogo(): string;
    setLogo(value: string): UpdatePharmacyData;
    getNome(): string;
    setNome(value: string): UpdatePharmacyData;
    getEndereco(): string;
    setEndereco(value: string): UpdatePharmacyData;
    getHorariodefuncionamento(): string;
    setHorariodefuncionamento(value: string): UpdatePharmacyData;
    getResponsavel(): string;
    setResponsavel(value: string): UpdatePharmacyData;
    getTelefone(): string;
    setTelefone(value: string): UpdatePharmacyData;
    getOutros(): string;
    setOutros(value: string): UpdatePharmacyData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePharmacyData.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePharmacyData): UpdatePharmacyData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePharmacyData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePharmacyData;
    static deserializeBinaryFromReader(message: UpdatePharmacyData, reader: jspb.BinaryReader): UpdatePharmacyData;
}

export namespace UpdatePharmacyData {
    export type AsObject = {
        id: number,
        logo: string,
        nome: string,
        endereco: string,
        horariodefuncionamento: string,
        responsavel: string,
        telefone: string,
        outros: string,
    }
}

export class CreatePharmacyRequest extends jspb.Message { 

    hasPharmacy(): boolean;
    clearPharmacy(): void;
    getPharmacy(): Pharmacy | undefined;
    setPharmacy(value?: Pharmacy): CreatePharmacyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePharmacyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePharmacyRequest): CreatePharmacyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePharmacyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePharmacyRequest;
    static deserializeBinaryFromReader(message: CreatePharmacyRequest, reader: jspb.BinaryReader): CreatePharmacyRequest;
}

export namespace CreatePharmacyRequest {
    export type AsObject = {
        pharmacy?: Pharmacy.AsObject,
    }
}

export class GetPharmacyByNameRequest extends jspb.Message { 
    getNome(): string;
    setNome(value: string): GetPharmacyByNameRequest;
    getPage(): string;
    setPage(value: string): GetPharmacyByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPharmacyByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPharmacyByNameRequest): GetPharmacyByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPharmacyByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPharmacyByNameRequest;
    static deserializeBinaryFromReader(message: GetPharmacyByNameRequest, reader: jspb.BinaryReader): GetPharmacyByNameRequest;
}

export namespace GetPharmacyByNameRequest {
    export type AsObject = {
        nome: string,
        page: string,
    }
}

export class GetAllPharmacysRequest extends jspb.Message { 
    getPage(): string;
    setPage(value: string): GetAllPharmacysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPharmacysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPharmacysRequest): GetAllPharmacysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPharmacysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPharmacysRequest;
    static deserializeBinaryFromReader(message: GetAllPharmacysRequest, reader: jspb.BinaryReader): GetAllPharmacysRequest;
}

export namespace GetAllPharmacysRequest {
    export type AsObject = {
        page: string,
    }
}

export class GetPharmacyByIdRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetPharmacyByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPharmacyByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPharmacyByIdRequest): GetPharmacyByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPharmacyByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPharmacyByIdRequest;
    static deserializeBinaryFromReader(message: GetPharmacyByIdRequest, reader: jspb.BinaryReader): GetPharmacyByIdRequest;
}

export namespace GetPharmacyByIdRequest {
    export type AsObject = {
        id: number,
    }
}

export class UpdatePharmacyDataRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdatePharmacyDataRequest;

    hasPharmacy(): boolean;
    clearPharmacy(): void;
    getPharmacy(): UpdatePharmacyData | undefined;
    setPharmacy(value?: UpdatePharmacyData): UpdatePharmacyDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePharmacyDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePharmacyDataRequest): UpdatePharmacyDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePharmacyDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePharmacyDataRequest;
    static deserializeBinaryFromReader(message: UpdatePharmacyDataRequest, reader: jspb.BinaryReader): UpdatePharmacyDataRequest;
}

export namespace UpdatePharmacyDataRequest {
    export type AsObject = {
        id: number,
        pharmacy?: UpdatePharmacyData.AsObject,
    }
}

export class PharmacyResponse extends jspb.Message { 

    hasPharmacy(): boolean;
    clearPharmacy(): void;
    getPharmacy(): Pharmacy | undefined;
    setPharmacy(value?: Pharmacy): PharmacyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PharmacyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PharmacyResponse): PharmacyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PharmacyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PharmacyResponse;
    static deserializeBinaryFromReader(message: PharmacyResponse, reader: jspb.BinaryReader): PharmacyResponse;
}

export namespace PharmacyResponse {
    export type AsObject = {
        pharmacy?: Pharmacy.AsObject,
    }
}

export class PharmacysListResponse extends jspb.Message { 
    clearPharmacysList(): void;
    getPharmacysList(): Array<Pharmacy>;
    setPharmacysList(value: Array<Pharmacy>): PharmacysListResponse;
    addPharmacys(value?: Pharmacy, index?: number): Pharmacy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PharmacysListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PharmacysListResponse): PharmacysListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PharmacysListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PharmacysListResponse;
    static deserializeBinaryFromReader(message: PharmacysListResponse, reader: jspb.BinaryReader): PharmacysListResponse;
}

export namespace PharmacysListResponse {
    export type AsObject = {
        pharmacysList: Array<Pharmacy.AsObject>,
    }
}

export class Subsidiary extends jspb.Message { 
    getId(): number;
    setId(value: number): Subsidiary;
    getLogo(): string;
    setLogo(value: string): Subsidiary;
    getNome(): string;
    setNome(value: string): Subsidiary;
    getCnpj(): string;
    setCnpj(value: string): Subsidiary;
    getEndereco(): string;
    setEndereco(value: string): Subsidiary;
    getHorariodefuncionamento(): string;
    setHorariodefuncionamento(value: string): Subsidiary;
    getResponsavel(): string;
    setResponsavel(value: string): Subsidiary;
    getTelefone(): string;
    setTelefone(value: string): Subsidiary;
    getOutros(): string;
    setOutros(value: string): Subsidiary;
    getFarmaciaId(): number;
    setFarmaciaId(value: number): Subsidiary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subsidiary.AsObject;
    static toObject(includeInstance: boolean, msg: Subsidiary): Subsidiary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subsidiary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subsidiary;
    static deserializeBinaryFromReader(message: Subsidiary, reader: jspb.BinaryReader): Subsidiary;
}

export namespace Subsidiary {
    export type AsObject = {
        id: number,
        logo: string,
        nome: string,
        cnpj: string,
        endereco: string,
        horariodefuncionamento: string,
        responsavel: string,
        telefone: string,
        outros: string,
        farmaciaId: number,
    }
}

export class UpdateSubsidiaryData extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateSubsidiaryData;
    getLogo(): string;
    setLogo(value: string): UpdateSubsidiaryData;
    getNome(): string;
    setNome(value: string): UpdateSubsidiaryData;
    getEndereco(): string;
    setEndereco(value: string): UpdateSubsidiaryData;
    getHorariodefuncionamento(): string;
    setHorariodefuncionamento(value: string): UpdateSubsidiaryData;
    getResponsavel(): string;
    setResponsavel(value: string): UpdateSubsidiaryData;
    getTelefone(): string;
    setTelefone(value: string): UpdateSubsidiaryData;
    getOutros(): string;
    setOutros(value: string): UpdateSubsidiaryData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSubsidiaryData.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSubsidiaryData): UpdateSubsidiaryData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSubsidiaryData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSubsidiaryData;
    static deserializeBinaryFromReader(message: UpdateSubsidiaryData, reader: jspb.BinaryReader): UpdateSubsidiaryData;
}

export namespace UpdateSubsidiaryData {
    export type AsObject = {
        id: number,
        logo: string,
        nome: string,
        endereco: string,
        horariodefuncionamento: string,
        responsavel: string,
        telefone: string,
        outros: string,
    }
}

export class CreateSubsidiaryRequest extends jspb.Message { 

    hasSubsidiary(): boolean;
    clearSubsidiary(): void;
    getSubsidiary(): Subsidiary | undefined;
    setSubsidiary(value?: Subsidiary): CreateSubsidiaryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSubsidiaryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSubsidiaryRequest): CreateSubsidiaryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSubsidiaryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSubsidiaryRequest;
    static deserializeBinaryFromReader(message: CreateSubsidiaryRequest, reader: jspb.BinaryReader): CreateSubsidiaryRequest;
}

export namespace CreateSubsidiaryRequest {
    export type AsObject = {
        subsidiary?: Subsidiary.AsObject,
    }
}

export class GetSubsidiaryByNameRequest extends jspb.Message { 
    getNome(): string;
    setNome(value: string): GetSubsidiaryByNameRequest;
    getPage(): string;
    setPage(value: string): GetSubsidiaryByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSubsidiaryByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSubsidiaryByNameRequest): GetSubsidiaryByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSubsidiaryByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSubsidiaryByNameRequest;
    static deserializeBinaryFromReader(message: GetSubsidiaryByNameRequest, reader: jspb.BinaryReader): GetSubsidiaryByNameRequest;
}

export namespace GetSubsidiaryByNameRequest {
    export type AsObject = {
        nome: string,
        page: string,
    }
}

export class GetAllSubsidiarysRequest extends jspb.Message { 
    getPage(): string;
    setPage(value: string): GetAllSubsidiarysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllSubsidiarysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllSubsidiarysRequest): GetAllSubsidiarysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllSubsidiarysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllSubsidiarysRequest;
    static deserializeBinaryFromReader(message: GetAllSubsidiarysRequest, reader: jspb.BinaryReader): GetAllSubsidiarysRequest;
}

export namespace GetAllSubsidiarysRequest {
    export type AsObject = {
        page: string,
    }
}

export class GetSubsidiaryByIdRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetSubsidiaryByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSubsidiaryByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSubsidiaryByIdRequest): GetSubsidiaryByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSubsidiaryByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSubsidiaryByIdRequest;
    static deserializeBinaryFromReader(message: GetSubsidiaryByIdRequest, reader: jspb.BinaryReader): GetSubsidiaryByIdRequest;
}

export namespace GetSubsidiaryByIdRequest {
    export type AsObject = {
        id: number,
    }
}

export class UpdateSubsidiaryDataRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateSubsidiaryDataRequest;

    hasSubsidiary(): boolean;
    clearSubsidiary(): void;
    getSubsidiary(): UpdateSubsidiaryData | undefined;
    setSubsidiary(value?: UpdateSubsidiaryData): UpdateSubsidiaryDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSubsidiaryDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSubsidiaryDataRequest): UpdateSubsidiaryDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSubsidiaryDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSubsidiaryDataRequest;
    static deserializeBinaryFromReader(message: UpdateSubsidiaryDataRequest, reader: jspb.BinaryReader): UpdateSubsidiaryDataRequest;
}

export namespace UpdateSubsidiaryDataRequest {
    export type AsObject = {
        id: number,
        subsidiary?: UpdateSubsidiaryData.AsObject,
    }
}

export class SubsidiaryResponse extends jspb.Message { 

    hasSubsidiary(): boolean;
    clearSubsidiary(): void;
    getSubsidiary(): Subsidiary | undefined;
    setSubsidiary(value?: Subsidiary): SubsidiaryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubsidiaryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubsidiaryResponse): SubsidiaryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubsidiaryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubsidiaryResponse;
    static deserializeBinaryFromReader(message: SubsidiaryResponse, reader: jspb.BinaryReader): SubsidiaryResponse;
}

export namespace SubsidiaryResponse {
    export type AsObject = {
        subsidiary?: Subsidiary.AsObject,
    }
}

export class SubsidiarysListResponse extends jspb.Message { 
    clearSubsidiarysList(): void;
    getSubsidiarysList(): Array<Subsidiary>;
    setSubsidiarysList(value: Array<Subsidiary>): SubsidiarysListResponse;
    addSubsidiarys(value?: Subsidiary, index?: number): Subsidiary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubsidiarysListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubsidiarysListResponse): SubsidiarysListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubsidiarysListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubsidiarysListResponse;
    static deserializeBinaryFromReader(message: SubsidiarysListResponse, reader: jspb.BinaryReader): SubsidiarysListResponse;
}

export namespace SubsidiarysListResponse {
    export type AsObject = {
        subsidiarysList: Array<Subsidiary.AsObject>,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}
