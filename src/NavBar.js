import { useState } from 'react';
import navbarStyles from './NavBar.module.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import arrowUp from './icon-arrow-up.svg';
import arrowDown from './icon-arrow-down.svg';
import todoList from './icon-todo.svg';
import calendar from './icon-calendar.svg';
import reminders from './icon-reminders.svg';
import planning from './icon-planning.svg';
import hamMenu from './icon-menu.svg';
import close from './icon-close-menu.svg';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(prev => !prev);
  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <nav className={`${navbarStyles.navBar} ${menu ? navbarStyles.menuActive : ''}`}>
      <div className={navbarStyles.logoCon}>
      <Link>
      <img src={logo} alt='Logo' />
      </Link>  
        <img src={menu ? close : hamMenu} alt='Menu' className={navbarStyles.hamMenu} onClick={toggleMenu} />
      </div>
      <div className={menu ? navbarStyles.active : navbarStyles.firstNavCon}>
        <div className={navbarStyles.navItem} onMouseEnter={() => handleMouseEnter('features')} onMouseLeave={handleMouseLeave}>
          <p>Features {hoveredItem === 'features' ? <img src={arrowUp} alt="Arrow Up" /> : <img src={arrowDown} alt="Arrow Down" />}</p>
          {hoveredItem === 'features' && (
            <div className={navbarStyles.featuresSubList}>
              <p><img src={todoList} alt="Todo List" /> Todo List</p>
              <p><img src={calendar} alt="Calendar" /> Calendar</p>
              <p><img src={reminders} alt="Reminders" /> Reminders</p>
              <p><img src={planning} alt="Planning" /> Planning</p>
            </div>
          )}
        </div>
        <div className={navbarStyles.navItem} onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
          <p>Company {hoveredItem === 'company' ? <img src={arrowUp} alt="Arrow Up" /> : <img src={arrowDown} alt="Arrow Down" />}</p>
          {hoveredItem === 'company' && (
            <div className={navbarStyles.companySubList}>
              <Link to='/company/history'>History</Link>
              <Link to='/company/team'>Our Team</Link>
              <Link to='/company/blog'>Blog</Link>
            </div>
          )}
        </div>
        <Link to='/careers' className={navbarStyles.navItem}>Careers</Link>
        <Link to='/about' className={navbarStyles.navItem}>About</Link>
        <div className={navbarStyles.authButtons}>
          <button><Link to='/login'>Login</Link></button>
          <button><Link to='/register'>Register</Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;