const should = require('should');
const request = require('supertest');
const userModel = require('../api/users/user.model');
const { crudServer } = require('../server');

describe('Acceptance tests suitcase example', () => {
  let server;

  before(async () => {
    server = await crudServer.start();
  });

  after(() => {
    server.close();
  });

  describe('PUT /api/v1/users', () => {
    it('should throw 400 error', async () => {
      await request(server)
        .put('/api/v1/users')
        .set('Content-Type', 'application/json')
        .send({})
        .expect(400);
    });
    // context('when user with such email exists', () => {
    //   const existingEmail = 'existing@email.com';
    //   let userDoc;

    //   before(async () => {
    //     userDoc = await userModel.create({
    //       username: 'test user',
    //       email: existingEmail,
    //       password: 'password_hash',
    //     });
    //   });

    //   after(async () => {
    //     await userModel.findByIdAndDelete(userDoc._id);
    //   });

    //   it('should throw 409 error', async () => {
    //     await request(server)
    //       .post('/users')
    //       .set('Content-Type', 'application/json')
    //       .send({
    //         username: 'new user',
    //         email: existingEmail,
    //         password: 'some_password',
    //       })
    //       .expect(409);
    //   });
    // });

    // context('when user with such email does not exist', () => {
    //   before(async () => {});

    //   after(async () => {
    //     await userModel.deleteMany();
    //   });

    // it('should return 200 successfull response', async () => {
    //   const response = await request(server)
    //     .post('/users')
    //     .set('Content-Type', 'application/json')
    //     .send({
    //       username: 'new user',
    //       email: 'new_email@email.com',
    //       password: 'some_password',
    //     })
    //     .expect(200);

    //   const responseBody = response.body;

    //   should.exists(responseBody);
    //   responseBody.should.have.property('id').which.is.a.String();
    //   responseBody.should.not.have.property('password');

    //   const createdUser = await userModel.findById(responseBody.id);
    //   should.exists(createdUser);
    // });
    // });
  });
});
