import { Button, Input } from 'components';
import { IProfileInputs } from 'components/Settings';
import { validateLength, validEmail } from 'utils/client/inputValidation';
import './styles.scss';

interface AccountFormProps {
    formValues: IProfileInputs;
}

const AccountForm: React.FC<AccountFormProps> = ({ formValues }) => {
    return (
        <div className='Account-Form flex flex-col'>
            <div className='Form-Header flex items-center justify-between'>
                <span className='Form-Header-title'>Account</span>
                <Button type='main'>Save</Button>
            </div>
            <div className='flex col-gap Input-Space'>
                <Input
                    type='text'
                    label='First Name'
                    placeholder='Enter First Name'
                    name='firstName'
                />
                <Input
                    type='text'
                    label='First Name'
                    placeholder='Enter First Name'
                    name='lastName'
                />
            </div>
            <Input
                className='Input-Space'
                type='email'
                label='Email'
                placeholder='Enter First Name'
                name='firstName'
            />
            <Input
                className='Input-Space'
                type='date'
                label='Date of birth'
                placeholder='Enter Date of birth'
                name='firstName'
            />
            <div className='Input-Space w-full'>
                <Input
                    className='w-full'
                    type='phone'
                    label='Phone'
                    name='firstName'
                />
            </div>
        </div>
    );
};

const form = [
    {
        label: 'FirstName:',
        type: 'firstname',
        HTMLtype: 'firstname',
        name: 'firstname',
        placeholder: 'Enter your firstName',
        required: true,
        validation: (value: string) => {
            // if firstname is empty
            if (!value.length) return 'Email is required';

            // if firstname is invalid
            if (!validateLength(value, 2, 20))
                return 'FirstName must be between 2 and 20 char';

            // if valid
            return null;
        },
    },
    {
        label: 'LastName:',
        type: 'lastname',
        HTMLtype: 'lastname',
        name: 'firstname',
        placeholder: 'Enter your lastname',
        required: true,
        validation: (value: string) => {
            // if lastname is empty
            if (!value.length) return 'LastName is required';

            // if lastname is invalid
            if (!validateLength(value, 2, 20))
                return 'LastName must be between 2 and 20 char';

            // if valid
            return null;
        },
    },
    {
        label: 'Email:',
        type: 'email',
        HTMLtype: 'email',
        name: 'email',
        placeholder: 'Enter your email',
        required: true,
        validation: (value: string) => {
            // if email is empty
            if (!value.length) return 'Email is required';

            // if email is invalid
            if (!validEmail(value)) return 'Email is invalid';

            // if valid
            return null;
        },
    },
    {
        label: 'Date of birth:',
        HTMLtype: 'date',
        type: 'date',
        name: 'date_of_birth',
        placeholder: 'Choose birth date',
        required: true,
        validation: (value: string) => {
            // if date of birth is empty
            if (!value.length) return 'Date of birth is required';

            // if valid
            return null;
        },
    },
    {
        label: 'Phone',
        HTMLtype: 'text',
        type: 'phone',
        name: 'phone',
        placeholder: 'Enter phone number',
        required: true,
        validation: (value: string) => {
            // if phone number is empty
            if (!value.length) return 'Date of birth is required';

            // if valid
            return null;
        },
    },
];

export default AccountForm;
