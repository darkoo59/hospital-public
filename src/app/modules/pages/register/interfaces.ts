export interface RegisterRequest {
    email: string;
    name: string;
    surname: string;
    password: string;
    IsActivatedAcount: boolean;
    bloodType: string;
    allergens: string[];
    doctorsId: number;
  }
  
  /*
  Interface for the Register Response (can look different, based on your backend api)
  */
  export interface RegisterResponse {
    status: number;
    message: string;
  }

  export interface AllergensResponse{
    allergenId: number;
    name: string;
  }

  export interface BloodType{
    value: string;
    viewValue: string;
  }

  export interface DoctorsResponse{
    doctorId: number;
    name: string;
    surname: string;
  }