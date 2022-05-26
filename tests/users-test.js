const request = require('supertest');
const app = require('../app');
const test = require('ava');


test('should pass', (t) => {
    t.pass();
});

test('save valid user data', (t) => {
    const user = { name: 'john', email: 'johnDoe@mail.com' }
    request(app)
    .post('/users')
    .expect('Content-type',/json/)
    .expect(201)
    .end( (err,res) => {
        t.falsy(err, 'Should not error');
    })

});