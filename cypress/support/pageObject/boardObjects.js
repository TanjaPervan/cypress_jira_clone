class BoardObject {
  columnTitles = ['Backlog', 'Selected for Development', 'In progress', 'Done'];
  columnsIds = ['Backlog', 'Selected', 'InProgress', 'Done'];

  columnMap = {
    'Backlog': 'Backlog',
    'Selected for Development': 'Selected',
    'In progress': 'InProgress',
    'Done': 'Done',
  };

  elements = {
    listColumnTitles: () =>
      cy.get('.px-3.pb-4.pt-3.uppercase.text-textMedium.text-13.truncate'),

    issueCardsInColumn: (columnsId) => cy.get(`#${columnsId} issue-card`),
    issueCardsByIndex: (index) =>
      cy.get(`#${this.columnsIds[index]} issue-card`, {
        timeout: 10000,
      }),
    modalIssue: () => cy.get('issue-modal', { timeout: 10000 }),
    statusDropdownItem: (text) => cy.contains('li', text),

    statusButtonSelector: 'button.btn.btn-secondary.uppercase span',
  };
  visit() {
    cy.visit('https://jira.trungk18.com/project/board');
  }

  getColumnId(title) {
    const index = this.columnTitles.indexOf(title);
    cy.log(`index = ${index} `);

    return this.columnsIds[index];
  }

  changeStatusOfCard(fromStatus, toStatus) {
    const fromColumn = this.getColumnId(fromStatus);
    const toColumn = this.getColumnId(toStatus);
    cy.log(`From column : ${fromColumn} `);
    cy.log(`To column : ${toColumn} `);
    cy.get(`#${fromColumn} issue-card`).first().as('selectedTicket');

    cy.get('@selectedTicket')
      .invoke('text')
      .then((text) => {
        const ticketTitle = text.trim();
        cy.log(`Ticket title: ${ticketTitle}`);

        cy.get('@selectedTicket').click();

        this.elements.modalIssue().scrollIntoView().should('exist');

        this.elements
          .modalIssue()
          .getTextWithoutSpaces('button', fromStatus)
          .click();

        this.elements.statusDropdownItem(toStatus).click();

        this.elements
          .modalIssue()
          .scrollIntoView()
          .getTextWithoutSpaces('button', toStatus)
          .should('exist');

        cy.get('button.btn.btn-empty.icon-only').last().click();

        this.elements
          .issueCardsInColumn(fromColumn)
          .should('not.contain.text', ticketTitle);

        this.elements
          .issueCardsInColumn(toColumn)
          .should('contain.text', ticketTitle);
      });
  }
}
export const boardObj = new BoardObject();
