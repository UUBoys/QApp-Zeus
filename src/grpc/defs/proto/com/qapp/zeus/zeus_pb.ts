// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file proto/com/qapp/zeus/zeus.proto (package com.qapp.zeus, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message com.qapp.zeus.Establishment
 */
export class Establishment extends Message<Establishment> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: optional string description = 3;
   */
  description?: string;

  /**
   * @generated from field: optional string image = 4;
   */
  image?: string;

  /**
   * @generated from field: string street = 5;
   */
  street = "";

  /**
   * @generated from field: string city = 6;
   */
  city = "";

  /**
   * @generated from field: string country = 7;
   */
  country = "";

  constructor(data?: PartialMessage<Establishment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.Establishment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "street", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Establishment {
    return new Establishment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Establishment {
    return new Establishment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Establishment {
    return new Establishment().fromJsonString(jsonString, options);
  }

  static equals(a: Establishment | PlainMessage<Establishment> | undefined, b: Establishment | PlainMessage<Establishment> | undefined): boolean {
    return proto3.util.equals(Establishment, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.Event
 */
export class Event extends Message<Event> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: optional string description = 3;
   */
  description?: string;

  /**
   * @generated from field: string start_date = 4;
   */
  startDate = "";

  /**
   * @generated from field: string end_data = 5;
   */
  endData = "";

  /**
   * @generated from field: optional string image = 6;
   */
  image?: string;

  /**
   * @generated from field: float price = 7;
   */
  price = 0;

  /**
   * @generated from field: int32 establishmentId = 8;
   */
  establishmentId = 0;

  /**
   * @generated from field: int32 maximumCapacity = 9;
   */
  maximumCapacity = 0;

  constructor(data?: PartialMessage<Event>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.Event";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "start_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "end_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 8, name: "establishmentId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "maximumCapacity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event {
    return new Event().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJsonString(jsonString, options);
  }

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean {
    return proto3.util.equals(Event, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.Ticket
 */
export class Ticket extends Message<Ticket> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: int32 user_id = 2;
   */
  userId = 0;

  /**
   * @generated from field: string event_id = 3;
   */
  eventId = "";

  /**
   * @generated from field: bool revoked = 4;
   */
  revoked = false;

  constructor(data?: PartialMessage<Ticket>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.Ticket";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "revoked", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Ticket {
    return new Ticket().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Ticket {
    return new Ticket().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Ticket {
    return new Ticket().fromJsonString(jsonString, options);
  }

  static equals(a: Ticket | PlainMessage<Ticket> | undefined, b: Ticket | PlainMessage<Ticket> | undefined): boolean {
    return proto3.util.equals(Ticket, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.GetEstablishmentsRequest
 */
export class GetEstablishmentsRequest extends Message<GetEstablishmentsRequest> {
  constructor(data?: PartialMessage<GetEstablishmentsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.GetEstablishmentsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEstablishmentsRequest {
    return new GetEstablishmentsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEstablishmentsRequest {
    return new GetEstablishmentsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEstablishmentsRequest {
    return new GetEstablishmentsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetEstablishmentsRequest | PlainMessage<GetEstablishmentsRequest> | undefined, b: GetEstablishmentsRequest | PlainMessage<GetEstablishmentsRequest> | undefined): boolean {
    return proto3.util.equals(GetEstablishmentsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.GetEventsRequest
 */
export class GetEventsRequest extends Message<GetEventsRequest> {
  constructor(data?: PartialMessage<GetEventsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.GetEventsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventsRequest {
    return new GetEventsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventsRequest {
    return new GetEventsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventsRequest {
    return new GetEventsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetEventsRequest | PlainMessage<GetEventsRequest> | undefined, b: GetEventsRequest | PlainMessage<GetEventsRequest> | undefined): boolean {
    return proto3.util.equals(GetEventsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.GetEstablishmentsResponse
 */
export class GetEstablishmentsResponse extends Message<GetEstablishmentsResponse> {
  /**
   * @generated from field: repeated com.qapp.zeus.Establishment establishments = 1;
   */
  establishments: Establishment[] = [];

  constructor(data?: PartialMessage<GetEstablishmentsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.GetEstablishmentsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "establishments", kind: "message", T: Establishment, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEstablishmentsResponse {
    return new GetEstablishmentsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEstablishmentsResponse {
    return new GetEstablishmentsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEstablishmentsResponse {
    return new GetEstablishmentsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetEstablishmentsResponse | PlainMessage<GetEstablishmentsResponse> | undefined, b: GetEstablishmentsResponse | PlainMessage<GetEstablishmentsResponse> | undefined): boolean {
    return proto3.util.equals(GetEstablishmentsResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.CreateEstablishmentRequest
 */
export class CreateEstablishmentRequest extends Message<CreateEstablishmentRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: optional string description = 2;
   */
  description?: string;

  /**
   * @generated from field: optional string image = 3;
   */
  image?: string;

  /**
   * @generated from field: string street = 4;
   */
  street = "";

  /**
   * @generated from field: string city = 5;
   */
  city = "";

  /**
   * @generated from field: string country = 6;
   */
  country = "";

  /**
   * @generated from field: int32 ownerId = 7;
   */
  ownerId = 0;

  constructor(data?: PartialMessage<CreateEstablishmentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.CreateEstablishmentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "street", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "ownerId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEstablishmentRequest {
    return new CreateEstablishmentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEstablishmentRequest {
    return new CreateEstablishmentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEstablishmentRequest {
    return new CreateEstablishmentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateEstablishmentRequest | PlainMessage<CreateEstablishmentRequest> | undefined, b: CreateEstablishmentRequest | PlainMessage<CreateEstablishmentRequest> | undefined): boolean {
    return proto3.util.equals(CreateEstablishmentRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.SetEstablishmentRoleRequest
 */
export class SetEstablishmentRoleRequest extends Message<SetEstablishmentRoleRequest> {
  /**
   * @generated from field: string establishmentId = 1;
   */
  establishmentId = "";

  /**
   * @generated from field: int32 userId = 2;
   */
  userId = 0;

  /**
   * @generated from field: string role = 3;
   */
  role = "";

  constructor(data?: PartialMessage<SetEstablishmentRoleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.SetEstablishmentRoleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "establishmentId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "userId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetEstablishmentRoleRequest {
    return new SetEstablishmentRoleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetEstablishmentRoleRequest {
    return new SetEstablishmentRoleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetEstablishmentRoleRequest {
    return new SetEstablishmentRoleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetEstablishmentRoleRequest | PlainMessage<SetEstablishmentRoleRequest> | undefined, b: SetEstablishmentRoleRequest | PlainMessage<SetEstablishmentRoleRequest> | undefined): boolean {
    return proto3.util.equals(SetEstablishmentRoleRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.GetEventsResponse
 */
export class GetEventsResponse extends Message<GetEventsResponse> {
  /**
   * @generated from field: repeated com.qapp.zeus.Event events = 1;
   */
  events: Event[] = [];

  constructor(data?: PartialMessage<GetEventsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.GetEventsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "events", kind: "message", T: Event, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventsResponse {
    return new GetEventsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventsResponse {
    return new GetEventsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventsResponse {
    return new GetEventsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetEventsResponse | PlainMessage<GetEventsResponse> | undefined, b: GetEventsResponse | PlainMessage<GetEventsResponse> | undefined): boolean {
    return proto3.util.equals(GetEventsResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.CreateEventRequest
 */
export class CreateEventRequest extends Message<CreateEventRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: optional string description = 2;
   */
  description?: string;

  /**
   * @generated from field: string start_date = 3;
   */
  startDate = "";

  /**
   * @generated from field: string end_data = 4;
   */
  endData = "";

  /**
   * @generated from field: optional string image = 5;
   */
  image?: string;

  /**
   * @generated from field: float price = 6;
   */
  price = 0;

  /**
   * @generated from field: int32 establishmentId = 7;
   */
  establishmentId = 0;

  /**
   * @generated from field: int32 maximumCapacity = 8;
   */
  maximumCapacity = 0;

  constructor(data?: PartialMessage<CreateEventRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.CreateEventRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "start_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "end_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "establishmentId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "maximumCapacity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEventRequest {
    return new CreateEventRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEventRequest {
    return new CreateEventRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEventRequest {
    return new CreateEventRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateEventRequest | PlainMessage<CreateEventRequest> | undefined, b: CreateEventRequest | PlainMessage<CreateEventRequest> | undefined): boolean {
    return proto3.util.equals(CreateEventRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.PurchaseTicketRequest
 */
export class PurchaseTicketRequest extends Message<PurchaseTicketRequest> {
  /**
   * @generated from field: int32 eventId = 1;
   */
  eventId = 0;

  /**
   * @generated from field: int32 userId = 2;
   */
  userId = 0;

  constructor(data?: PartialMessage<PurchaseTicketRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.PurchaseTicketRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "eventId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "userId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseTicketRequest {
    return new PurchaseTicketRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseTicketRequest {
    return new PurchaseTicketRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseTicketRequest {
    return new PurchaseTicketRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PurchaseTicketRequest | PlainMessage<PurchaseTicketRequest> | undefined, b: PurchaseTicketRequest | PlainMessage<PurchaseTicketRequest> | undefined): boolean {
    return proto3.util.equals(PurchaseTicketRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.RefundTicketRequest
 */
export class RefundTicketRequest extends Message<RefundTicketRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: int32 userId = 2;
   */
  userId = 0;

  constructor(data?: PartialMessage<RefundTicketRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.RefundTicketRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "userId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefundTicketRequest {
    return new RefundTicketRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefundTicketRequest {
    return new RefundTicketRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefundTicketRequest {
    return new RefundTicketRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RefundTicketRequest | PlainMessage<RefundTicketRequest> | undefined, b: RefundTicketRequest | PlainMessage<RefundTicketRequest> | undefined): boolean {
    return proto3.util.equals(RefundTicketRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.zeus.RefundTicketResponse
 */
export class RefundTicketResponse extends Message<RefundTicketResponse> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: int32 userId = 2;
   */
  userId = 0;

  /**
   * @generated from field: bool revoked = 3;
   */
  revoked = false;

  constructor(data?: PartialMessage<RefundTicketResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.zeus.RefundTicketResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "userId", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "revoked", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefundTicketResponse {
    return new RefundTicketResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefundTicketResponse {
    return new RefundTicketResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefundTicketResponse {
    return new RefundTicketResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RefundTicketResponse | PlainMessage<RefundTicketResponse> | undefined, b: RefundTicketResponse | PlainMessage<RefundTicketResponse> | undefined): boolean {
    return proto3.util.equals(RefundTicketResponse, a, b);
  }
}

