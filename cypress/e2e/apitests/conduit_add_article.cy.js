/// <reference types="cypress" />


describe("API Testing", function () {

    var token;

    beforeEach(function(){

        let payload = {
            "user": {
                "email": "testuser@test.com",
                "password": "testpassword"
            }
        }

        const header = {
            "Content-Type": "application/json"
        }

       

        cy.request({
            method: 'POST',

            body: payload,

            header: header,

            url: "/api/users/login"
        }).then(function (response) {

            expect(response.status).to.equal(200)

            expect(response.body.user.username).to.contains("testuser")

            expect(response.body.user.email).to.contains(payload.user.email)

            token = response.body.user.token
            
            cy.log(token)

            
        })

    })

   

    it("POST - Add Article", function () {

       

        const article_payload = {
            "article": {
                "title": "Test Article",
                "description": "Cypress",
                "body": "Cypress",
                "tagList": [
                    "cypress"
                ]
            }
        }

        const article_header = {
            "Content-Type": "application/json",

            "Authorization": "Token " + token
        }

        cy.request({
            method: 'POST',

            url: "/api/articles",
            body: article_payload,

            headers: article_header

        }).then(function(response){
            expect(response.status).to.equal(200)

            expect(response.body.article.title).to.contains(article_payload.article.title)
        })
    })

       
})