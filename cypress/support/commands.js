// Example: Custom command to create a user
Cypress.Commands.add('createUser', (userData) => {
  cy.request('POST', 'https://reqres.in/api/users', userData);
});


