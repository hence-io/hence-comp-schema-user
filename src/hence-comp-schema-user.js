'use strict';
/**
 * @module hence-comp-schema-user
 */
import console from 'consoler';
import {HenceSchema} from 'hence-comp';

let is = 'hence-comp-schema-user';

/**
 * HenceCompSchemaUser Component
 * @constructor
 */
let HenceCompSchemaUser = HenceSchema({
  is, // auto set as is : is, es6 laziness joy!
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  properties: {},

  /*********************************************************************************************************************
   * Event Listeners
   ********************************************************************************************************************/

  /**
   * When working with listeners, if their target element doesn’t exist on the DOM you get a very basic nonspecific
   * error 'Uncaught TypeError: Invalid value used as weak map key’!  Make sure to review the listeners you set up
   * against you DOM elements. By default listeners look for IDs on elements so ‘myButton.tap’ will watch click/touches
   * on a #myButton element in the component
   */
  listeners: {},


  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

    _executeQuery() {
    let self = this;
    let query = self.query || {};
    let results = self.results || [];

    switch (this.action) {
      case 'getUser':
        // do query

        if (query.id === 2) {
          results.push({
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane@doe.com',
            mySites: {
              'Site 1': '#site1',
              'Site 2': '#site2'
            }
          });
        } else {
          results.push({
            firstName: 'John',
            lastName: 'Doe',
            email: 'jone@doe.com',
            mySites: {
              'Site 1': '#site1',
              'Site 2': '#site2'
            }
          });
        }
        break;
    }

    //console.log('_executeQuery ', results, query);

    return results;
  }
});

export {is};
export default HenceCompSchemaUser;
