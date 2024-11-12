/// <reference types="cypress" />

describe("Multiple Tab Handling", function(){


    it("Multiple Tab", function(){

        cy.visit("https://playwright.dev/")

        cy.get("img[alt='VS Code']").parent("a").as("link")

        cy.get("@link").should("have.attr", "href").and("equal", "https://code.visualstudio.com")

        cy.get("@link").should("have.attr", "target").and("equal", "_blank")

        cy.get("@link").invoke("removeAttr", "target").click()

    })
})