import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <h1 className="main-title">Math Magicians</h1>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/calculator"><li>Calculator</li></Link>
      <Link to="/quote"><li>Quote</li></Link>
    </ul>
  </nav>
);

export default Header;
