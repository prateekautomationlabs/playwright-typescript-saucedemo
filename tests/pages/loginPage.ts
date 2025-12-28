import {BasePage} from './basePage';

export class LoginPage extends BasePage{

   private readonly usernameFiled =() => this.page.getByPlaceholder('Username');
   private readonly passwordField =()=> this.page.getByPlaceholder('Password');
   private readonly loginButton   =()=> this.page.getByRole('button',{name:'Login'});

   async navigateToLoginPage(url:string){
    await this.goto(url);
   }

   async login (usernmae:string, password:string){
    await this.usernameFiled().fill(usernmae);
    await this.passwordField().fill(password);
    await this.loginButton().click();
   }

}