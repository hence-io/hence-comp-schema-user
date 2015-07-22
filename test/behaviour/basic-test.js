var component = document.querySelector('hence-comp-schema-user');

suite('<hence-comp-schema-user>', function () {

  test('says hello', function () {
    assert.equal(component.greeting, 'test greeting');
  });

  test('says hello', function () {
    assert.equal(component.sayHello(), 'hence-comp-schema-user says, Hello World!');

    var greetings = component.sayHello('greetings Earthlings');
    assert.equal(greetings, 'hence-comp-schema-user says, greetings Earthlings');
  });
});