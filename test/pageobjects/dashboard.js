

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */

    get createContractIcon() {
        return $('[href="/create"] .sidebar-link');
    }


    get fixedRateBox() {
        return $('.heap-start-fixed-contract div.box');
    }

    async waitAndGetElement(element, timeout=5000){
        if (await element.waitForDisplayed({ timeout:timeout })){
            return element
        }
    }

    async startFixedContract(){
        await this.waitAndGetElement(this.createContractIcon, 50000)
        await this.createContractIcon.click()
        await this.fixedRateBox.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('https://app.deel.training/');
    }
}

module.exports = new DashboardPage();
