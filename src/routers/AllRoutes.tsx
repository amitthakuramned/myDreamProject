import {LoginScreen} from "../screens/LoginScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {SettingsScreen} from "../screens/SettingsScreen";
import {SignUpScreen} from "../screens/SignUpScreen";

export enum AppRoutes {
    LOGIN = "Home",
    HOME = "Login",
    SETTINGS = "Settings",
    SIGNUP = "SignUp"
  }
  export const PublicRoutes = [
      {
        path: AppRoutes.LOGIN,
        component: LoginScreen,
        name:"Login"
      },
      {
        path: AppRoutes.SIGNUP,
        component: SignUpScreen,
        name:"SignUp"
      }
    ];
    
  export const PrivateRoutes = [
    {
      path: AppRoutes.HOME,
      component: HomeScreen,
      name:"Home"
    },
    {
      path: AppRoutes.SETTINGS,
      component: SettingsScreen,
      name:"Settings"
    },
    ];
    