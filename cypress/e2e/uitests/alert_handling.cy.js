/// <reference types="cypress" />

describe("Alert Handling", function(){


    it("Alert Tab", function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.contains("button", "Click for JS Alert").click()

        cy.on("window:alert", function(message){

            expect(message).to.equal("I am a JS Alert")

        })

        cy.get("#result").should("have.text", "You successfully clicked an alert")

    })

    it("Alert Tab Cancel", function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.contains("button", "Click for JS Confirm").click()

        cy.on("window:confirm", function(message){

            expect(message).to.equal("I am a JS Confirm")

            return false

        })

        cy.get("#result").should("have.text", "You clicked: Cancel")

    })

    it("Alert Tab OK", function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.contains("button", "Click for JS Confirm").click()

        cy.on("window:confirm", function(message){

            expect(message).to.equal("I am a JS Confirm")

        })

        cy.get("#result").should("have.text", "You clicked: Ok")

    })
})