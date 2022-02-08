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
import {TagSchema} from '../model/TagSchema';

/**
* Tag service.
* @module api/TagApi
* @version 1.0.0
*/
export class TagApi {

    /**
    * Constructs a new TagApi. 
    * @alias module:api/TagApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the tagDelete operation.
     * @callback moduleapi/TagApi~tagDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a tag
     * @param {String} id Tag ID
     * @param {module:api/TagApi~tagDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tagDelete(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tagDelete");
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
      let returnType = TagSchema;

      return this.apiClient.callApi(
        '/tag', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tagGet operation.
     * @callback moduleapi/TagApi~tagGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TagSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a tag
     * Gets a tag by ID or gets all tags if no ID is given
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Tag ID
     * @param {module:api/TagApi~tagGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tagGet(opts, callback) {
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
      let returnType = [TagSchema];

      return this.apiClient.callApi(
        '/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tagPost operation.
     * @callback moduleapi/TagApi~tagPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new tag
     * @param {module:model/TagSchema} body 
     * @param {module:api/TagApi~tagPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tagPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tagPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tagPut operation.
     * @callback moduleapi/TagApi~tagPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a tag
     * @param {module:model/TagSchema} body 
     * @param {String} id Tag ID
     * @param {module:api/TagApi~tagPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    tagPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tagPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tagPut");
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
      let returnType = null;

      return this.apiClient.callApi(
        '/tag', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}