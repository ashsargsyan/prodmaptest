import SignIn from '../Actions/SignIn'
import credentials from "../../fixtures/credentials.json"


describe('SignIn workflow', () => {
    const loginPage = new SignIn()
    beforeEach(() => {
        loginPage.openUrl()
    });

    it("Should Login with valid credentials", () => {
        loginPage.enterEmail(credentials.validUser.email)
        loginPage.enterPassword(credentials.validUser.password)
        loginPage.clickLoginButton()
        loginPage.assertLogo()
        cy.intercept("POST", "**/api/v1/users/signout").as("logoutRequest");
        loginPage.logOut()
        cy.wait("@logoutRequest").then((interception) => {
            expect(interception.response.statusCode).to.eq(204);
        });
    });

    it('Should show an error message with invalid credentials', () => {
        loginPage.enterEmail(credentials.invalidUser.email)
        loginPage.enterPassword(credentials.invalidUser.password)
        loginPage.clickLoginButton()
        loginPage.assertErrorMessageForInvalidUsers()

    });

    it('Should not log in with an invalid email format', () => {
        loginPage.enterEmail(credentials.invalidEmail.email)
        loginPage.enterPassword(credentials.invalidEmail.password)
        loginPage.clickLoginButton()
        loginPage.assertErrorMessageForInvalidCreds()

    });

    it('Should not log in with an incorrect password', () => {
        loginPage.enterEmail(credentials.invalidPassword.email)
        loginPage.enterPassword(credentials.invalidPassword.password)
        loginPage.clickLoginButton()
        loginPage.assertErrorMessageForInvalidUsers()

    });

})
