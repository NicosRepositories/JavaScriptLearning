describe("Background Image", () => {
  it("changes the background on click", () => {
    cy.visit("./api-call/index.html");

    cy.get(".imgBtn").click();

    // get body element, look for style attribute and check if it has unsplash url
    cy.get("body")
      .should("attr", "style")
      .should("include", "https://images.unsplash.com/");
  });
});
