describe('webdriver.io page', () => {

    it('homework_1', () => {

        browser.url('https://webdriver.io')
        browser.setWindowSize(1920, 1080)
        
        const buttonBlog = $('[href="/docs/api"][class="navbar__item navbar__link"]')
        buttonBlog.click()
        console.log('Browser URL is : ' + browser.getUrl()) 

        const elem = $ ('.docTitle_3a4h')
        console.log('Text is : ' + elem.getText())

        const someText = $('//a[text()="JSONWire protocol"]')
        const attr = someText.getAttribute('href')
        console.log('Link is : ' + attr)

        const searchPanel = $('.DocSearch-Button-Placeholder')
        searchPanel.click()
        const panelClicked = $('.DocSearch-Input')
        panelClicked.setValue('test is ')
        panelClicked.addValue('DONE')
        browser.pause(5000)
    })
    
    it('homework_2', () => {

        browser.url('https://webdriver.io/docs/api.html')

        const someText = $('//a[text()="JSONWire protocol"]')
        const attr = someText.getAttribute('href')
        console.log('Link is : ' + attr)
        browser.newWindow(attr)
        browser.switchWindow(attr)
        
        const elem = $ ('strong a[href="/SeleniumHQ/selenium/wiki"]')
        isDisplayed = elem.isDisplayed();
        console.log('IS DISPLAYED?: ' + isDisplayed)

        browser.pause(2000)

        browser.switchWindow('Introduction | WebdriverIO')
        browser.pause(2000)
        
        const header = $ ('.docTitle_3a4h')
        browser.waitUntil(() => {
            return header.getText() === 'Introduction'
            }, 2000, 'Title has wrong name')

        header.saveScreenshot('headerscreenshot.png')

        const twitter = $('[href="https://twitter.com/webdriverio"]')
        console.log('Twitter is displayed :' + twitter.isDisplayed())
        console.log('Twitter is displayed in view port :' + twitter.isDisplayedInViewport())

        twitter.scrollIntoView()
        browser.pause(2000)

        console.log('Twitter is displayed :' + twitter.isDisplayed())
        console.log('Twitter is displayed in view port :' + twitter.isDisplayedInViewport())

        const blogElem = $('[href="/blog"]')
        console.log('search isFocused before click :'+ blogElem.isFocused())
        browser.pause(2000)

        blogElem.click()
        console.log('search isFocused after click :'+ blogElem.isFocused())
        browser.pause(2000)

        })

        
    })

    describe ('GitHub testing. Homework 3', () => {

        it('go to register page via "Pricing" button', () => {

            browser.url('https://github.com/')
            browser.setWindowSize(1920, 1080)
            browser.pause(2000)

            const pricing = $('[href="/pricing"][class="Link--secondary"]')
            pricing.scrollIntoView()
            browser.pause(2000)
            pricing.click()
            browser.pause(2000)
            const joinForFree = $('[class="d-block btn-mktg btn-outline-mktg"]')
            joinForFree.scrollIntoView()
            browser.pause(2000)
            joinForFree.click()
            browser.waitUntil(() => {
                return browser.getUrl()==='https://github.com/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=cards&ref_page=%2Fpricing&source=pricing-card-free'
                }, 5000, 'Out of time')

            console.log(browser.getUrl()==='https://github.com/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=cards&ref_page=%2Fpricing&source=pricing-card-free')
        })

        it('test search function on "github community"', () => {

            browser.url('https://github.com/')
            browser.setWindowSize(1920, 1080)

            const explore = $('//*[contains(text(),\'Explore\') and not(@href)]')
            explore.moveTo()
            browser.pause(2000)
            const communityButton = $('[href="https://github.community"][class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover"]')
            communityButton.click()
            browser.pause(2000)
            const search = $('[id="search-term"]')
            search.clearValue()
            search.setValue('test')
            browser.pause(2000)
            const magnifier = $('[class="widget-button btn btn btn-primary search-button no-text btn-icon"]')
            magnifier.click()
            browser.waitUntil(() => {
                return browser.getUrl()==='https://github.community/search?q=test'
                }, 5000, 'Out of time')
            console.log(browser.getUrl()==='https://github.community/search?q=test')
        })

        it('test sort filters on github', () => {

            browser.url('https://github.com/')
            browser.setWindowSize(1920, 1080)
            browser.pause(2000)
            const search = $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]')
            search.clearValue()
            search.setValue('webdriver')
            browser.pause(2000)
            const magnifier = $('[id="jump-to-suggestion-search-global"]')
            magnifier.click()
            browser.pause(2000)
            const sort = $('[class="btn btn-sm select-menu-button"]')
            sort.click()
            browser.pause(2000)
            const filterOne = $('//span[text()="Most stars"]')
            filterOne.click()
            browser.pause(2000)
            browser.waitUntil(() => {
                return browser.getUrl()==='https://github.com/search?o=desc&q=webdriver&s=stars&type=Repositories'
                }, 5000, 'Out of time')
            console.log(browser.getUrl()==='https://github.com/search?o=desc&q=webdriver&s=stars&type=Repositories')
            browser.pause(2000)
            sort.click()
            browser.pause(2000)
            const filterTwo = $('//span[text()="Fewest stars"]')
            filterTwo.click()
            browser.pause(2000)
            browser.waitUntil(() => {
                return browser.getUrl()==='https://github.com/search?o=asc&q=webdriver&s=stars&type=Repositories'
                }, 5000, 'Out of time')
            browser.pause(2000)
            console.log(browser.getUrl()==='https://github.com/search?o=asc&q=webdriver&s=stars&type=Repositories')
        })

        it('click on every github social buttons', () => {

            browser.url('https://github.com/')
            browser.setWindowSize(1920, 1080)

            const twitter = $('[src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"]')
            twitter.scrollIntoView()
            browser.pause(1000)
            twitter.click()
            browser.waitUntil(() => {
                return browser.getUrl()==='https://twitter.com/github'
                }, 5000, 'Out of time')
            browser.pause(1000)
            console.log(browser.getUrl()==='https://twitter.com/github')
            browser.back()
            browser.pause(1000)

            const facebook = $('[src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"]')
            browser.pause(1000)
            facebook.click()
            browser.waitUntil(() => {
                return browser.getUrl()==='https://www.facebook.com/GitHub'
                }, 5000, 'Out of time')
            browser.pause(1000)
            console.log(browser.getUrl()==='https://www.facebook.com/GitHub')
            browser.back()
            browser.pause(1000)

            const youtube = $('[src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg"')
            browser.pause(1000)
            youtube.click()
            browser.waitUntil(() => {
                return browser.getUrl()==='https://www.youtube.com/github'
                }, 5000, 'Out of time')
            browser.pause(1000)
            console.log(browser.getUrl()==='https://www.youtube.com/github')
            browser.back()
            browser.pause(1000)

            const linkedin = $('[src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"]')
            browser.pause(1000)
            linkedin.click()
            browser.waitUntil(() => {
                return browser.getUrl()==='https://www.linkedin.com/company/github'
                }, 5000, 'Out of time')
            browser.pause(1000)
            console.log(browser.getUrl()==='https://www.linkedin.com/company/github')
            browser.back()
            browser.pause(1000)

            const github = $('[src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"]')
            browser.pause(1000)
            github.click()
            browser.waitUntil(() => {
                return browser.getUrl()==='https://github.com/github'
                }, 5000, 'Out of time')
            browser.pause(1000)
            console.log(browser.getUrl()==='https://github.com/github')
            browser.back()
            browser.pause(2000)
        })

        it('sign in with not valid log and pass', () => {
            
            browser.url('https://github.com/')
            browser.setWindowSize(1920, 1080)

            browser.pause(1000)
            const signInButton = $('[href="/login"]')
            signInButton.click()
            browser.pause(1000)

            const loginField = $('[id="login_field"]')
            loginField.clearValue()
            loginField.setValue('login')
            browser.pause(1000)
        
            const passField = $('[id="password"]')
            passField.clearValue()
            passField.setValue('password')
            browser.pause(1000)

            const signInConfirm = $('[class="btn btn-primary btn-block"]')
            signInConfirm.click()
            browser.pause(2000)

            const mistake = $('[class="container-lg px-2"]')
            isExisting = mistake.isExisting()
            console.log('Mistake is poped up :' + isExisting)
        })
  
    })