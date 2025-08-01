import userData from '../fixtures/userPayloads.json';
import urls from '../fixtures/urls.json'
import methods from '../fixtures/methods.json'

describe('POST Create User', () => {
  it('should create a user successfully', () => {
    cy.request({
      method: methods.Post,
      url: urls.createUser,
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: userData,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });
});
