// Load commands
import './commands';

Cypress.on('request', (req) => {
  req.headers['x-api-key'] = 'reqres-free-v1';
});