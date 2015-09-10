'use strict';
/**
 * @module hence-user
 */
import faker from 'faker';
import _isObject from 'lodash/lang/isObject';
import _isFunction from 'lodash/lang/isFunction';
import _extend from 'lodash/object/extend';

let MockAPI = {
  fakeEntry() {
    let card = faker.helpers.contextualCard();
    let [firstName, lastName] = card.username.split(/[\._]/);

    return _extend(card, {
      firstName,
      lastName,
      mySites: [
        {
          label: faker.internet.domainName(),
          url: faker.internet.url()
        },
        {
          label: faker.internet.domainName(),
          url: faker.internet.url()
        }
      ],
      biography: faker.hacker.phrase(),
      profilePhoto: faker.image.imageUrl()
    });
  },
  list() {
    let entries = [];

    for (let i = 0; i < 10; i++) {
      entries.push(this.fakeEntry());
    }

    return entries;
  },
  find() {
    let [arg1,arg2] = arguments;

    let query = _isObject(arg1) ? arg1 : {};
    let done = _isFunction(arg1) ? arg1 : arg2;
    let err;

    if (query.id) {
      done(err, this.list()[query.id - 1]);
    } else {
      done(err, this.list());
    }
  }
};

export default MockAPI;
