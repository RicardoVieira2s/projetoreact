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
import {InvoiceSchema} from '../model/InvoiceSchema';

/**
* Invoice service.
* @module api/InvoiceApi
* @version 1.0.0
*/
export class InvoiceApi {

    /**
    * Constructs a new InvoiceApi. 
    * @alias module:api/InvoiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the invoiceGet operation.
     * @callback moduleapi/InvoiceApi~invoiceGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InvoiceSchema>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the client&#x27;s invoice history
     * @param {String} id Client ID
     * @param {module:api/InvoiceApi~invoiceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    invoiceGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling invoiceGet");
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
      let returnType = [InvoiceSchema];

      return this.apiClient.callApi(
        '/invoice', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}