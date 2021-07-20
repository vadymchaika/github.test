class SearchWebdriverioPage {
    
    get firstResult() {
        return $('[href="/webdriverio/webdriverio"]')
    }

    currentUrl() {
        return browser.getUrl()
    }

    clickFirstResult() {
        this.firstResult.click()
    }
}

module.exports = new SearchWebdriverioPage()