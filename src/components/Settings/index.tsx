import { IProfileData, IProfileInputs } from 'lib/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getProfile from 'utils/api/getProfile';
import Form from './Form';
import Menu from './Menu';
import { HiMenu, HiX } from 'react-icons/hi';
import './styles.scss';
import useMediaQuery from 'hooks/useMediaQuery';

function Settings() {
  // react router navigate
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 37.5em)');
  const [activeMenuItem, setActiveMenuItem] = useState<String>('Account');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileData, setProfileData] = useState<IProfileInputs>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
  });
  // on component mount
  useEffect(() => {
    // on success
    const success = (profile: IProfileData) => {
      let { id, username, createdAt, role, updatedAt, ...profileData } =
        profile;

      setProfileData({
        password: '',
        ...profileData,
      });
    };

    // on failure
    const failure = () => {
      // you're not logged in, go back to login
      navigate('/');
    };

    // get Profile
    getProfile(success, failure);
  }, []);
  return (
    // YOUR CODE SHOULD BE HERE!
    <div className="Wrapper relative">
      {/* Mobile menu */}
      {isMobile && (
        <div
          className={`Settings-mobile-menu absolute ${
            isMenuOpen ? '' : 'display-none-important'
          }`}
        >
          <Menu
            activeMenuItem={activeMenuItem}
            setActiveMenuItem={setActiveMenuItem}
            isMobile={isMobile}
          />
        </div>
      )}
      <div className="Settings">
        <div className="Settings-menu">
          <div className="flex justify-between">
            <h1 className="Settings-title">Settings</h1>
            <div
              className="Settings-menu-icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <HiX size="1.7rem" color="var(--main)" />
              ) : (
                <HiMenu size="1.7rem" color="var(--main)" />
              )}
            </div>
          </div>
          {/* Desktop menu */}
          {!isMobile && (
            <Menu
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
              isMobile={false}
            />
          )}
        </div>
        <Form initialFormData={profileData} />
      </div>
    </div>
  );
}

export default Settings;
