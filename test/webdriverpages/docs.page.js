class DocsPage {
    
    get editButton()  {
        return $('[href="https://github.com/webdriverio/webdriverio/edit/main/website/docs/GettingStarted.md"]')
    }

    clickEditButton() {
        this.editButton.click()
    }
}

module.exports = new DocsPage()