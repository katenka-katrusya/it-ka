import { NavLink } from 'react-router-dom';
import Friends from '@/components/frends/Friends.jsx';

const getNavLinkActiveClass = ({ isActive }) =>
  `${isActive ? 'text-amber-400/80' : ''} hover:text-amber-400/80 duration-300`;

const Sidebar = () => {
  return (
    <aside className='container py-5 pl-10 pr-5 max-w-52 min-h-screen shadow-md shadow-blue-200'>
      <nav>
        <ul className='flex flex-col gap-3'>
          <li>
            <NavLink to='/profile' className={getNavLinkActiveClass}>
              Профайл
            </NavLink>
          </li>
          <li>
            <NavLink to='/dialogs' className={getNavLinkActiveClass}>
              Сообщения
            </NavLink>
          </li>
          <li>
            <NavLink to='/news' className={getNavLinkActiveClass}>
              Новости
            </NavLink>
          </li>
          <li>
            <NavLink to='/music' className={getNavLinkActiveClass}>
              Музыка
            </NavLink>
          </li>
          <li>
            <NavLink to='/settings' className={getNavLinkActiveClass}>
              Настройки
            </NavLink>
          </li>
          <li>
            {/*<NavLink to='/friends' className={getNavLinkActiveClass}>*/}
            {/*  Друзья*/}
            {/*</NavLink>*/}
            <Friends />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
