export class FeedPage {

    addArticleText = "New Article"

    userprofilelink = "a[href*='/profile']"


    verifyLoginSuccess(username){

        cy.contains("a", this.addArticleText).should("be.visible")

        cy.get(this.userprofilelink).should("have.text", username)


    }

}

export const feedpage = new FeedPage()