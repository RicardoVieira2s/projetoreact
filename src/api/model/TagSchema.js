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
 * The TagSchema model module.
 * @module model/TagSchema
 * @version 1.0.0
 */
export class TagSchema {
  /**
   * Constructs a new <code>TagSchema</code>.
   * @alias module:model/TagSchema
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>TagSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagSchema} obj Optional instance to populate.
   * @return {module:model/TagSchema} The populated <code>TagSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagSchema();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
TagSchema.prototype.id = undefined;

/**
 * @member {String} name
 */
TagSchema.prototype.name = undefined;

