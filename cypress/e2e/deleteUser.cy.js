import userData from '../fixtures/userPayloads.json';
import urls from '../fixtures/urls.json'
import methods from '../fixtures/methods.json'

describe('DELETE User', () => {
  it('should delete the user', () => {
cy.request({
  method: methods.Delete,
  url: urls.deleteUser, 
  headers: {
    'x-api-key': 'reqres-free-v1'
  }
}).then((response) => {
  expect(response.status).to.eq(204);
});

  });
});
