import urls from '../fixtures/urls.json'
import methods from '../fixtures/methods.json'

describe('GET Users API', () => {
  it('should fetch list of users', () => {

    cy.request({
      method: methods.Get,
      url: urls.getUsers,
    }).then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length.greaterThan(0);
    }) 
  });
});
