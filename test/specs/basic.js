const assert = require('assert')
const mainPage = require('../webdriverpages/main.page')
const docsPage = require('../webdriverpages/docs.page')
const apiPage = require('../webdriverpages/api.page')
const communityPage = require('../webdriverpages/community.page')
const versionsPage = require('../webdriverpages/versions.page')
describe('webdriver.io page', () => {

    it('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io')
        browser.maximizeWindow()
        mainPage.docsButton.click()
        browser.pause(1000)
        browser.back()
        browser.pause(1000)
        mainPage.clickDocsButton()
        browser.pause(1000)
    })

    it('should click edit button', () => {
        browser.url('https://webdriver.io')
        browser.maximizeWindow()
        mainPage.clickDocsButton()
        browser.pause(1000)
        docsPage.clickEditButton()
        browser.pause(1000)
    })

    it('should click contribute button', () => {
        browser.url('https://webdriver.io')
        browser.maximizeWindow()
        mainPage.clickApiButton()
        browser.pause(1000)
        apiPage.clickContributeButton()
        browser.pause(1000)
    })

    it('should check some text existance', () => {
        browser.url('https://webdriver.io')
        browser.maximizeWindow()
        mainPage.clickCommunityButton()
        browser.pause(1000)
        console.log('Text is existing : ' + communityPage.textExistance())
    })

    it('should click versions button', () => {
        browser.url('https://webdriver.io')
        browser.maximizeWindow()
        mainPage.clickVersionsButton()
        browser.pause(1000)
        versionsPage.clickdocV5Button()
        browser.pause(1000)
    })
})