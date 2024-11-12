import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {loginpage} from "../../../pages/LoginPage"
import {feedpage} from "../../../pages/feedpage"


Given("Sravani is a writer and has access to the Application",function(){

    cy.visit("/")
})

When("Sravani login with correct credentials",function(){

    const useremail="testuser@test.com"
    const password="testpassword"
    loginpage.loginToApplication(useremail,password)
})

Then("Sravani get access to the application",function(){

    const username= "testuser"

    feedpage.verifyLoginSuccess(username)
})

Then("Sravani get access to the application 2",function(){

   
    feedpage.verifyLoginSuccess(username)
})

When("Sravani uses his credentials as {string} and {string}",function(useremail,password){
   
    loginpage.loginToApplication(useremail,password)

})
When("Sravani uses his credentials as list",function(datatable){

    const data= datatable.raw();
    const useremail=data[0][0];
    const password=data[1][0];
    
    loginpage.loginToApplication(useremail,password)

})

let username;

When ("Sravani uses his credentials as map",function(datatable){
   
    let useremail;
    let password;
   

    datatable.hashes().map(function(value){

        console.log(value);
        useremail=value.useremail;
        password=value.userpassword;
        username = value.username;

})
loginpage.loginToApplication(useremail,password)

    })


    

