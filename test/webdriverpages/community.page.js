class CommunityPage {
    
    get editButton()  {
        return $('[href="https://github.com/webdriverio/webdriverio/edit/main/website/docs/GettingStarted.md"]')
    }

    get someText() {
        return $('//h1[text()=\'Need Help?\']')
    }

    textExistance() {
        return this.someText.isExisting()
    }

    clickEditButton() {
        this.editButton.click()
    }

}

module.exports = new CommunityPage()