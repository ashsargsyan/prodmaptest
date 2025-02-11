import SignIn from "../Actions/SignIn"
import credentials from "../../fixtures/credentials.json"
import Users from "../Actions/Users";

describe('Users', () => {
    const loginPage = new SignIn();
    const users = new Users();

    beforeEach(() => {
        loginPage.openUrl();
        loginPage.enterEmail(credentials.validUser.email);
        loginPage.enterPassword(credentials.validUser.password);
        loginPage.clickLoginButton();
        loginPage.assertAdminUserName();
    })

    it('Invite user', () => {
        users.navigateUsersSection();
        users.clickInviteUserBtn();
        users.inviteUser('Admin');
        users.assertUserVisibility();
    });

    it('Search user', () => {
        users.navigateUsersSection();
        users.searchUser(credentials.validUser.email);
        users.assertUserVisibility();
    });

    it('Change user role', () => {
        users.navigateUsersSection();
        users.searchUser(credentials.invalidUser.email);
        users.changeRole('Viewer');
    });

    afterEach(() => {
        loginPage.logOut();
    })
});
