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
import {ErrorSchema} from '../model/ErrorSchema';
import {GameSchema} from '../model/GameSchema';

/**
* Wishlist service.
* @module api/WishlistApi
* @version 1.0.0
*/
export class WishlistApi {

    /**
    * Constructs a new WishlistApi. 
    * @alias module:api/WishlistApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the wishlistDelete operation.
     * @callback moduleapi/WishlistApi~wishlistDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a game from the client&#x27;s wishlist
     * Removes a game from the client wishlist by ID or removes all games from its wishlist if no game ID is given
     * @param {String} clientID Client ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.gameID Game ID
     * @param {module:api/WishlistApi~wishlistDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    wishlistDelete(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling wishlistDelete");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'clientID': clientID,'gameID': opts['gameID']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GameSchema;

      return this.apiClient.callApi(
        '/wishlist', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the wishlistGet operation.
     * @callback moduleapi/WishlistApi~wishlistGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GameSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all the games the client has in his wishlist
     * @param {String} id Client ID
     * @param {module:api/WishlistApi~wishlistGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    wishlistGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling wishlistGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'id': id['id']
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
        '/wishlist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the wishlistPost operation.
     * @callback moduleapi/WishlistApi~wishlistPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a game to the client&#x27;s wishlist
     * @param {String} clientID Client ID
     * @param {String} gameID Game ID
     * @param {module:api/WishlistApi~wishlistPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    wishlistPost(clientID, gameID, callback) {
      
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling wishlistPost");
      }
      // verify the required parameter 'gameID' is set
      if (gameID === undefined || gameID === null) {
        throw new Error("Missing the required parameter 'gameID' when calling wishlistPost");
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
        '/wishlist', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}