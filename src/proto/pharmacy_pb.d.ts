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

export class GetPharmacyByNameAndCNPJRequest extends jspb.Message { 
    getNome(): string;
    setNome(value: string): GetPharmacyByNameAndCNPJRequest;
    getCnpj(): string;
    setCnpj(value: string): GetPharmacyByNameAndCNPJRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPharmacyByNameAndCNPJRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPharmacyByNameAndCNPJRequest): GetPharmacyByNameAndCNPJRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPharmacyByNameAndCNPJRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPharmacyByNameAndCNPJRequest;
    static deserializeBinaryFromReader(message: GetPharmacyByNameAndCNPJRequest, reader: jspb.BinaryReader): GetPharmacyByNameAndCNPJRequest;
}

export namespace GetPharmacyByNameAndCNPJRequest {
    export type AsObject = {
        nome: string,
        cnpj: string,
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
    getPharmacy(): Pharmacy | undefined;
    setPharmacy(value?: Pharmacy): UpdatePharmacyDataRequest;

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
        pharmacy?: Pharmacy.AsObject,
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

export class GetSubsidiaryByNameAndCNPJRequest extends jspb.Message { 
    getNome(): string;
    setNome(value: string): GetSubsidiaryByNameAndCNPJRequest;
    getCnpj(): string;
    setCnpj(value: string): GetSubsidiaryByNameAndCNPJRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSubsidiaryByNameAndCNPJRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSubsidiaryByNameAndCNPJRequest): GetSubsidiaryByNameAndCNPJRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSubsidiaryByNameAndCNPJRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSubsidiaryByNameAndCNPJRequest;
    static deserializeBinaryFromReader(message: GetSubsidiaryByNameAndCNPJRequest, reader: jspb.BinaryReader): GetSubsidiaryByNameAndCNPJRequest;
}

export namespace GetSubsidiaryByNameAndCNPJRequest {
    export type AsObject = {
        nome: string,
        cnpj: string,
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
