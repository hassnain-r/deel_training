

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FillForm extends Page {

    /**
     * define selectors using getter methods
     */

    get contractName() {
        return $('[name="name"]');
    }

    get contractorResidence() {
        return $('[data-qa="contractor-tax-residence"]');
    }

    get contractorState() {
        return $('[data-qa="contractor-tax-residence-province"]');
    }

    get jobTitle() {
        return $('[name="jobTitle"]');
    }

    get seniorityLevelField(){
        return $('[data-qa="selector-seniority-level"]')
    }

    get scopeOfWork(){
        return $('.job-scope-block [name="scope"]')
    }

    get dateDropdownIcon(){
        return $('.deel-ui__calendar-input-container__input_dropdown-icon')
    }

    get selectDesiredDate(){
        let date = "//button[contains(@class, 'react-calendar__tile--now')]/preceding-sibling::button[1]"
        return $(date)
    }

    get nextButton(){
        return $('[data-qa="next"]')
    }

    get currencyField(){
        return $ ('[data-qa="currency-select"]')
    }

    get paymentRate(){
        return $ ('.money-input-new-input-container input')
    }

    get paymentFrequency(){
        return $('[data-qa="cycle-select"]')
    }

    get specialClause(){
        return $('[data-qa="add-a-special-clause"]')
    }

    get specialClauseTextArea(){
        return $('.textarea-container .textarea')
    }

    get createContract(){
        return $('[data-qa="create-contract"]')
    }

    dropDownValue(string){
        return `//*[contains(text(),"${string}")]`

    }

    /**
     * fill payment issue fields as asked
     * @param currency select GBP as value
     * @param rate pass 1000 as value
     * select payment frequency as weekly
     */

    async fillPaymentDetails(currency, rate){
        await this.currencyField.click()
        await $(this.dropDownValue(currency)).click()
        await this.paymentRate.setValue(rate)
        await this.paymentFrequency.click()
        await $(this.dropDownValue("Weekly")).click()
    }

    /**
     * fill general info fields as asked
     * @param name pass contract name
     * @param residence pass residence
     * @param title pass job title
     * @param level pass level
     * @param scope pass scope of work
     select a date 1 less than today
     */

    async fillGeneralInfo(name, residence, title, level, scope){
        await this.contractName.setValue(name)
        await this.contractorResidence.click()
        await $(this.dropDownValue(residence)).click()
        await this.jobTitle.setValue(title)
        await this.contractorState.click()
        await $(this.dropDownValue("Georgia")).click()
        await this.seniorityLevelField.click()
        await $(this.dropDownValue(level)).click()
        await this.scopeOfWork.setValue(scope)
        await this.dateDropdownIcon.click()
        await this.selectDesiredDate.click()
    }

    async tapNextButton(){
        await this.nextButton.click()
    }

    /**
     * tap on special clause button and then text area must appear
     * fill the details in that text area
     */

    async addSpecialClause(){
        await this.specialClause.click()
        await this.specialClauseTextArea.setValue("test")
    }

    async tapCreateContract(){
        await this.createContract.click()
    }

}

module.exports = new FillForm();
