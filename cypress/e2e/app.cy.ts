describe("App", () => {
  it("Load correctly and show the title", () => {
    cy.visit("/");
    cy.contains("Vite + React").should("be.visible");
  });
});
