import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from '../Store';

const Header = () => {
 const auth = useSelector((state)=>state.auth.isLoggIn);
 const dispatch = useDispatch()
 const logOutHandler=(e)=>{
  e.preventDefault();
  dispatch(authAction.logout())

 }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
