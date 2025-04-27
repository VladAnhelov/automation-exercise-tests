import { Base } from "../pages/base";

export class homePageLocators extends Base {
    public readonly header = this.derivedByClass("header-middle")
    public readonly dialogContent = this.derivedByClass("fc-dialog.fc-choice-dialog");
    public readonly dialogContentButton = ".fc-footer-buttons .fc-button.fc-cta-consent.fc-primary-button";
    public readonly signUp = this.derivedBySelector('ul.nav.navbar-nav li a[href="/login"]');
}