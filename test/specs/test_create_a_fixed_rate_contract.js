const Dashboard = require('../pageobjects/dashboard')
const LoginPage = require('../pageobjects/login.page');
const Form = require('../pageobjects/fill_form')

describe('Create Contract', () => {
    it('using fixed rate option', async () => {
        await LoginPage.open();
        await LoginPage.login('bsee13020@itu.edu.pk', 'Hussnain.pakistan@880');
        console.log("user is able to sign in to deel Training Dashboard")
        await Dashboard.startFixedContract();
        console.log("selected contract is fixed one")
        await Form.fillGeneralInfo(
            "project automation",
            "United States",
            "graduate software engineer",
            "Not applicable",
            "testing"
        )
        console.log("user is successfully able to add general info to the form" +
            "project name" +
            "residence" +
            "state" +
            "title" +
            "scope" +
            "level")

        await Form.tapNextButton()
        console.log("payment page is loaded successfully")
        await Form.fillPaymentDetails("GBP", "1000")
        console.log("GBP is selected as currency and 1000 as value")
        await Form.tapNextButton()
        console.log("define dates page is loaded successfully")
        await Form.tapNextButton()
        console.log("benifit and extras page is loaded successfully")
        await Form.addSpecialClause()
        console.log("user is able to add special clause value")
        await Form.tapNextButton()
        console.log("create contract page is loaded successfully")
        await Form.tapCreateContract()
        console.log("contract is created successfully")
    });
});


