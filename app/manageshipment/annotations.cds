using CatalogService as service from '../../srv/cat-service';

annotate service.Shipment with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'waybill',
            Value : waybill,
        },
        {
            $Type : 'UI.DataField',
            Label : 'shipmentTrackingLink',
            Value : shipmentTrackingLink,
        },
    ]
);
annotate service.Shipment with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'waybill',
                Value : waybill,
            },
            {
                $Type : 'UI.DataField',
                Label : 'shipmentTrackingLink',
                Value : shipmentTrackingLink,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
