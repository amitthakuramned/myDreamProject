import BaseModel from "./baseModel";

interface User extends BaseModel {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  country: string;
  contact: string;
  role: string;
  address: string;
  streetAddress1: string;
  streetAddress2: string;
  pinCode: string;
  profession: string;
  service: string;
  organisation: string;
  bussiness: string;
  message: string;
}

export default User;