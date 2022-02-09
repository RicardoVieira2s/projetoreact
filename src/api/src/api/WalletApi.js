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
import {ClientWalletSchema} from '../model/ClientWalletSchema';
import {ErrorSchema} from '../model/ErrorSchema';

/**
* Wallet service.
* @module api/WalletApi
* @version 1.0.0
*/
export class WalletApi {

    /**
    * Constructs a new WalletApi. 
    * @alias module:api/WalletApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addBalanceGet operation.
     * @callback moduleapi/WalletApi~addBalanceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientWalletSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds balance to the client&#x27;s wallet
     * @param {String} id Client ID
     * @param {Number} amount Amount to add
     * @param {module:api/WalletApi~addBalanceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addBalanceGet(id, amount, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addBalanceGet");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling addBalanceGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'id': id,'amount': amount
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientWalletSchema;

      return this.apiClient.callApi(
        '/addBalance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the walletGet operation.
     * @callback moduleapi/WalletApi~walletGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientWalletSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a client&#x27;s wallet
     * @param {String} id Client ID
     * @param {module:api/WalletApi~walletGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    walletGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling walletGet");
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
      let returnType = ClientWalletSchema;

      return this.apiClient.callApi(
        '/wallet', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the walletPut operation.
     * @callback moduleapi/WalletApi~walletPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientWalletSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a wallet
     * @param {module:model/ClientWalletSchema} body 
     * @param {String} id Wallet ID
     * @param {module:api/WalletApi~walletPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    walletPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling walletPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling walletPut");
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
      let returnType = ClientWalletSchema;

      return this.apiClient.callApi(
        '/wallet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}