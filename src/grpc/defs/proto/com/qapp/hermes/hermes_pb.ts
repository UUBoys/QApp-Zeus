// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file proto/com/qapp/hermes/hermes.proto (package com.qapp.hermes, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message com.qapp.hermes.GetEventAvailableTicketsResponse
 */
export class GetEventAvailableTicketsResponse extends Message<GetEventAvailableTicketsResponse> {
  /**
   * @generated from field: repeated com.qapp.hermes.EventAvailableTickets tickets = 1;
   */
  tickets: EventAvailableTickets[] = [];

  constructor(data?: PartialMessage<GetEventAvailableTicketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetEventAvailableTicketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tickets", kind: "message", T: EventAvailableTickets, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventAvailableTicketsResponse {
    return new GetEventAvailableTicketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsResponse {
    return new GetEventAvailableTicketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsResponse {
    return new GetEventAvailableTicketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetEventAvailableTicketsResponse | PlainMessage<GetEventAvailableTicketsResponse> | undefined, b: GetEventAvailableTicketsResponse | PlainMessage<GetEventAvailableTicketsResponse> | undefined): boolean {
    return proto3.util.equals(GetEventAvailableTicketsResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetEventAvailableTicketsRequest
 */
export class GetEventAvailableTicketsRequest extends Message<GetEventAvailableTicketsRequest> {
  /**
   * @generated from field: string event_id = 2;
   */
  eventId = "";

  constructor(data?: PartialMessage<GetEventAvailableTicketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetEventAvailableTicketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventAvailableTicketsRequest {
    return new GetEventAvailableTicketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsRequest {
    return new GetEventAvailableTicketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventAvailableTicketsRequest {
    return new GetEventAvailableTicketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetEventAvailableTicketsRequest | PlainMessage<GetEventAvailableTicketsRequest> | undefined, b: GetEventAvailableTicketsRequest | PlainMessage<GetEventAvailableTicketsRequest> | undefined): boolean {
    return proto3.util.equals(GetEventAvailableTicketsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.EventAvailableTickets
 */
export class EventAvailableTickets extends Message<EventAvailableTickets> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string event_id = 2;
   */
  eventId = "";

  /**
   * @generated from field: string ticket_name = 3;
   */
  ticketName = "";

  /**
   * @generated from field: float price = 4;
   */
  price = 0;

  /**
   * @generated from field: int32 quantity = 5;
   */
  quantity = 0;

  constructor(data?: PartialMessage<EventAvailableTickets>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.EventAvailableTickets";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ticket_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAvailableTickets {
    return new EventAvailableTickets().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAvailableTickets {
    return new EventAvailableTickets().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAvailableTickets {
    return new EventAvailableTickets().fromJsonString(jsonString, options);
  }

  static equals(a: EventAvailableTickets | PlainMessage<EventAvailableTickets> | undefined, b: EventAvailableTickets | PlainMessage<EventAvailableTickets> | undefined): boolean {
    return proto3.util.equals(EventAvailableTickets, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.TopupCreditsRequest
 */
export class TopupCreditsRequest extends Message<TopupCreditsRequest> {
  /**
   * @generated from field: int32 user_id = 1;
   */
  userId = 0;

  /**
   * @generated from field: int32 amount = 2;
   */
  amount = 0;

  constructor(data?: PartialMessage<TopupCreditsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.TopupCreditsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "amount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopupCreditsRequest {
    return new TopupCreditsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopupCreditsRequest {
    return new TopupCreditsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopupCreditsRequest {
    return new TopupCreditsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TopupCreditsRequest | PlainMessage<TopupCreditsRequest> | undefined, b: TopupCreditsRequest | PlainMessage<TopupCreditsRequest> | undefined): boolean {
    return proto3.util.equals(TopupCreditsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreditsOperationResponse
 */
export class CreditsOperationResponse extends Message<CreditsOperationResponse> {
  /**
   * @generated from field: int32 user_id = 1;
   */
  userId = 0;

  /**
   * @generated from field: int32 old_balance = 2;
   */
  oldBalance = 0;

  /**
   * @generated from field: int32 new_balance = 3;
   */
  newBalance = 0;

  constructor(data?: PartialMessage<CreditsOperationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreditsOperationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "old_balance", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "new_balance", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditsOperationResponse {
    return new CreditsOperationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditsOperationResponse {
    return new CreditsOperationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditsOperationResponse {
    return new CreditsOperationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreditsOperationResponse | PlainMessage<CreditsOperationResponse> | undefined, b: CreditsOperationResponse | PlainMessage<CreditsOperationResponse> | undefined): boolean {
    return proto3.util.equals(CreditsOperationResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.PurchaseTicketResponse
 */
export class PurchaseTicketResponse extends Message<PurchaseTicketResponse> {
  /**
   * @generated from field: com.qapp.hermes.CreditsOperationResponse creditOperation = 1;
   */
  creditOperation?: CreditsOperationResponse;

  /**
   * @generated from field: com.qapp.hermes.EventAvailableTickets Ticket = 2;
   */
  Ticket?: EventAvailableTickets;

  constructor(data?: PartialMessage<PurchaseTicketResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.PurchaseTicketResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creditOperation", kind: "message", T: CreditsOperationResponse },
    { no: 2, name: "Ticket", kind: "message", T: EventAvailableTickets },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseTicketResponse {
    return new PurchaseTicketResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseTicketResponse {
    return new PurchaseTicketResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseTicketResponse {
    return new PurchaseTicketResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PurchaseTicketResponse | PlainMessage<PurchaseTicketResponse> | undefined, b: PurchaseTicketResponse | PlainMessage<PurchaseTicketResponse> | undefined): boolean {
    return proto3.util.equals(PurchaseTicketResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.GetCreditsRequest
 */
export class GetCreditsRequest extends Message<GetCreditsRequest> {
  /**
   * @generated from field: int32 user_id = 1;
   */
  userId = 0;

  constructor(data?: PartialMessage<GetCreditsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.GetCreditsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCreditsRequest {
    return new GetCreditsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCreditsRequest {
    return new GetCreditsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCreditsRequest {
    return new GetCreditsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetCreditsRequest | PlainMessage<GetCreditsRequest> | undefined, b: GetCreditsRequest | PlainMessage<GetCreditsRequest> | undefined): boolean {
    return proto3.util.equals(GetCreditsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreditStatusResponse
 */
export class CreditStatusResponse extends Message<CreditStatusResponse> {
  /**
   * @generated from field: int32 user_id = 1;
   */
  userId = 0;

  /**
   * @generated from field: int32 balance = 2;
   */
  balance = 0;

  constructor(data?: PartialMessage<CreditStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreditStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "balance", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreditStatusResponse {
    return new CreditStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreditStatusResponse {
    return new CreditStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreditStatusResponse {
    return new CreditStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreditStatusResponse | PlainMessage<CreditStatusResponse> | undefined, b: CreditStatusResponse | PlainMessage<CreditStatusResponse> | undefined): boolean {
    return proto3.util.equals(CreditStatusResponse, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.PurchaseRequest
 */
export class PurchaseRequest extends Message<PurchaseRequest> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  /**
   * @generated from field: int32 user_id = 2;
   */
  userId = 0;

  /**
   * @generated from field: int32 ticket_id = 3;
   */
  ticketId = 0;

  constructor(data?: PartialMessage<PurchaseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.PurchaseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "ticket_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurchaseRequest {
    return new PurchaseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurchaseRequest {
    return new PurchaseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurchaseRequest {
    return new PurchaseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PurchaseRequest | PlainMessage<PurchaseRequest> | undefined, b: PurchaseRequest | PlainMessage<PurchaseRequest> | undefined): boolean {
    return proto3.util.equals(PurchaseRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreateEventTicketsRequest
 */
export class CreateEventTicketsRequest extends Message<CreateEventTicketsRequest> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  /**
   * @generated from field: string ticket_name = 2;
   */
  ticketName = "";

  /**
   * @generated from field: float price = 3;
   */
  price = 0;

  /**
   * @generated from field: int32 quantity = 4;
   */
  quantity = 0;

  constructor(data?: PartialMessage<CreateEventTicketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreateEventTicketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticket_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEventTicketsRequest {
    return new CreateEventTicketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEventTicketsRequest {
    return new CreateEventTicketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEventTicketsRequest {
    return new CreateEventTicketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateEventTicketsRequest | PlainMessage<CreateEventTicketsRequest> | undefined, b: CreateEventTicketsRequest | PlainMessage<CreateEventTicketsRequest> | undefined): boolean {
    return proto3.util.equals(CreateEventTicketsRequest, a, b);
  }
}

/**
 * @generated from message com.qapp.hermes.CreateEventTicketsResponse
 */
export class CreateEventTicketsResponse extends Message<CreateEventTicketsResponse> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  /**
   * @generated from field: int32 ticket_id = 2;
   */
  ticketId = 0;

  constructor(data?: PartialMessage<CreateEventTicketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "com.qapp.hermes.CreateEventTicketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticket_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEventTicketsResponse {
    return new CreateEventTicketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEventTicketsResponse {
    return new CreateEventTicketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEventTicketsResponse {
    return new CreateEventTicketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateEventTicketsResponse | PlainMessage<CreateEventTicketsResponse> | undefined, b: CreateEventTicketsResponse | PlainMessage<CreateEventTicketsResponse> | undefined): boolean {
    return proto3.util.equals(CreateEventTicketsResponse, a, b);
  }
}

