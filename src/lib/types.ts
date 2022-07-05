import { ReactElement } from 'react';

export interface IMenuItems {
  name: string;
  link: string;
}

export interface IFormFields {
  name: string;
  type: string;
  HTMLtype: string;
  label: string;
  required: boolean;
  placeholder: string;
  validation: (value: string) => string | null;
}
export interface IProfileData {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
  createdAt: string;
  updatedAt: string;
}
export interface IProfileInputs {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  password: string;
}
export interface IProfileInputsError extends IProfileInputs {
  errorFromServer: string;
}
export interface IMessage {
  messageType: 'error' | 'success';
  messageContent: string;
  icon: ReactElement;
}
