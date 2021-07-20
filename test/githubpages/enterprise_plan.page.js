class EnterprisePlanPage {
    
    get enterpriseCloudLabel() {
        return $('//div[contains(text(),\'Enterprise Cloud\')][contains(@class,\'h1\')]/../..')
    }

    get enterpriseServerLabel() {
        return $('//div[contains(text(),\'Enterprise Server\')][contains(@class,\'h1\')]/../..')
    }

    clickEnterpriseCloudLabel() {
        this.enterpriseCloudLabel.click()
    }

    clickEnterpriseServerLabel() {
        this.enterpriseServerLabel.click()
    }
}

module.exports = new EnterprisePlanPage()