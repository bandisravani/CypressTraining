/// <reference types='cypress' />

describe("Iframe and Drag drop operation", function () {


    it("Drag n Drop", function () {

        cy.visit("https://jqueryui.com/droppable/")

        cy.get(".demo-frame").then(function (iframe) {

            const framebody = iframe.contents().find("body")

            cy.wrap(framebody).find("#draggable").as("source")

            cy.wrap(framebody).find("#droppable").as("target")

        })

        cy.get("@source").trigger("mousedown", { which: 1 })

        cy.get("@target").trigger("mousemove").trigger("mouseleave", { force: true })




    })
})