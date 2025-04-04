class SettingsObjects {
  elements = {
    nameFiled: () => cy.get('[formcontrolname="name"]'),
    urlFiled: () => cy.get('[formcontrolname="url"]'),
    categoryFiled: () => cy.get('[formcontrolname="category"]'),
    descriptionFiled: () => cy.get('[formcontrolname="description"]'),

    projectNameSelector: '.font-medium.text-textDark.text-15',
    projectCategorySelector: '.text-textMedium.text-13',
  };
}
export const settingsObj = new SettingsObjects();
