class JoinPage {
    
    get userNameInput()  {
        return $('[id="user_login"]')
    }
    
    get userEmailInput() {
        return $('[id="user_email"]')
    }

    get passInput() {
        return $('[id="user_password"]')
    }

    currentUrl() {
        return browser.getUrl()
    }

    verifyLabel() {
        return $('//h2[text()="Verify your account"]')
    }

    setUserName (value) {
        this.userNameInput.setValue(value)
    }

    setUserEmail(value) {
        this.userEmailInput.setValue(value)
    }

    setPass(value) {
        this.passInput.setValue(value)
    }
}

module.exports = new JoinPage()