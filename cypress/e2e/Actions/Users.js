import {PageLocators} from "../Elements/pageLocators";
import {usersLocators} from "../Elements/UsersLocators";
import {faker} from "@faker-js/faker";

const email = faker.internet.email();

class Users {
    navigateUsersSection() {
        cy.get(PageLocators.webLocators.adminPanel).click();
        cy.get(PageLocators.webLocators.logOut).contains("Admin panel").click();
        cy.get(usersLocators.title).contains('Users').should('be.visible');
    }

    clickInviteUserBtn() {
        cy.get(usersLocators.inviteUserBtn).click();
    }

    inviteUser(role) {
        cy.get(usersLocators.emailField).type(email);
        cy.get(usersLocators.selectRole).click();
        cy.get(usersLocators.roleType).contains(role).click();
        cy.get(usersLocators.addBtn).click();
        cy.get(usersLocators.inviteBtn).click();
    }

    assertUserVisibility() {
        cy.get(usersLocators.assertEmail).contains(email).should('be.visible');
    }

    searchUser(email) {
        cy.get(usersLocators.searchUserField).clear().type(email);
    }

    changeRole(role) {
        cy.get(usersLocators.role).dblclick({force: true});
        cy.get(usersLocators.role).click();
        cy.get(usersLocators.changeRole).contains(role).click({ force: true });
        cy.get(usersLocators.role).should('contain', role);
    }
}

export default Users