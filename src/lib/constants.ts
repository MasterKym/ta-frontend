import {
  validateLength,
  validEmail,
  validPassword,
} from 'utils/client/inputValidation';
import { IMenuItems, IFormFields } from './types';

export const menuItems: IMenuItems[] = [
  { name: 'Account', link: '#' },
  { name: 'Notifications', link: '#' },
  { name: 'Security', link: '#' },
  { name: 'Delete Account', link: '#' },
];

export const formFields: IFormFields[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    HTMLtype: 'text',
    placeholder: 'First Name',
    required: true,
    validation: (value: string) => {
      if (!value.length) return 'First name is required';

      if (!validateLength(value, 2, 20))
        return 'First name must be between 2 and 20 characters';

      return null;
    },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    HTMLtype: 'text',
    placeholder: 'Last Name',
    required: true,
    validation: (value: string) => {
      if (!value.length) return 'Last name is required';

      if (!validateLength(value, 2, 20))
        return 'Last name must be between 2 and 20 characters';

      return null;
    },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    HTMLtype: 'email',
    placeholder: 'Email',
    required: true,
    validation: (value: string) => {
      if (!value.length) return 'Email is required';

      if (!validEmail(value)) return 'Email is invalid';

      return null;
    },
  },
  {
    name: 'password',
    label: 'Current Password',
    type: 'password',
    HTMLtype: 'password',
    placeholder: 'Password',
    required: true,
    validation: (value: string) => {
      if (!value.length) return 'Password is required';

      if (!validPassword(value)) return 'Password is invalid';

      return null;
    },
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    type: 'date',
    HTMLtype: 'date',
    placeholder: 'Date of Birth',
    required: true,
    validation: (value: string) => {
      if (!value.length) return 'Date of birth is required';

      return null;
    },
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'phone',
    HTMLtype: 'tel',
    placeholder: '0000-00-0000',
    required: true,
    validation: (value: string) => {
      if (!value.length) return 'Phone is required';

      return null;
    },
  },
];
