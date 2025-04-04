/// <reference types="cypress" />

import { boardObj } from '../support/boardObject';

describe('Board Page, Basic E2E tests', () => {
  beforeEach(() => {
    boardObj.visit();
  });

  it('should displey exactly 4 columns', () => {
    boardObj.elements.listColumnTitles().should('have.length', 4);
  });

  it('should display all columns with correct titles', () => {
    boardObj.elements.listColumnTitles().each((el, index) => {
      cy.wrap(el)
        .invoke('text')
        .then((text) => {
          cy.log(`${text}`);
          expect(text.trim()).to.include(boardObj.columnTitles[index]);
        });
    });
  });

  it('should match count of task', () => {
    boardObj.elements.listColumnTitles().each((el, index) => {
      const columnTitle = boardObj.columnTitles[index];
      cy.log(`${el.toString()} elemeeeent`);
      cy.wrap(el)
        .parent()
        .find('span.lowercase.text-13', { timeout: 30000 })
        .should('not.have.text', 0)
        .invoke('text')
        .then((text) => {
          const numberFromTitle = parseInt(text.trim());
          cy.log(
            `${columnTitle} : Number from title =  ${numberFromTitle.toString()}`
          );
          boardObj.elements.issueCardsByIndex(index).then((tickets) => {
            const realNumOfTickets = tickets.length;
            expect(
              realNumOfTickets,
              `in column ${boardObj.columnsIds[index]}`
            ).to.equal(numberFromTitle);
          });
        });
    });
  });

  it('should move first task from Backlog to Selected for Development', () => {
    boardObj.changeStatusOfCard('Backlog', 'Selected for Development');
  });
  it('should move first task from Selected for Development to In Progress', () => {
    boardObj.changeStatusOfCard('Selected for Development', 'In progress');
  });
  it('should move first task from In Progress to Done', () => {
    boardObj.changeStatusOfCard('In progress', 'Done');
  });
  it('should move first task from Done to In progress', () => {
    boardObj.changeStatusOfCard('Done', 'In progress');
  });
});
