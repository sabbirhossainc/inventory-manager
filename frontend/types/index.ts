import { ReactNode } from "react";

// auth types
export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

// product types
export interface Product {
  _id: string;
  name: string;
  image: string;
  stock: number;
  createdAt?: string;
}

export interface ProductProps {
  product: Product;
}

export interface ProductFormInputs {
  name: string;
  image: string;
  stock: number;
}

export interface ProductFormProps {
  isEdit?: boolean;
  initialValues?: ProductFormInputs;
  productId?: string;
}


// ui 
export type ChildrenAsProps = {
  children: ReactNode;
};

// errors
export interface RTKError {
  status: number;
  data: {
    msg: string;
    [key: string]: unknown;
  };
}

export interface ApiError {
  response?: {
    data?: {
      msg?: string;
    };
  };
}
