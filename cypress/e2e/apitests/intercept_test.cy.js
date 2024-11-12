/// <reference types="cypress" />

import { articleApi } from "../../../apis/articlepage.api"
import { articlepage } from "../../../pages/articlepage"
import { loginpage } from "../../../pages/LoginPage"


describe("Intercepting call Testing", function () {

    it("Intercept calls", function () {


        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        }, {
            fixture: "tags.json"
        }).as("tagApi")

        cy.visit("/")

        cy.wait("@tagApi")

        cy.get("@tagApi").then(function(xhr){


            expect(xhr.response.body.tags).to.contain("Automation")
            expect(xhr.response.body.tags).to.contain("Selenium")
            expect(xhr.response.body.tags).to.contain("Playwright")
            expect(xhr.response.body.tags).to.contain("cypress")

        })

    })
    
    it("500 Error code Get", function () {


        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        }, {
            statusCode: 500
        }).as("tagApi")

        cy.visit("/")

        cy.wait("@tagApi")

        cy.get("@tagApi").then(function(xhr){


           expect(xhr.response.statusCode).to.equal(500)

        })

        cy.get(".error-message-presenter").should("be.visible").and("contain.text", "Cannot load popular tags...")

    })
    it("Intercept calls Article API", function () {


        cy.intercept({
            method: 'POST',
            url: "**/api/articles"
        }, {
                statusCode: 500
        }) .as("interceptApi")

        cy.visit("/")

        loginpage.loginToApplication("testuser1@test.com", "testpassword")

        articlepage.addArticleAgain("FirstArticle","ArticleTest","Articledetails","cypress");

        

        cy.wait("@interceptApi")

        cy.get("@interceptApi").then(function(xhr){

            expect(xhr.response.statusCode).to.equal(500)
         
        })

    })

    it.only("Modify Request",function(){
        cy.intercept({
            method: 'POST',
            url: "**/api/articles"
        }, function(req){
            req.body.article.tagList =["cypress","selenium","automation"]
            
        }).as("interceptApi")
        cy.visit("/")

        loginpage.loginToApplication("testuser1@test.com", "testpassword")

        articlepage.addArticleAgain("FirstArticle","ArticleTest","Articledetails","cypress");

        

        cy.wait("@interceptApi")

        cy.get("@interceptApi").then(function(xhr){

            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.response.body.article.tagList).to.contain("cypress")
            expect(xhr.response.body.article.tagList).to.contain("selenium")
            expect(xhr.response.body.article.tagList).to.contain("automation")
         
        })




    })





       



})