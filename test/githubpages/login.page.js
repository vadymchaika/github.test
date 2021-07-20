class LoginPage {
    
    get userNameEmailInput()  {
        return $('[id="login_field"]')
    }

    get passInput() {
        return $('[id="password"]')
    }

    get signInButton() {
        return $('[class="btn btn-primary btn-block"]')
    }

    get forgotPassButton() {
        return $('[href="/password_reset"]')
    }

    setUserNameEmail (value) {
        this.userNameEmailInput.setValue(value)
    }

    setPass(value) {
        this.passInput.setValue(value)
    }

    clickSignInButton() {
        this.signInButton.click()
    }

    clickForgotPassButton() {
        this.forgotPassButton.click()
    }
}

module.exports = new LoginPage()