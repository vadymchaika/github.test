class LoginnedPage {
    
    get avatarImageButton() {
        return $('[class="avatar-user avatar avatar-small"]')
    }

    get signOutButton() {
        return $('[class="dropdown-item dropdown-signout"]')
    }

    nickName() {
        return $('//strong[text()="testName6622"]')
    }

    clickAvatarImageButton() {
        this.avatarImageButton.click()
    }

    clickSignOutButton() {
        this.signOutButton.click()
    }
}

module.exports = new LoginnedPage()