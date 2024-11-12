/// <reference types="cypress" />

import { loginapi } from '../../../apis/loginpage.api'
import user_payload from '../../fixtures/user_payload.json'

import article_payload from "../../fixtures/article_payload.json"
import { restclient } from '../../support/restclient'
import { rs } from '../../support/verifyResponseCode'
import { articleApi } from '../../../apis/articlepage.api'


describe("API Testing", function () {

    it("GET Tags API", function () {

        loginapi.getTags().then(function (response) {

            rs.verifyOk(response)

            loginapi.verifyTags(response, [" Automation", "cypress", "Selenium"])

        })



    })

    it("POST - Login to application", function () {


        loginapi.loginToApplication(user_payload).then(function (response) {

            rs.verifyOk(response)

            loginapi.verifySuccessLogin(response, user_payload.user.email)

        })
    })

    it("POST - Add Article", function () {

        loginapi.loginToApplication(user_payload).then(function (response) {

            rs.verifyOk(response)

            loginapi.verifySuccessLogin(response, user_payload.user.email)

            const token = loginapi.getAccessToken(response)

            articleApi.addArticle(token, article_payload).then(function (response) {

                rs.verifyOk(response)

                articleApi.verifyAddArticleSuccess(response, article_payload.article.title)

                const slug = articleApi.getSlug(response)

                articleApi.deleteArticle(token, slug)
            })

            



        })

    })

})