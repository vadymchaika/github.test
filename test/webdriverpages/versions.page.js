class VersionsPage {
    
    get docV5Button()  {
        return $('[href="https://v5.webdriver.io"]')
    }

    clickdocV5Button() {
        this.docV5Button.click()
    }
}

module.exports = new VersionsPage()