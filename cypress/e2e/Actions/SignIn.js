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

    assertLogo() {
        cy.get("img[alt='Prodmap.ai']").should("be.visible", {timeout: 2000});
    }

    assertErrorMessageForInvalidUsers() {
        cy.get(PageLocators.webLocators.errorMessageInvalidUsers).should("be.visible");
    }

    assertErrorMessageForInvalidCreds() {
        cy.get(PageLocators.webLocators.errorMessageInvalidCredentials).should("be.visible")

    }

    logOut() {
        cy.get(PageLocators.webLocators.adminPanel).click();
        cy.get("li.MuiMenuItem-root").contains("Log out").click();
    }

}

export default SignIn;