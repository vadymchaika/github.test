const {Given, When, Then} = require ('@cucumber/cucumber')

Given('I am on webdriverio page', () => {
    browser.url('https://webdriver.io/')
    browser.pause(1000)
})

When('I click on search', () => {
    const search = $('[class="DocSearch-Button-Placeholder"]')
    search.click()
    browser.pause(1000)
})

Then('I type text to search', () => {
    const searchInput = $('[class="DocSearch-Input"]')
    searchInput.setValue('some text')
    browser.pause(1000)
})