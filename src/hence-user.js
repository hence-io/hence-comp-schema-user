'use strict';
/**
 * @module hence-user
 */
import console from 'consoler';
import Hence from 'hence-component-framework';

/**
 * HenceUser Component
 * @constructor
 */
let HenceUser = Hence.Schema({
  is: 'hence-user',
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  properties: {},


  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   * Determine the action and query passed in to handle the request and provide whatever state data is required along.
   * Executed by the ```render()``` function
   *
   * @private
   */
    _executeQuery(done) {
    let self = this;
    let {action,query} = self;
    let results = [];

    switch (action) {
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

    done(null, results);
  }
});

export default HenceUser;
