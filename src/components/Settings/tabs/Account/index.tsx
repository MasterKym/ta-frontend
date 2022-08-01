import React, { useEffect, useState } from 'react';
import {
  BsArrowRepeat,
  BsArrowRight,
  BsEye,
  BsEyeSlash,
  BsX,
} from 'react-icons/bs';
import ReactPhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import getProfile from 'utils/api/getProfile';
import logout from 'utils/api/logout';
import updateProfile from 'utils/api/updateProfile';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [loggingout, setLoggingout] = useState(false);
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<{
    exists: boolean;
    message: string;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.exists) {
      setTimeout(() => {
        setError(undefined);
      }, 5000);
    }
  }, [error]);

  useEffect(() => {
    const success = (data: any) => {
      setFirstName(data.user.firstName);
      setLastname(data.user.lastName);
      setEmail(data.user.email);
      const dateOfBirth = data.user.dateOfBirth;
      setDateOfBirth(dateOfBirth.substring(0, 10));
      setPhone(data.user.phone);
    };

    getProfile(success, (error: any) => {
      setError({
        exists: true,
        message: error.message || 'Cannot get profile, please try again later',
      });
      setUpdating(false);
      navigate('/');
    });
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent<any>) => {
    setUpdating(true);
    e.preventDefault();
    const updateArgs = {
      username: firstname,
      password: password,
      firstName: firstname,
      lastName: lastname,
      email: email,
      dateOfBirth: new Date(dateOfBirth),
      phone: phone,
    };
    const success = (data: any) => {
      setUpdating(false);
    };
    const error = (error: any) => {
      setError({
        exists: true,
        message: error?.message || 'Something went wrong',
      });
      setUpdating(false);
    };
    updateProfile(updateArgs, success, error);
  };
  const canSubmit =
    firstname.length > 0 &&
    lastname.length > 0 &&
    email.length > 0 &&
    dateOfBirth.length > 0 &&
    phone.length > 0;

  const handleLogout = (e: React.FormEvent<any>) => {
    setLoggingout(true);
    e.preventDefault();

    const success = (data: any) => {
      setLoggingout(false);
      navigate('/');
    };
    const error = (error: any) => {
      setError({
        exists: true,
        message: error?.message || 'An error occurred while logging out',
      });
      setLoggingout(false);
    };
    logout(success, error);
  };

  return (
    <div className="flex flex-col w-full h-screen md:h-auto bg-white px-4 py-2 md:px-12 md:py-6 border border-[#E1E1E1] rounded-none md:rounded-lg items-center">
      {error?.exists && (
        <div className="flex flex-row justify-between items-start w-full p-7 rounded-lg bg-red-400/50">
          <h1>{error.message}</h1>
          <BsX
            className="text-3xl cursor-pointer"
            onClick={() => setError(undefined)}
          />
        </div>
      )}

      <div className="flex flex-row justify-between items-start w-full pt-7 md-pt-3">
        <h1 className="text-3xl font-bold">Account</h1>
        <button
          onClick={(e) => handleSubmit(e)}
          disabled={updating || !canSubmit}
          type="submit"
          className={`w-[150px] ml-auto text-white py-2 px-6 text-sm text-center rounded-[10px] 
              ${
                canSubmit
                  ? 'bg-[#7F265B] transition-all active:scale-[97%]'
                  : 'cursor-not-allowed bg-[#d08fb6]'
              }
            `}
        >
          <span className="flex flex-row items-center justify-center">
            {updating ? 'Saving' : 'Save'}
            {updating && <BsArrowRepeat className="animate-spin ml-2" />}
          </span>
        </button>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col justify-between items-start w-full mt-[70px] mb-[26px]">
        <div className="md:w-[48%] w-full flex flex-col items-start justify-start">
          <label className="text-sm font-bold">First Name</label>
          <input
            disabled={updating}
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className=" w-full px-6 py-2 text-sm text-left rounded-[5px] border border-[#E1E1E1] outline-[#7F265B]"
            type="text"
            placeholder="Mohamed"
          />
        </div>
        <div className="md:w-[48%] w-full flex flex-col items-start justify-start">
          <label className="text-sm font-bold">Last Name</label>
          <input
            disabled={updating}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className=" w-full px-6 py-2 text-sm text-left rounded-[5px] border border-[#E1E1E1] outline-[#7F265B]"
            type="text"
            placeholder="Elmredi"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between items-start w-full mb-[26px]">
        <div className="w-full flex flex-col items-start justify-start">
          <label className="text-sm font-bold">Email</label>
          <input
            disabled={updating}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-full px-6 py-2 text-sm text-left rounded-[5px] border border-[#E1E1E1] outline-[#7F265B]"
            placeholder="mohamed@example.com"
            type="email"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-start w-full mb-[26px]">
        <label className="text-sm font-bold">Password</label>
        <div className="w-full flex flex-row items-start justify-start rounded-[5px] border-2 border-[#E1E1E1] focus-within:border-[#7F265B]">
          <div className="w-full">
            <input
              disabled={updating}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full px-3 py-2 text-sm text-left outline-none  "
              placeholder="password here"
              type={showPassword ? 'text' : 'password'}
            />
          </div>
          <div
            className="mr-1 w-5 h-5 rounded-full m-auto cursor-pointer flex items-center justify-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start w-full mb-[26px]">
        <div className="w-full flex flex-col items-start justify-start">
          <label className="text-sm font-bold">Date of birth</label>
          <input
            disabled={updating}
            value={dateOfBirth as string}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className=" w-full px-6 py-2 text-sm text-left rounded-[5px] border border-[#E1E1E1] outline-[#7F265B]"
            type="date"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start w-full mb-[26px]">
        <label className="text-sm font-bold">Phone Number</label>
        <ReactPhoneInput
          disabled={updating}
          value={phone}
          onChange={(e) => setPhone(e)}
          containerClass="w-full"
          country={'ma'}
        />
      </div>

      <div className="flex flex-row-reverse md:flex-row w-full justify-between">
        <button
          onClick={(e) => handleSubmit(e)}
          disabled={updating || !canSubmit}
          type="submit"
          className={`w-[150px] text-white py-2 px-6 text-sm text-center rounded-[10px] 
              ${
                canSubmit
                  ? 'bg-[#7F265B] transition-all active:scale-[97%]'
                  : 'cursor-not-allowed bg-[#d08fb6]'
              }
            `}
        >
          <span className="flex flex-row items-center justify-center">
            {updating ? 'Saving' : 'Save'}
            {updating && <BsArrowRepeat className="animate-spin ml-2" />}
          </span>
        </button>

        <button
          onClick={handleLogout}
          type="submit"
          className={`w-[150px] py-2 px-6 text-sm text-center rounded-[10px] text-[#7F265B] transition-all active:scale-[97%] bg-[#E5D4DE]`}
        >
          <span className="flex flex-row items-center justify-center">
            Logout
            {loggingout ? (
              <BsArrowRepeat className="animate-spin ml-2" />
            ) : (
              <BsArrowRight className="ml-3" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Index;
