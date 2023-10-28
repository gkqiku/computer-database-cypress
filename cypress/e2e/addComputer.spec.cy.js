/// <reference types="Cypress" />
describe("template spec", () => {
  function getrandomcomputer() {
    const names = [
      "Asus",
      "Acer",
      "Mac",
      "Lenovo",
      "Hp",
      "Alienware",
      "BenQ",
      "Dell",
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
  it("passes", () => {
    const randomComputer = getrandomcomputer();
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.get("#add").click();
    cy.get("#name")
      .type(randomComputer)
      .invoke("text")
      .then((text) => {
        const selectComputer = text;
        //   });

        cy.get("#introduced").type("2022-12-24");
        cy.get("#discontinued").type("2024-12-24");
        cy.get("#company").select(selectComputer);
        cy.get(".primary").click();
        cy.get(".alert-message").should("contain", "has been created");
      });
  });
});
