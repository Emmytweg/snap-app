import { useState } from 'react';
import styles from './NavBar.module.css';
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

  const toggleMenu = () => {
    setMenu(prevShowMenu => !prevShowMenu);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className={`${styles.navBar} ${menu ? styles.menuActive : ''}`}>
      <div className={styles.logoCon}>
        <img src={logo} alt='Logo' />
        <img src={menu ? close : hamMenu} alt='Menu' className={styles.hamMenu} onClick={toggleMenu} />
      </div>
      <div className={menu ? styles.active : styles.firstNavCon}>
        <div
          className={styles.navItem}
          onMouseEnter={() => handleMouseEnter('features')}
          onMouseLeave={handleMouseLeave}
        >
          <p>
            Features{' '}
            {hoveredItem === 'features' ? (
              <img src={arrowUp} alt="Arrow Up" />
            ) : (
              <img src={arrowDown} alt="Arrow Down" />
            )}
          </p>
          {hoveredItem === 'features' && (
            <div className={styles.featuresSubList}>
              <p>
                <img src={todoList} alt="Todo List" /> Todo List
              </p>
              <p>
                <img src={calendar} alt="Calendar" /> Calendar
              </p>
              <p>
                <img src={reminders} alt="Reminders" /> Reminders
              </p>
              <p>
                <img src={planning} alt="Planning" /> Planning
              </p>
            </div>
          )}
        </div>
        <div
          className={styles.navItem}
          onMouseEnter={() => handleMouseEnter('company')}
          onMouseLeave={handleMouseLeave}
        >
          <p>
            Company{' '}
            {hoveredItem === 'company' ? (
              <img src={arrowUp} alt="Arrow Up" />
            ) : (
              <img src={arrowDown} alt="Arrow Down" />
            )}
          </p>
          {hoveredItem === 'company' && (
            <div className={styles.companySubList}>
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>
          )}
        </div>
        <p className={styles.navItem}>
          <Link to='/careers'>Careers</Link>
        </p>
        <p className={styles.navItem}>
          <Link to='/about'>About</Link>
        </p>
        <div className={styles.authButtons}>
        <button>
          <Link to='/login'>Login</Link>
        </button>
        <button>
          <Link to='/register'>Register</Link>
        </button>
      </div>
      </div>
     
    </nav>
  );
};

export default Navbar;