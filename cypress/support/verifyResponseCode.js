export class ResponseCode {

    verifyOk(response) {


        expect(response.status).to.equal(200)
    }

    unauthorisedRequest(response) {


        expect(response.status).to.equal(401)
    }



}

export const rs = new ResponseCode()