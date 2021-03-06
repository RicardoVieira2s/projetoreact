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
 * Swagger Codegen version: 3.0.33
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ClientSchema model module.
 * @module model/ClientSchema
 * @version 1.0.0
 */
export class ClientSchema {
  /**
   * Constructs a new <code>ClientSchema</code>.
   * @alias module:model/ClientSchema
   * @class
   * @param name {String} 
   * @param surname {String} 
   * @param picture {String} 
   * @param birthdate {Date} 
   * @param phoneNumber {String} 
   * @param vatId {Number} 
   * @param active {Boolean} 
   */
  constructor(name, surname, picture, birthdate, phoneNumber, vatId, active) {
    this.name = name;
    this.surname = surname;
    this.picture = picture;
    this.birthdate = birthdate;
    this.phoneNumber = phoneNumber;
    this.vatId = vatId;
    this.active = active;
  }

  /**
   * Constructs a <code>ClientSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientSchema} obj Optional instance to populate.
   * @return {module:model/ClientSchema} The populated <code>ClientSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientSchema();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('surname'))
        obj.surname = ApiClient.convertToType(data['surname'], 'String');
      if (data.hasOwnProperty('picture'))
        obj.picture = ApiClient.convertToType(data['picture'], 'String');
      if (data.hasOwnProperty('birthdate'))
        obj.birthdate = ApiClient.convertToType(data['birthdate'], 'Date');
      if (data.hasOwnProperty('phone_number'))
        obj.phoneNumber = ApiClient.convertToType(data['phone_number'], 'String');
      if (data.hasOwnProperty('vat_id'))
        obj.vatId = ApiClient.convertToType(data['vat_id'], 'Number');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
ClientSchema.prototype.id = undefined;

/**
 * @member {String} name
 */
ClientSchema.prototype.name = undefined;

/**
 * @member {String} surname
 */
ClientSchema.prototype.surname = undefined;

/**
 * @member {String} picture
 */
ClientSchema.prototype.picture = undefined;

/**
 * @member {Date} birthdate
 */
ClientSchema.prototype.birthdate = undefined;

/**
 * @member {String} phoneNumber
 */
ClientSchema.prototype.phoneNumber = undefined;

/**
 * @member {Number} vatId
 */
ClientSchema.prototype.vatId = undefined;

/**
 * @member {Boolean} active
 */
ClientSchema.prototype.active = undefined;

