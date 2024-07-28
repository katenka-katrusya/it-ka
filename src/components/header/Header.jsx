import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='rounded-b shadow-md shadow-slate-300'>
      <div className='container-lg py-5 px-10 flex justify-between'>
        <NavLink to='/profile'>Logo</NavLink>
        <h1>Header</h1>
      </div>
    </header>
  )
}

export default Header
