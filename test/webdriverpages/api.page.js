class APIPage {
    
    get contributeButton()  {
        return $('[href="#contribute"][class="table-of-contents__link"]')
    }

    clickContributeButton() {
        this.contributeButton.click()
    }
}

module.exports = new APIPage()