namespace my.bookshop;

using { managed } from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity Shipment: managed  {
  key ID : UUID;
  waybill  : String;
  shipmentTrackingLink  : String;
}

entity CourierDetails: managed  {
  key ID : UUID;
  shipmentId: UUID;
  waybill  : String;
  shipmentTrackingLink  : String;
}

