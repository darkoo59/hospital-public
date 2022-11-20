export interface RegisterRequest {
    email: string;
    name: string;
    surname: string;
    password: string;
    IsActivatedAcount: boolean;
  }
  
  /*
  Interface for the Register Response (can look different, based on your backend api)
  */
  export interface RegisterResponse {
    status: number;
    message: string;
  }

  export interface AllergensResponse{
    name: string;
  }

  export interface BloodType{
    value: string;
    viewValue: string;
  }