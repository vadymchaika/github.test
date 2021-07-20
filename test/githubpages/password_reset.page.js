class PasswordResetPage {
    
    get userEmailInput() {
        return $('[id="email_field"]')
    }

    setUserEmail(value) {
        this.userEmailInput.setValue(value)
    }
}

module.exports = new PasswordResetPage()