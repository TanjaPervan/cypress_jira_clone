Cypress.Commands.add('getTextWithoutSpaces', (selector, text) => {
  const regex = new RegExp(`^\\s*${text}\\s*$`);
  return cy.contains(selector, regex);
});

Cypress.Commands.add(
  'verifyIncludesText',
  (selector, expectedText, useFirst = false) => {
    const element = useFirst ? cy.get(selector).first() : cy.get(selector);
    element.invoke('text').should((text) => {
      expect(text.trim()).to.include(expectedText);
    });
  }
);


Cypress.Commands.add('openFirstTicketGetTitile', (columnId) => {
  return cy
    .get(`#${columnId} issue-card`)
    .first()
    .as('selectedTicket')
    .invoke('text')
    .then((text) => {
      const ticketTitle = text.trim();
      cy.log(`Ticket title: ${ticketTitle}`);
      cy.get('@selectedTicket').click();

      return ticketTitle;
    });
});



