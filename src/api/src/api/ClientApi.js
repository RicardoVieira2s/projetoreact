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
import {ApiClient} from "../ApiClient";
import {ClientSchema} from '../model/ClientSchema';
import {ErrorSchema} from '../model/ErrorSchema';

/**
* Client service.
* @module api/ClientApi
* @version 1.0.0
*/
export class ClientApi {

    /**
    * Constructs a new ClientApi. 
    * @alias module:api/ClientApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the clientDelete operation.
     * @callback moduleapi/ClientApi~clientDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a client
     * @param {String} id Client ID
     * @param {module:api/ClientApi~clientDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    clientDelete(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling clientDelete");
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
      let returnType = ClientSchema;

      return this.apiClient.callApi(
        '/client', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the clientGet operation.
     * @callback moduleapi/ClientApi~clientGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ClientSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a client
     * Gets a client by ID or gets all clients if no ID is given
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Client ID
     * @param {module:api/ClientApi~clientGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    clientGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ClientSchema];

      return this.apiClient.callApi(
        '/client', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the clientPut operation.
     * @callback moduleapi/ClientApi~clientPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a client
     * @param {module:model/ClientSchema} body 
     * @param {String} id Client ID
     * @param {module:api/ClientApi~clientPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    clientPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling clientPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling clientPut");
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
      let returnType = ClientSchema;

      return this.apiClient.callApi(
        '/client', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}