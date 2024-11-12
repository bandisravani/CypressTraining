export class LoginPage {

    // Declare all web elements

    emailField = 'input[placeholder="Email"]'

    passwordField = 'input[placeholder="Password"]'

    signInButtonText = 'Sign in'

    //Define all methods

    loginToApplication(useremail, userpassword){

        cy.contains("a", this.signInButtonText).click()

        cy.get(this.emailField).type(useremail)

        cy.get(this.passwordField).type(userpassword)

        cy.contains("button", this.signInButtonText).click()

    }

  
}

export const loginpage = new LoginPage()