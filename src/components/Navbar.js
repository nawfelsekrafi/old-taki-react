import ProfileIcon from './ProfileIcon';
import SearchInput from './SearchInput';


const Navbar = () => {
  return (
  <nav className="navbar">
    <SearchInput />
    <ProfileIcon />
  </nav>
  );
}

export default Navbar