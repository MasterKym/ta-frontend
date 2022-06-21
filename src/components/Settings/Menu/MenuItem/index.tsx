import React from 'react';

interface MenuItemProps {
    isActive: boolean;
    title: string;
    onPress: (title: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ isActive, onPress, title }) => {
    return (
        <div
            onClick={() => {}}
            className={`Menu-Item w-full ${isActive ? 'active' : ''}`}
        >
            <span className='Menu-Item-tile'>{title}</span>
        </div>
    );
};

export default MenuItem;
