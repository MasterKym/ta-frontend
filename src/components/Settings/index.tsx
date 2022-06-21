import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getProfile from 'utils/api/getProfile';
import { MenuItemEnum, MenuItemsData } from './DATA';
import MenuItem from './Menu/MenuItem';
import './styles.scss';

function Settings() {
    // react router navigate
    const navigate = useNavigate();

    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuItemEnum>(
        MenuItemEnum.Account,
    );

    // on component mount
    useEffect(() => {
        // on success
        const success = () => {
            console.log('you are successfully logged in');
        };

        // on failure
        const failure = () => {
            // you're not logged in, go back to login
            navigate('/');
        };

        // get Profile
        getProfile(success, failure);
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
            </div>
        </div>
    );
}

export default Settings;
