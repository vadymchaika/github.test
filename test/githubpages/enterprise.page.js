class EnterprisePage {
    
    get startAFreeTrial() {
        return $('//a[text()="Start a free trial"]')
    }

    clickStartAFreeTrial() {
        this.startAFreeTrial.click()
    }
}

module.exports = new EnterprisePage()