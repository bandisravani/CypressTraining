import { restclient } from "../cypress/support/restclient"

export class LoginApi {

    getTags(){

      return  restclient.sendGetRequest("/api/tags")

    }

    verifyTags(response, tags){

        for (let index = 0; index < tags.length; index++) {
            expect(response.body.tags).to.contains(tags[index])
            
        }

        
    }

    signup(userdetails){
        const headers = {
            "Content-Type": "application/json"
           }
    
            return restclient.sendPostRequest("/api/users", userdetails, headers)

    }

    loginToApplication(userdetails){

       const headers = {
        "Content-Type": "application/json"
       }

        return restclient.sendPostRequest("/api/users/login", userdetails, headers)

    }

    verifySuccessLogin(response, useremail){


    

        expect(response.body.user.email).to.contains(useremail)

    }

    getAccessToken(response){

        return response.body.user.token
    }

}

export const loginapi = new LoginApi()