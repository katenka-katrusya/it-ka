import { NavLink } from 'react-router-dom';

const classLinkName = ({ isActive }) =>
  `${isActive ? 'text-amber-400/90' : 'text-neutral-300'} 
     font-normal hover:text-amber-400/90 duration-300`;

const DialogItem = ({ name, id }) => {
  const dialogPath = `/dialogs/${id}`;

  return (
    <li>
      <NavLink to={dialogPath} className={classLinkName}>
        {name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
