class MainPage {
    
    get emailInput()  {
        return $('[class="form-control border-0 f4-mktg py-3 px-4 width-full"]')
    }
    
    get signUpForGithubButton() {
        return $('[class="btn-mktg btn-primary-mktg width-full width-sm-auto"]')
    }

    get signInButton() {
        return $('[href="/login"]')
    }

    get whyGithubButton() {
        return $('//*[contains(text(),\'Why GitHub?\') and not(@href)]')
    }

    get exploreButton() {
        return $('//*[contains(text(),\'Explore\') and not(@href)]')
    }

    get pricingButton() {
        return $('//*[contains(text(),\'Pricing\') and not(@href)]')
    }

    get plansButton() {
        return $('[class="pb-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover"]')
    }

    get exploreGithubButton() {
        return $('[class="py-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover"][href="/explore"]')
    }

    get searchInput() {
        return $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]')
    }

    get magnifier() {
        return $('[id="jump-to-suggestion-search-global"]')
    }

    get enterpriseButton() {
        return $('[href="/enterprise"][class="Link--secondary"]')
    }

    get careersButton() {
        return $('[href="/about/careers"]')
    }

    get automateButton() {
        return $('[href="#home-automate"]')
    }

    automateTitle() {
        return $('//*[contains(text(),"Automate anything with")]')
    }

    setEmail (value) {
        this.emailInput.setValue(value)
    }

    clickSignUpForGithubButton() {
        this.signUpForGithubButton.click()
    }

    clickSignInButton() {
        this.signInButton.click()
    }

    clickPlansButton() {
        this.plansButton.click()
    }

    clickExploreGithubButton() {
        this.exploreGithubButton.click()
    }

    clickMagnifier() {
        this.magnifier.click()
    }

    clickEnterpriseButton() {
        this.enterpriseButton.click()
    }

    clickCareersButton() {
        this.careersButton.click()
    }

    clickAutomateButton() {
        this.automateButton.click()
    }

    moveToWhyGithubButton() {
        this.whyGithubButton.moveTo()
    }

    moveToExploreButton() {
        this.exploreButton.moveTo()
    }

    moveToPricingButton() {
        this.pricingButton.moveTo()
    }

    setSearchInput(value) {
        this.searchInput.setValue(value)
    }
}

module.exports = new MainPage()