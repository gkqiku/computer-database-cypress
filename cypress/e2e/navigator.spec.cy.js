/// <reference types="Cypress" />
describe("navigation", () => {
  it("navigates through the web..", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get("tbody > :nth-child(1) > :nth-child(1) > a").click();
    cy.get("a.btn").click();
    cy.get("#searchbox").type("ACER");
    cy.get("#searchsubmit").click();
    cy.get("h1.fill > .fill").click();
    cy.get("tbody > :nth-child(1) > :nth-child(1) > a").click();
    cy.contains("Cancel").click();
    cy.get(".next > a").click();
  });
});
