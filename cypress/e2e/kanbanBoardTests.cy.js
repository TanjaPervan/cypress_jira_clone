/// <reference types="cypress" />

import { kanbanBoard } from '/Users/macbookpro/cypress_jira_clone/cypress/support/pageObject/kanbanBoard';

describe('Kanban Board – Basic rendering',()=>{

beforeEach(()=>{
  kanbanBoard.visit();
});

it('should displey exactly 4 columns',()=>{
kanbanBoard.elements.listColumnTitles().should('have.length',4);

});

it(('should display all columns with correct titles'),()=>{

const listOfColumn=['Backlog','Selected for Development','In progress','Done'];

  kanbanBoard.elements.listColumnTitles().each((el,index)=>{
    cy.wrap(el).invoke('text').then((text)=>{
      expect(text.trim()).to.include(listOfColumn[index]);
    })
  })
});

});
