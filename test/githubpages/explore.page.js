class ExplorePage {
    
    get topicsButton() {
        return $('[href="/topics"][class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link"]')
    }

    clickTopisButton() {
        this.topicsButton.click()
    }
}

module.exports = new ExplorePage()