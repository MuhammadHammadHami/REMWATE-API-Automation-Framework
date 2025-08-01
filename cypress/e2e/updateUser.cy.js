import userData from '../fixtures/userPayloads.json';
import urls from '../fixtures/urls.json'
import methods from '../fixtures/methods.json'

describe('PUT Update User', () => {
  it('should update the user successfully', () => {
    const updatedData = { name: userData.updateUser.name, job: userData.updateUser.job };

    cy.request({
      method: methods.Put,
      url: urls.updateUser,
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: updatedData,
      failOnStatusCode: false  
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(userData.updateUser.name);
    });
  });
});
