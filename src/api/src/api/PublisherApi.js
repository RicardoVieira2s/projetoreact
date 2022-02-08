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
import {GameSchema} from '../model/GameSchema';
import {PublisherSchema} from '../model/PublisherSchema';

/**
* Publisher service.
* @module api/PublisherApi
* @version 1.0.0
*/
export class PublisherApi {

    /**
    * Constructs a new PublisherApi. 
    * @alias module:api/PublisherApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the publisherDelete operation.
     * @callback moduleapi/PublisherApi~publisherDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublisherSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a publisher
     * @param {String} id Publisher ID
     * @param {module:api/PublisherApi~publisherDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    publisherDelete(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling publisherDelete");
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
      let returnType = PublisherSchema;

      return this.apiClient.callApi(
        '/publisher', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the publisherGamesGet operation.
     * @callback moduleapi/PublisherApi~publisherGamesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GameSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all the publisher&#x27;s games
     * @param {String} id Publisher ID
     * @param {module:api/PublisherApi~publisherGamesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    publisherGamesGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling publisherGamesGet");
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
      let returnType = [GameSchema];

      return this.apiClient.callApi(
        '/publisherGames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the publisherGet operation.
     * @callback moduleapi/PublisherApi~publisherGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PublisherSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a publisher
     * Gets a publisher by ID or gets all publishers if no ID is given
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Publisher ID
     * @param {module:api/PublisherApi~publisherGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    publisherGet(opts, callback) {
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
      let returnType = [PublisherSchema];

      return this.apiClient.callApi(
        '/publisher', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the publisherPost operation.
     * @callback moduleapi/PublisherApi~publisherPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublisherSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new publisher
     * @param {module:model/PublisherSchema} body 
     * @param {module:api/PublisherApi~publisherPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    publisherPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling publisherPost");
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
      let returnType = PublisherSchema;

      return this.apiClient.callApi(
        '/publisher', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the publisherPut operation.
     * @callback moduleapi/PublisherApi~publisherPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublisherSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a publisher
     * @param {module:model/PublisherSchema} body 
     * @param {String} id Publisher ID
     * @param {module:api/PublisherApi~publisherPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    publisherPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling publisherPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling publisherPut");
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
      let returnType = PublisherSchema;

      return this.apiClient.callApi(
        '/publisher', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}