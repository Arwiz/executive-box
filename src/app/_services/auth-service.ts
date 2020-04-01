 class AuthService{
     private static instance: AuthService;
     public static getInstance(): AuthService {
         if (!AuthService.instance) {
             AuthService.instance = new AuthService(true);
         }
         return AuthService.instance;
     }

     private isAuthenticated = false;
     private constructor( loginStatus: boolean ) {
         this.isAuthenticated = loginStatus;
     }
     public getLoggedIn() {
        return this.isAuthenticated;
     }
     public setLoggedIn( status :boolean) {
         this.isAuthenticated = status;
     }

     public callAuth() {

     }
}

export default AuthService.getInstance();
