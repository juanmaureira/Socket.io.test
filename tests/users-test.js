const request = require('supertest')
const sinon = require('sinon')
const test = require('ava')
const sandBox = sinon.createSandbox()
let app = null

let userUtils = null

test('should pass', (t) => {
  t.pass()
})

test.before((t) => {
  userUtils = {
    save() {}
  }

  userUtils['@global'] = true;

  sandBox.stub(userUtils, 'save')

  app = proxyquire('../app',{
    '../models' : userUtils
  })

})

test.after(() => {
  sandBox.restore()
})

test.cb('save valid user data', (t) => {
  const user = { name: 'john', email: 'johnDoe@mail.com' }
  request(app)
    .post('/user')
    .send(user)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.falsy(err, 'should not error')
      t.end()
      sandBox.assert.calledOnce(userUtils.save)
    })
})
