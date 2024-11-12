export class RestClient {

    sendGetRequest(url) {

      return  cy.request({
            method: 'GET',

            url: url
        })

    }

    sendPostRequest(url, payload, headers) {

        return cy.request({
            method: 'POST',
            url: url,
            headers: headers,
            body: payload
        })

    }

    sendPutRequest(url, payload, headers) {

        return cy.request({
            method: 'PUT',
            url: url,
            headers: headers,
            body: payload
        })

    }

    sendPatchRequest(url, payload, headers) {

        return cy.request({
            method: 'PATCH',
            url: url,
            headers: headers,
            body: payload
        })

    }

    sendDeleteRequest(url) {

        return cy.request({
            method: 'DELETE',
            url: url
        })

    }


}

export const restclient = new RestClient()