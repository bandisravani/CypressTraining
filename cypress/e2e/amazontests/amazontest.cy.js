/// <reference types="cypress" />

describe("Amazon Test Suite", function(){

    it("Search Product", function(){


        cy.visit("https://amazon.in")

        const product = "Apple watch"

        const category = "Electronics"

       

        //1. Search a product 

        cy.get("#searchDropdownBox").scrollIntoView().select(category, {force: true})

        cy.get("#twotabsearchtextbox").type(product)

        cy.get("#nav-search-submit-button").click()

        cy.get("div[data-component-type='s-search-result']").as("allproducts")

        cy.get("@allproducts").should("have.length.above", 23)

        cy.get("@allproducts").first().should("contain.text", "Apple")

        cy.get("@allproducts").first().invoke("text").then(function(productDetails){

            cy.log(productDetails)
        })

        cy.get("@allproducts").eq(5).invoke("text").then(function(productDetails){

            cy.log(productDetails)
        })

        cy.get("@allproducts").last().invoke("text").then(function(productDetails){

            cy.log(productDetails)
        })

        cy.get("@allproducts").each((value, index, list) => {

            cy.wrap(value).scrollIntoView()

            cy.log("Index - " + index + " element is " + value.text())

            expect(value.text()).to.contain("Apple")

        })

    })
})