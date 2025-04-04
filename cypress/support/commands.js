Cypress.Commands.add('getByExactText', (selector, text) => {
  const regex = new RegExp(`^\\s*${text}\\s*$`);
  return cy.contains(selector, regex);
});
