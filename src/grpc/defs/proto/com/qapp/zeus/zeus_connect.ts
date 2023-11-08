// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file proto/com/qapp/zeus/zeus.proto (package com.qapp.zeus, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateEstablishmentRequest, CreateEventRequest, Establishment, Event, GetEstablishmentRequest, GetEstablishmentsForUserRequest, GetEstablishmentsRequest, GetEstablishmentsResponse, GetEventsForEstablishmentRequest, GetEventsRequest, GetEventsResponse, PurchaseTicketRequest, RefundTicketRequest, RefundTicketResponse, SetEstablishmentRoleRequest, SetEstablishmentRoleResponse, TicketPurchaseResult, UpdateEstablishmentRequest, UpdateEventRequest } from "./zeus_pb.js";
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
     * @generated from rpc com.qapp.zeus.Zeus.GetEventsForEstablishment
     */
    getEventsForEstablishment: {
      name: "GetEventsForEstablishment",
      I: GetEventsForEstablishmentRequest,
      O: GetEventsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.CreateEstablishment
     */
    createEstablishment: {
      name: "CreateEstablishment",
      I: CreateEstablishmentRequest,
      O: Establishment,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.CreateEvent
     */
    createEvent: {
      name: "CreateEvent",
      I: CreateEventRequest,
      O: Event,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.PurchaseTicket
     */
    purchaseTicket: {
      name: "PurchaseTicket",
      I: PurchaseTicketRequest,
      O: TicketPurchaseResult,
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
      O: SetEstablishmentRoleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.UpdateEstablishment
     */
    updateEstablishment: {
      name: "UpdateEstablishment",
      I: UpdateEstablishmentRequest,
      O: Establishment,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.UpdateEvent
     */
    updateEvent: {
      name: "UpdateEvent",
      I: UpdateEventRequest,
      O: Event,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.GetEstablishment
     */
    getEstablishment: {
      name: "GetEstablishment",
      I: GetEstablishmentRequest,
      O: Establishment,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc com.qapp.zeus.Zeus.GetEstablishmentForUser
     */
    getEstablishmentForUser: {
      name: "GetEstablishmentForUser",
      I: GetEstablishmentsForUserRequest,
      O: GetEstablishmentsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

