import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header>
    <div className="bar">
      <Link href="/">Sick fits</Link>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>search</p>
    </div>
  </header>
);

export default Header;
