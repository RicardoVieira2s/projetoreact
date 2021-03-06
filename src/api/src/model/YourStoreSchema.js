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
import {GameSchema} from './GameSchema';

/**
 * The YourStoreSchema model module.
 * @module model/YourStoreSchema
 * @version 1.0.0
 */
export class YourStoreSchema {
  /**
   * Constructs a new <code>YourStoreSchema</code>.
   * @alias module:model/YourStoreSchema
   * @class
   * @param featured {Array.<module:model/GameSchema>} 
   * @param recommended {Array.<module:model/GameSchema>} 
   * @param specialOffers {Array.<module:model/GameSchema>} 
   * @param discover {Array.<module:model/GameSchema>} 
   */
  constructor(featured, recommended, specialOffers, discover) {
    this.featured = featured;
    this.recommended = recommended;
    this.specialOffers = specialOffers;
    this.discover = discover;
  }

  /**
   * Constructs a <code>YourStoreSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/YourStoreSchema} obj Optional instance to populate.
   * @return {module:model/YourStoreSchema} The populated <code>YourStoreSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new YourStoreSchema();
      if (data.hasOwnProperty('featured'))
        obj.featured = ApiClient.convertToType(data['featured'], [GameSchema]);
      if (data.hasOwnProperty('recommended'))
        obj.recommended = ApiClient.convertToType(data['recommended'], [GameSchema]);
      if (data.hasOwnProperty('specialOffers'))
        obj.specialOffers = ApiClient.convertToType(data['specialOffers'], [GameSchema]);
      if (data.hasOwnProperty('discover'))
        obj.discover = ApiClient.convertToType(data['discover'], [GameSchema]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GameSchema>} featured
 */
YourStoreSchema.prototype.featured = undefined;

/**
 * @member {Array.<module:model/GameSchema>} recommended
 */
YourStoreSchema.prototype.recommended = undefined;

/**
 * @member {Array.<module:model/GameSchema>} specialOffers
 */
YourStoreSchema.prototype.specialOffers = undefined;

/**
 * @member {Array.<module:model/GameSchema>} discover
 */
YourStoreSchema.prototype.discover = undefined;

