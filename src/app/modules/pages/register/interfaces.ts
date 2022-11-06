export interface RegisterRequest {
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
  }
  
  /*
  Interface for the Register Response (can look different, based on your backend api)
  */
  export interface RegisterResponse {
    status: number;
    message: string;
  }