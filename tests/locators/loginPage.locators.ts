import {Base} from "../pages/base";

export class loginPageLocators extends Base {
    public readonly loginInputName = this.derivedByDataQa("login-name")
    public readonly loginInputEmail = this.derivedByDataQa("login-email")
    public readonly loginButton = this.derivedByDataQa("login-button")

    public readonly signUpInputName = this.derivedByDataQa("signup-name")
    public readonly signUpInputEmail = this.derivedByDataQa("signup-email")
    public readonly signUpButton = this.derivedByDataQa("signup-button")
}