using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    
    @odata.draft.enabled
    entity Shipment as projection on my.Shipment;
    
    @odata.draft.enabled
    entity CourierDetails as projection on my.CourierDetails;
}
