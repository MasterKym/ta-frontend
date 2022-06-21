import React from 'react';
import './styles.scss';

interface MenuItemProps {
    isActive: boolean;
    title: string;
    onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ isActive, onPress, title }) => {
    return (
        <div
            onClick={onPress}
            className={`Menu-Item w-full ${isActive ? 'active' : ''}`}
        >
            <span className='Menu-Item-text'>{title}</span>
        </div>
    );
};

export default MenuItem;
