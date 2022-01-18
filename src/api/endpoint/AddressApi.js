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
import {ApiClient} from "../ApiClient";
import {ClientAddressSchema} from '../model/ClientAddressSchema';
import {ErrorSchema} from '../model/ErrorSchema';

/**
* Address service.
* @module api/AddressApi
* @version 1.0.0
*/
export class AddressApi {

    /**
    * Constructs a new AddressApi. 
    * @alias module:api/AddressApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addressGet operation.
     * @callback moduleapi/AddressApi~addressGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientAddressSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a client&#x27;s address
     * @param {String} id Client ID
     * @param {module:api/AddressApi~addressGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addressGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addressGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientAddressSchema;

      return this.apiClient.callApi(
        '/address', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the addressPut operation.
     * @callback moduleapi/AddressApi~addressPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientAddressSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an address
     * @param {module:model/ClientAddressSchema} body 
     * @param {String} id Address ID
     * @param {module:api/AddressApi~addressPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addressPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addressPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addressPut");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ClientAddressSchema;

      return this.apiClient.callApi(
        '/address', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}