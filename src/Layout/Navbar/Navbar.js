import ProfileIcon from '../ProfileIcon/ProfileIcon';
import SearchInput from '../../components/SearchInput/SearchInput';
import './index.css';

const Navbar = () => {
  return (
  <nav className="navbar">
    <SearchInput />
    <ProfileIcon />
  </nav>
  );
}

export default Navbar