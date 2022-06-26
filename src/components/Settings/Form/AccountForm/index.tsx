import { Button, Input } from 'components';
import { IProfileInputs } from 'components/Settings';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileApi from 'utils/api/profile';
import { validateLength, validEmail } from 'utils/client/inputValidation';
import './styles.scss';

interface AccountFormProps {
    formValues: IProfileInputs;
}

const AccountForm: React.FC<AccountFormProps> = ({ formValues }) => {
    // react router navigation
    const navigate = useNavigate();
    // submitting state
    const [submitting, setSubmitting] = useState(false);

    // Show Success Message After updating profile
    const [isSuccess, setIsSuccess] = useState(false);

    // formData state
    const [formData, setFormData] = useState<IProfileInputs>({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        dateOfBirth: '',
    });

    // error state
    const [error, setError] = useState<{
        global: string | null;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        dateOfBirth: string | null;
    }>({
        global: null,
        email: null,
        firstName: null,
        lastName: null,
        phone: null,
        dateOfBirth: null,
    });

    // handle on submit
    const handleSubmit = () => {
        // setting global error to false
        setError({ ...error, global: null });

        // setting submitting to true
        setSubmitting(true);
        console.log('Err', error);

        if (
            error.dateOfBirth ||
            error.email ||
            error.firstName ||
            error.lastName ||
            error.phone
        )
            return setSubmitting(false);

        profileApi.updateProfile(
            formData,
            () => {
                setSubmitting(false);
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            },
            (err) => {
                setSubmitting(false);
                setError({
                    ...error,
                    global: err,
                });
            },
        );

        // TODO add request here!!
    };

    useEffect(() => {
        setFormData({
            ...formValues,
            dateOfBirth: dayjs(formValues.dateOfBirth).format('YYYY-MM-DD'),
        });
    }, [formValues]);
    // on formData change
    useEffect(() => {
        // setting global error to null on input change
        setError({ ...error, global: null });
    }, [formData]);
    return (
        <div className='Account-Form flex flex-col'>
            <div className='Account-Form-header'>
                <span className='Account-Form-header-title'>Account</span>
            </div>
            <div className='Account-Form-form flex flex-col'>
                {error.global && (
                    <div className='Account-Form-form-error'>
                        <p>{error.global}</p>
                    </div>
                )}
                {isSuccess && (
                    <div className='Account-Form-form-success'>
                        <p>Your Profile Was updated successfully</p>
                    </div>
                )}
                {form.map((field, i) => (
                    <Input
                        key={i}
                        type={field.type}
                        HTMLtype={field.HTMLtype}
                        name={field.name}
                        label={field.label}
                        required={field.required}
                        placeholder={field.placeholder}
                        error={error[field.name as keyof typeof error]}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(newValue: string | boolean) => {
                            console.log('FieldName', field.name);
                            console.log('value', newValue);
                            // setting new value
                            setFormData({
                                ...formData,
                                [field.name]: newValue,
                            });

                            // checking if value is valid
                            let notValid = field.validation(newValue as string);

                            if (notValid) {
                                setError({ ...error, [field.name]: notValid });
                            } else {
                                setError({ ...error, [field.name]: null });
                            }
                        }}
                    />
                ))}
                <div>
                    <Button
                        type='main'
                        disabled={submitting}
                        onClick={handleSubmit}
                    >
                        {!submitting ? 'Save' : 'Submitting...'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

const form = [
    {
        label: 'FirstName:',
        HTMLtype: 'text',
        name: 'firstName',
        type: 'firstName',
        placeholder: 'Enter your firstName',
        required: true,
        validation: (value: string) => {
            // if firstname is empty
            if (!value.length) return 'FirstName is required';

            // if firstname is invalid
            if (!validateLength(value, 2, 20))
                return 'FirstName must be between 2 and 20 char';

            // if valid
            return null;
        },
    },
    {
        label: 'LastName:',
        HTMLtype: 'text',
        name: 'lastName',
        type: 'lastName',
        placeholder: 'Enter your lastName',
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
        HTMLtype: 'email',
        name: 'email',
        type: 'email',
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
        name: 'dateOfBirth',
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
            if (!value.length) return 'phone is required';

            // if valid
            return null;
        },
    },
];

export default AccountForm;
