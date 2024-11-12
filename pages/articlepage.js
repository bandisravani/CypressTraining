export class ArticlePage {

    //Declare all elements

    //Define all methods

    addArticleAgain(articletitle, description, details, tags){

        cy.get("a[href='/editor']").click()

        cy.get('input[placeholder="Article Title"]').type(articletitle)

        cy.get("input[placeholder=\"What's this article about?\"]").type(description)

        cy.get('textarea[placeholder="Write your article (in markdown)"]').type(details)

        cy.get('input[placeholder="Enter tags"]').type(tags)

        cy.contains("button", "Publish Article").click()

        cy.contains("button", "Publish Article").click()
    }

    editArticle(){
        
    }

}

export const articlepage = new ArticlePage()