import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoutRequest from 'utils/api/logout';
import profileApi, { IProfile } from 'utils/api/profile';
import { MenuItemEnum, MenuItemsData } from './DATA';
import AccountForm from './Form/AccountForm';
import MenuItem from './Menu/MenuItem';
import './styles.scss';

// Profile Inputs Inputs
export interface IProfileInputs {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: string;
}

// Profile Form Initial Values
export const initProfileData: IProfileInputs = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
};

function Settings() {
    // react router navigate
    const navigate = useNavigate();

    // Menu State
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // profile State
    const [profileFormData, setProfileFormData] =
        useState<IProfileInputs>(initProfileData);

    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuItemEnum>(
        MenuItemEnum.Account,
    );

    // on component mount
    useEffect(() => {
        // on success
        const success = (profile: IProfile) => {
            const { createdAt, updatedAt, id, username, role, ...formInputs } =
                profile;
            setProfileFormData(formInputs);
        };

        // on failure
        const failure = () => {
            // you're not logged in, go back to login
            navigate('/');
        };

        // get Profile
        profileApi.getProfile(success, failure);
    }, []);

    // logout the user
    const logout = () => {
        logoutRequest(
            // navigate lo login page after logout success
            () => navigate('/'),
            () => {},
        );
    };

    // Menu Items List
    const menuItems = MenuItemsData.map(({ title }) => (
        <MenuItem
            isActive={selectedMenuOption === title}
            title={title}
            onPress={() => {
                setSelectedMenuOption(title);
                if (title === MenuItemEnum.Logout) {
                    logout();
                }
            }}
        />
    ));

    return (
        // YOUR CODE SHOULD BE HERE!
        <div className='Settings'>
            <div className='Settings-Wrapper'>
                <div className='Settings-Wrapper-Menu'>
                    <span className='Settings-Wrapper-Menu-title'>
                        Settings
                    </span>
                    {}
                    <div className='Settings-Wrapper-Menu-nav'>
                        <span
                            onClick={() => setIsMenuOpen((prv) => !prv)}
                            className='Settings-Wrapper-Menu-nav-icon'
                        >
                            {!isMenuOpen ? (
                                <img
                                    src='/menu.svg'
                                    className='Settings-Wrapper-Menu-nav-icon-img'
                                    alt='menu'
                                />
                            ) : (
                                <img
                                    src='/close.svg'
                                    className='Settings-Wrapper-Menu-nav-icon-img'
                                    alt='close'
                                />
                            )}
                        </span>
                        <div
                            className={`Settings-Wrapper-Menu-nav-items ${
                                isMenuOpen ? 'active' : ''
                            }`}
                        >
                            {menuItems}
                        </div>
                    </div>
                    {/* Menu items on desktop screen */}
                    <div className='Settings-Wrapper-Menu-items'>
                        {menuItems}
                    </div>
                </div>
                <AccountForm formValues={profileFormData} />
            </div>
        </div>
    );
}

export default Settings;
