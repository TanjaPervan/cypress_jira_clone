/// <reference types="cypress" />

import { kanbanBoard } from '/Users/macbookpro/cypress_jira_clone/cypress/support/pageObject/kanbanBoard';

describe("Kanban Board – Basic rendering", () => {
  beforeEach(() => {
    kanbanBoard.visit();
  });

  it("should displey exactly 4 columns", () => {
    kanbanBoard.elements.listColumnTitles().should("have.length", 4);
  });

  it("should display all columns with correct titles", () => {
    const listOfColumn = [
      "Backlog",
      "Selected for Development",
      "In progress",
      "Done",
    ];

    kanbanBoard.elements.listColumnTitles().each((el, index) => {
      cy.wrap(el)
        .invoke("text")
        .then((text) => {
          cy.log(`${text}`);
          expect(text.trim()).to.include(listOfColumn[index]);
        });
    });
  });

  it("should match count of task", () => {
    const listOfColumn = [
      "Backlog",
      "Selected for Development",
      "In progress",
      "Done",
    ];
    const columnsIds = ["Backlog", "Selected", "InProgress", "Done"];

    kanbanBoard.elements.listColumnTitles().each((el, index) => {
      const columnTitle = listOfColumn[index];
      cy.log(`${el.toString()} elemeeeent`);
      cy.wrap(el)
        .parent()
        .find("span.lowercase.text-13", { timeout: 30000 })
        .should("not.have.text", 0)
        .invoke("text")
        .then((text) => {
          const numberFromTitle = parseInt(text.trim());
          cy.log(
            `${columnTitle} : Number from title =  ${numberFromTitle.toString()}`
          );

          cy.get(`#${columnsIds[index]} issue-card`, { timeout: 30000 }).then(
            (tickets) => {
              const realNumOfTickets = tickets.length;
              expect(
                realNumOfTickets,
                `in column ${columnsIds[index]}`
              ).to.equal(numberFromTitle);
            }
          );
        });
    });
  });
});



//})




