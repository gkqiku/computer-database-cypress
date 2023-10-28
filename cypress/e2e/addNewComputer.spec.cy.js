/// <reference types="Cypress" />
describe("template spec", () => {
  it("passes", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get("#add").click();
    cy.get("#name").type("Asus");
    cy.get("#introduced").type("2022-12-24");
    cy.get("#discontinued").type("2024-12-24");
    cy.get("#company").select("ASUS");
    cy.get(".primary").click();
    cy.get(".alert-message").should(
      "contain",
      "Computer Asus has been created"
    );
  });
});
