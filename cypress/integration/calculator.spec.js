describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("do the numbers update the running total", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number6").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "7")
  })

  it("do arithemetical operations update the display with result", () => {
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4")
  })

  it("can multiple operations be chained together", () => {
    cy.get("#number3").click();
    cy.get("#operator_add").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "20")
  })

  it("is the output as expected for a range of different numbers", () => {
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number5").click();
    cy.get("#operator_add").click();
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#number0").click();
    cy.get("#number3").click();
    cy.get("#number7").click();
    cy.get("#number8").click();
    cy.get("#number5").click();
    cy.get("#number7").click();
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "60189285")
  })

  it("can numbers be divded by zero", () => {
    cy.get("#number2").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "undefined")
  })

})
