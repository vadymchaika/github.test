class MainPage {
    
    get docsButton()  {
        return $('[class="navbar__item navbar__link"][href="/docs/gettingstarted"]')
    }

    get apiButton() {
        return $('[class="navbar__item navbar__link"][href="/docs/api"]')
    }

    get communityButton() {
        return $('[class="navbar__item navbar__link"][href="/community/support"]')
    }

    get versionsButton() {
        return $('[href="/versions"][class="navbar__item navbar__link"]')
    }

    clickDocsButton() {
        this.docsButton.click()
    }

    clickApiButton() {
        this.apiButton.click()
    }

    clickCommunityButton() {
        this.communityButton.click()
    }

    clickVersionsButton() {
        this.versionsButton.click()
    }
}

module.exports = new MainPage()