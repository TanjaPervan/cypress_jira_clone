# cypress_jira_clone
##  QA Documentation

This project includes Cypress E2E tests for validating key functionalities of the Jira Clone board. 
This task demonstrates the ability to write and organize E2E test cases using Cypress for a Jira Clone demo app.

## Test Cases
The test cases are documented and available as a PDF file.

- [Test Cases Document (PDF)] [../documents/TestCases-JiraClone.pdf](https://github.com/TanjaPervan/cypress_jira_clone/blob/main/documents/TestCases-JiraClone.pdf)

- Optionally, Install PDF Viewer: VS Marketplace https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf

## Allure report
After generating the report, you can view it in browser:

- [Open in Browser] [../documents/allure-report/index.html]
- Go to Actions in GitHub 

## CI/CD - Cypress Tests
Automated Cypress tests run via GitHub Actions.

[Workflow file] [.github/workflows/run-cypress-tests.yml]

### Local commands
  - npm install          
  - npm run test         
  - npm run cypress:open  
  - npx allure open
