// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file proto/com/qapp/zeus/zeus.proto (package com.qapp.zeus, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateEstablishmentRequest, CreateEventRequest, GetEstablishmentsRequest, GetEstablishmentsResponse, GetEventsRequest, GetEventsResponse, PurchaseTicketRequest, RefundTicketRequest, RefundTicketResponse, SetEstablishmentRoleRequest } from "./zeus_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service com.qapp.zeus.Zeus
 */
export const Zeus = {
  typeName: "com.qapp.zeus.Zeus",
  methods: {
    /**
     * @generated from rpc com.qapp.zeus.Zeus.GetEstablishments
     */
    getEstablishments: {
      name: "GetEstablishments",
      I: GetEstablishmentsRequest,
      O: GetEstablishmentsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.GetEvents
     */
    getEvents: {
      name: "GetEvents",
      I: GetEventsRequest,
      O: GetEventsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.CreateEstablishment
     */
    createEstablishment: {
      name: "CreateEstablishment",
      I: CreateEstablishmentRequest,
      O: CreateEstablishmentRequest,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.CreateEvent
     */
    createEvent: {
      name: "CreateEvent",
      I: CreateEventRequest,
      O: CreateEventRequest,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.PurchaseTicket
     */
    purchaseTicket: {
      name: "PurchaseTicket",
      I: PurchaseTicketRequest,
      O: PurchaseTicketRequest,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.RefundTicket
     */
    refundTicket: {
      name: "RefundTicket",
      I: RefundTicketRequest,
      O: RefundTicketResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.SetEstablishmentRole
     */
    setEstablishmentRole: {
      name: "SetEstablishmentRole",
      I: SetEstablishmentRoleRequest,
      O: SetEstablishmentRoleRequest,
      kind: MethodKind.Unary,
    },
  }
} as const;

