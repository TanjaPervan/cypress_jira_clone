/// <reference types="cypress" />

import { boardObj } from '../support/pageObject/boardObjects';
import { settingsObj } from '../support/pageObject/settingsObjects';

describe('Settings project Page, Basic E2E tests', () => {
  beforeEach(() => {
    boardObj.visit();
  });

  it('TC08 - should update Project Settings and Verify on board', () => {
    const projectName = 'Personal project';
    const projectUrl = 'https://github.com/TanjaPervan/cypress_jira_clone';
    const projectCategory = 'Marketing';
    const projectDescription = 'Project Descriptions.';

    cy.contains('a', 'Project Settings').click();
    settingsObj.elements.nameFiled().clear().type(projectName);
    settingsObj.elements.urlFiled().clear().type(projectUrl);
    settingsObj.elements.categoryFiled().select(projectCategory);

    settingsObj.elements.categoryFiled().should('have.value', projectCategory);
    settingsObj.elements.descriptionFiled().clear().type(projectDescription);

    cy.contains('button', 'Save').click();

    cy.verifyIncludesText(
      settingsObj.elements.projectNameSelector,
      projectName
    );
    cy.verifyIncludesText(
      settingsObj.elements.projectCategorySelector,
      projectCategory,
      true
    );
    cy.go('back');
  });
});
