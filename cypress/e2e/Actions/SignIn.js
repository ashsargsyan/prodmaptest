import {PageLocators} from "../Elements/pageLocators";

class SignIn {
    openUrl() {
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should("include", "/login");

    }

    enterEmail(email) {
        cy.get(PageLocators.webLocators.email).type(email)
    }

    enterPassword(password) {
        cy.get(PageLocators.webLocators.password).type(password)
    }

    clickLoginButton() {
        cy.get(PageLocators.webLocators.loginButton).click();

    }

    assertAdminUserName() {
        cy.get(PageLocators.webLocators.adminPanel).should("be.visible")
    }

    assertErrorMessageForInvalidUsers() {
        cy.get(PageLocators.webLocators.errorMessageInvalidUsers).should("be.visible");
    }

    assertErrorMessageForInvalidCreds() {
        cy.get(PageLocators.webLocators.errorMessageInvalidCredentials).should("be.visible")

    }

    logOut() {
        cy.get(PageLocators.webLocators.adminPanel).click();
        cy.get(PageLocators.webLocators.logOut).contains("Log out").click();
    }

}

export default SignIn;