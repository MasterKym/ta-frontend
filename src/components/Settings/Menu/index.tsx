import { menuItems } from 'lib/constants';
import { Link, useNavigate } from 'react-router-dom';
import signOut from 'utils/api/signOut';

import './styles.scss';

interface MenuProps {
  activeMenuItem: String;
  setActiveMenuItem: React.Dispatch<React.SetStateAction<String>>;
  isMobile: Boolean;
}

function Menu({
  activeMenuItem,
  setActiveMenuItem,
  isMobile = false,
}: MenuProps) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(
      () => {
        navigate('/');
      },
      () => {}
    );
  };
  return (
    <nav
      className={`Settings-nav ${isMobile ? 'Settings-show-mobile-menu' : ''} `}
    >
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className={`Settings-nav-item ${
            activeMenuItem === item.name ? 'Settings-nav-active' : ''
          }`}
          to={item.link}
          onClick={() => setActiveMenuItem(item.name)}
        >
          {item.name}
        </Link>
      ))}
      <div className={`Settings-nav-item`} onClick={handleLogOut}>
        Logout
      </div>
    </nav>
  );
}
export default Menu;
