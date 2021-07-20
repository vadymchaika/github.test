class PricingPage {
    
    get joinForFreeButton() {
        return $('[class="d-block btn-mktg btn-outline-mktg"]')
    }

    clickJoinForFreeButton() {
        this.joinForFreeButton.click()
    }
}

module.exports = new PricingPage()