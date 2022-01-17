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

/**
 * The SearchSchema model module.
 * @module model/SearchSchema
 * @version 1.0.0
 */
export class SearchSchema {
  /**
   * Constructs a new <code>SearchSchema</code>.
   * @alias module:model/SearchSchema
   * @class
   * @param id {String} 
   * @param idGame {String} 
   * @param idClient {String} 
   * @param dateTime {Date} 
   */
  constructor(id, idGame, idClient, dateTime) {
    this.id = id;
    this.idGame = idGame;
    this.idClient = idClient;
    this.dateTime = dateTime;
  }

  /**
   * Constructs a <code>SearchSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchSchema} obj Optional instance to populate.
   * @return {module:model/SearchSchema} The populated <code>SearchSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchSchema();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('id_game'))
        obj.idGame = ApiClient.convertToType(data['id_game'], 'String');
      if (data.hasOwnProperty('id_client'))
        obj.idClient = ApiClient.convertToType(data['id_client'], 'String');
      if (data.hasOwnProperty('date_time'))
        obj.dateTime = ApiClient.convertToType(data['date_time'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
SearchSchema.prototype.id = undefined;

/**
 * @member {String} idGame
 */
SearchSchema.prototype.idGame = undefined;

/**
 * @member {String} idClient
 */
SearchSchema.prototype.idClient = undefined;

/**
 * @member {Date} dateTime
 */
SearchSchema.prototype.dateTime = undefined;

