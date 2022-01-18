/*
 * GOOFR Store
 * API documentation for GOOFR Store, a digital game store.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: help.goofrportugal@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {InvoiceGameSchema} from './InvoiceGameSchema';

/**
 * The InvoiceSchema model module.
 * @module model/InvoiceSchema
 * @version 1.0.0
 */
export class InvoiceSchema {
  /**
   * Constructs a new <code>InvoiceSchema</code>.
   * @alias module:model/InvoiceSchema
   * @class
   * @param id {String} 
   * @param idClient {String} 
   * @param purchaseDate {Date} 
   * @param vatId {Number} 
   * @param games {Array.<module:model/InvoiceGameSchema>} 
   */
  constructor(id, idClient, purchaseDate, vatId, games) {
    this.id = id;
    this.idClient = idClient;
    this.purchaseDate = purchaseDate;
    this.vatId = vatId;
    this.games = games;
  }

  /**
   * Constructs a <code>InvoiceSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceSchema} obj Optional instance to populate.
   * @return {module:model/InvoiceSchema} The populated <code>InvoiceSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InvoiceSchema();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('id_client'))
        obj.idClient = ApiClient.convertToType(data['id_client'], 'String');
      if (data.hasOwnProperty('purchase_date'))
        obj.purchaseDate = ApiClient.convertToType(data['purchase_date'], 'Date');
      if (data.hasOwnProperty('vat_id'))
        obj.vatId = ApiClient.convertToType(data['vat_id'], 'Number');
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], [InvoiceGameSchema]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
InvoiceSchema.prototype.id = undefined;

/**
 * @member {String} idClient
 */
InvoiceSchema.prototype.idClient = undefined;

/**
 * @member {Date} purchaseDate
 */
InvoiceSchema.prototype.purchaseDate = undefined;

/**
 * @member {Number} vatId
 */
InvoiceSchema.prototype.vatId = undefined;

/**
 * @member {Array.<module:model/InvoiceGameSchema>} games
 */
InvoiceSchema.prototype.games = undefined;

