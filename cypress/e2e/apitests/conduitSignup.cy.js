/// <reference types="cypress" />

import {loginapi} from "../../../apis/loginpage.api.js"
import user_signup from '../../fixtures/user_signup.json'
import{rs} from '../../support/verifyResponseCode.js'

describe("Signup tests",function(){

it("Verify Signup",function (){

    loginapi.signup(user_signup).then(function(response){

        rs.verifyOk(response);
    })
})

})