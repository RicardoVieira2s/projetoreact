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
 * The GameSchema model module.
 * @module model/GameSchema
 * @version 1.0.0
 */
export class GameSchema {
  /**
   * Constructs a new <code>GameSchema</code>.
   * @alias module:model/GameSchema
   * @class
   * @param idPublisher {String} 
   * @param name {String} 
   * @param price {Number} 
   * @param discount {Number} 
   * @param state {module:model/GameSchema.StateEnum} 
   * @param coverImage {String} 
   * @param releaseDate {Date} 
   * @param description {String} 
   * @param downloadLink {String} 
   */
  constructor(idPublisher, name, price, discount, state, coverImage, releaseDate, description, downloadLink) {
    this.idPublisher = idPublisher;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.state = state;
    this.coverImage = coverImage;
    this.releaseDate = releaseDate;
    this.description = description;
    this.downloadLink = downloadLink;
  }

  /**
   * Constructs a <code>GameSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GameSchema} obj Optional instance to populate.
   * @return {module:model/GameSchema} The populated <code>GameSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GameSchema();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('id_publisher'))
        obj.idPublisher = ApiClient.convertToType(data['id_publisher'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('discount'))
        obj.discount = ApiClient.convertToType(data['discount'], 'Number');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('cover_image'))
        obj.coverImage = ApiClient.convertToType(data['cover_image'], 'String');
      if (data.hasOwnProperty('release_date'))
        obj.releaseDate = ApiClient.convertToType(data['release_date'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('download_link'))
        obj.downloadLink = ApiClient.convertToType(data['download_link'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GameSchema.prototype.id = undefined;

/**
 * @member {String} idPublisher
 */
GameSchema.prototype.idPublisher = undefined;

/**
 * @member {String} name
 */
GameSchema.prototype.name = undefined;

/**
 * @member {Number} price
 */
GameSchema.prototype.price = undefined;

/**
 * @member {Number} discount
 */
GameSchema.prototype.discount = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
GameSchema.StateEnum = {
  /**
   * value: "active"
   * @const
   */
  active: "active",

  /**
   * value: "inactive"
   * @const
   */
  inactive: "inactive",

  /**
   * value: "upcoming"
   * @const
   */
  upcoming: "upcoming"
};
/**
 * @member {module:model/GameSchema.StateEnum} state
 */
GameSchema.prototype.state = undefined;

/**
 * @member {String} coverImage
 */
GameSchema.prototype.coverImage = undefined;

/**
 * @member {Date} releaseDate
 */
GameSchema.prototype.releaseDate = undefined;

/**
 * @member {String} description
 */
GameSchema.prototype.description = undefined;

/**
 * @member {String} downloadLink
 */
GameSchema.prototype.downloadLink = undefined;

