import Button from 'components/global/Button';
import Input from 'components/global/Input';
import { formFields } from 'lib/constants';
import { IProfileInputs, IProfileInputsError } from 'lib/types';
import { useEffect, useState } from 'react';
import updateProfile from 'utils/api/updateProfile';
import { BsCheck2Circle, BsXCircle } from 'react-icons/bs';
import './styles.scss';
import Message from '../Message';

function Form({ initialFormData }: { initialFormData: IProfileInputs }) {
  const [formData, setFormData] = useState<IProfileInputs>({
    ...initialFormData,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<IProfileInputsError>({
    errorFromServer: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
  });

  const handleSubmit = () => {
    setFormError({ ...formError, errorFromServer: '' });
    setIsSubmitting(true);
    //check if there is any error
    if (Object.values(formError).every((v) => v !== ''))
      return setIsSubmitting(false);
    updateProfile(
      formData,
      () => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ ...formData, password: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      },
      (err) => {
        setIsSubmitting(false);
        setIsSubmitted(false);
        setFormError({
          ...formError,
          errorFromServer: err,
        });
      }
    );
  };

  useEffect(() => {
    let { dateOfBirth } = initialFormData;
    dateOfBirth = new Date(dateOfBirth).toLocaleDateString('en-CA');
    setFormData({ ...initialFormData, dateOfBirth });
  }, [initialFormData]);
  
  return (
    <div className="Settings-content">
      <div className="Settings-content-header">
        <h2 className="Settings-content-title">Account</h2>
        <div className="flex items-center row-gap">
          {isSubmitted && (
            <Message
              messageType="success"
              messageContent="Saved!"
              icon={<BsCheck2Circle size="1.5rem" color="inherit" />}
            />
          )}
          <Button
            type="main"
            size="sm"
            className="Settings-content-button"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </div>
      <div className="Settings-content-form">
        {formFields.map((field, index) => (
          <Input
            key={index}
            type={field.type}
            HTMLtype={field.HTMLtype}
            label={field.label}
            placeholder={field.placeholder}
            name={field.name}
            error={formError[field.name as keyof typeof formError]}
            value={formData[field.name as keyof typeof formData]}
            onChange={(newValue) => {
              setFormData({ ...formData, [field.name]: newValue });
              const notValid = field.validation(newValue as string);
              setFormError({ ...formError, [field.name]: notValid ?? '' });
            }}
          />
        ))}
      </div>
      <div className="Settings-content-button-bottom">
        <Button
          type="main"
          size="sm"
          className="Settings-content-button"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
        </Button>
        {isSubmitted && (
          <Message
            messageType="success"
            messageContent="Saved!"
            icon={<BsCheck2Circle size="1.5rem" color="inherit" />}
          />
        )}
        {formError.errorFromServer && (
          <Message
            messageType="error"
            messageContent={formError.errorFromServer}
            icon={<BsXCircle size="1.5rem" color="inherit" />}
          />
        )}
      </div>
    </div>
  );
}
export default Form;
