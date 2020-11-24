require('dotenv').config({ path: './.env' });
const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert } = require('joi');

describe('getMonthReports test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('GET /annual', () => {
    context('wrong token provided', () => {
        let response;
        let startMonth;
        let startYear;

      before(async () => {
        response = await request(server)
          .get(`/api/v1/month-reports/annual?startMonth=${startMonth}&startYear=${startYear}`
          .set('Authorization', 'Bearer wrong token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });

      context('when good token was provided', () => {
        let response;
        let startMonth='';
          let startYear = '';
          
          before(async () => {
              
          })
    });
  });
});
