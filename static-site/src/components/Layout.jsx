import { Link } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <header className="site-header">
        <nav className="main-nav">
          <div className="nav-brand">
            <Link to="/">Shao-Lin New Mexico</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/membership">Memberships</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main className="site-main">
        {children}
      </main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Chinese Shao-Lin Center of New Mexico. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
