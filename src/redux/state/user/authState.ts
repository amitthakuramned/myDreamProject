import BaseState from "../baseState";
import FormState from "../formState";
import User  from "../../models/user";

export interface AuthState extends BaseState {
  isUserAuth: boolean;
  appVersion: string;
  user?: User | any;
  formState: FormState,
  authErrMsg:any
}


