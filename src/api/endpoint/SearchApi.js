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
import {ErrorSchema} from '../model/ErrorSchema';
import {GameSchema} from '../model/GameSchema';
import {SearchSchema} from '../model/SearchSchema';
import {TagSchema} from '../model/TagSchema';

/**
* Search service.
* @module api/SearchApi
* @version 1.0.0
*/
export class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the searchGameGet operation.
     * @callback moduleapi/SearchApi~searchGameGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GameSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search games
     * @param {String} search Search query
     * @param {module:api/SearchApi~searchGameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchGameGet(search, callback) {
      
      let postBody = null;
      // verify the required parameter 'search' is set
      if (search === undefined || search === null) {
        throw new Error("Missing the required parameter 'search' when calling searchGameGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'search': search
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
        '/searchGame', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchHistoryGet operation.
     * @callback moduleapi/SearchApi~searchHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SearchSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the client&#x27;s search history
     * @param {String} id Client ID
     * @param {module:api/SearchApi~searchHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchHistoryGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling searchHistoryGet");
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
      let returnType = [SearchSchema];

      return this.apiClient.callApi(
        '/searchHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchHistoryPost operation.
     * @callback moduleapi/SearchApi~searchHistoryPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a search to the client&#x27;s history
     * @param {String} clientID Client ID
     * @param {String} gameID Game ID
     * @param {module:api/SearchApi~searchHistoryPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    searchHistoryPost(clientID, gameID, callback) {
      
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling searchHistoryPost");
      }
      // verify the required parameter 'gameID' is set
      if (gameID === undefined || gameID === null) {
        throw new Error("Missing the required parameter 'gameID' when calling searchHistoryPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'clientID': clientID,'gameID': gameID
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/searchHistory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the searchTagGet operation.
     * @callback moduleapi/SearchApi~searchTagGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TagSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search tags
     * @param {String} search Search query
     * @param {module:api/SearchApi~searchTagGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    searchTagGet(search, callback) {
      
      let postBody = null;
      // verify the required parameter 'search' is set
      if (search === undefined || search === null) {
        throw new Error("Missing the required parameter 'search' when calling searchTagGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'search': search
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
        '/searchTag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}