import _ from 'lodash';
import Component from '../../src/hence-user';

describe('ES6 component Tests - hence-user', () => {
  let component;

  beforeEach(() => {
    component = _.cloneDeep(Component);
  });

  afterEach(() => {
  });

  it('should have the default greeting property set', () => {
    expect(component.properties.greeting.value).to.equal('Hello!');
  });

  it('should sayHello', () => {
    expect(component.sayHello()).to.equal('hence-user says, Hello World!');
  });

  it('should have a polymer config', () => {
    expect(component.is).to.equal('hence-user');
  });
});
