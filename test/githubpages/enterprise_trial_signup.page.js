class EnterpriseTrialSignUpPage {
    
    get nameInput() {
        return $('[id="contact_request_name"]')
    }

    get companyInput() {
        return $('[id="contact_request_organization_name"]')
    }

    get emailInput() {
        return $('[id="contact_request_email"]')
    }

    get phoneNumberInput() {
        return $('[id="contact_request_phone"]')
    }

    get notSureRadioButton() {
        return $('[id="contact_request_instance_type_not_sure"]')
    }

    get yesRadioButton() {
        return $('[id="questions_yes"]')
    }

    get textField() {
        return $('[id="questions-list"]')
    }

    get termsCheckbox() {
        return $('[id="contact_request_agreed_to_terms"]')
    }

    clickNotSureRadioButton() {
        this.notSureRadioButton.click()
    }

    clickYesRadioButton() {
        this.yesRadioButton.click()
    }

    clickTermsCheckbox() {
        this.termsCheckbox.scrollIntoView()
        this.termsCheckbox.click()
    }

    setName(value) {
        this.nameInput.setValue(value)
    }

    setCompany(value) {
        this.companyInput.setValue(value)
    }

    setEmail(value) {
        this.emailInput.setValue(value)
    }

    setPhoneNumber(value) {
        this.phoneNumberInput.setValue(value)
    }

    setTextField(value) {
        this.textField.setValue(value)
    }
}

module.exports = new EnterpriseTrialSignUpPage()