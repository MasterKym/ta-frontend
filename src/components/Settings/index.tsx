import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const menuItems = MenuItemsData.map(({ title }) => (
        <MenuItem
            isActive={selectedMenuOption === title}
            title={title}
            onPress={() => setSelectedMenuOption(title)}
        />
    ));

    return (
        // YOUR CODE SHOULD BE HERE!
        <div className='Settings flex items-center justify-center'>
            <div className='flex'>
                <div className='Settings-Menu flex flex-col '>
                    <span className='Settings-Menu-title'>Settings</span>
                    {menuItems}
                </div>
                <AccountForm formValues={profileFormData} />
            </div>
        </div>
    );
}

export default Settings;
