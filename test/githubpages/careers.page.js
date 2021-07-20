class CareersPage {
    
    get openPositionsButton() {
        return $('[href="#positions"]')
    }

    clickOpenPositionsButton() {
        this.openPositionsButton.click()
    }

    listOfPositions() {
        return $$('.pb-md-6 h3').map((names) => names.getText())
    }
}

module.exports = new CareersPage()