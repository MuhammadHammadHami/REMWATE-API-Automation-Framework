# REMWATE API Automation Framework

This repository contains an automated API testing framework for the REMWATE application. The framework is designed to validate RESTful API endpoints through reliable, maintainable, and scalable test cases.

---

## Features

-  Automated API testing for REMWATE endpoints
-  Organized test suites with clear request/response validations
-  Environment-based configuration support
-  JSON schema and status code validation
-  Test reporting support (e.g., HTML, CLI)
-  Easy CI/CD integration with GitHub Actions or Jenkins

---

## Tech Stack

- JavaScript / TypeScript
- Axios / Supertest / Postman / Newman *(depending on your actual stack)*
- Mocha / Chai *(if Node.js based)*
- GitHub Actions or Jenkins (for CI/CD)
- JSON-based test data and environment configs

---

## Folder Structure

```bash
REMWATE-API-Automation-Framework/
│
├── e2e/                    # API test cases
├── fixtures/               # Test data files (JSON)
├── .github/workflows/      # CI pipeline (GitHub Actions)
├── package.json            # Project dependencies & scripts
├── README.md               # Project documentation
```
## Getting Started
1. Install dependencies
```bash
npm install
```

2. Run all API tests
```bash
npm test
```

3. Run tests with specific environment
```bash
ENV=staging npm test
```
(Update .env or use CLI vars for base URLs, tokens, etc.)

## Test Reporting
CLI output available by default

Optionally generate HTML reports using tools like Mochawesome or Allure

```bash
npm run report
```

## CI/CD Integration
The framework supports integration with:

 GitHub Actions

 Jenkins

 GitLab CI

 Any Docker-compatible pipeline

Sample workflow included in .github/workflows/.

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and open a pull request. For major changes, open an issue first to discuss improvements.

