import { Link } from 'react-router-dom';

import { ROUTE } from '../../../routes';

export const Menu = () => {
  return (
    <nav className="mb-6">
      <ul className="flex list-none">
        <li className="mx-2">
          <Link to={ROUTE.HOME}>Home</Link>
        </li>
        <li className="mx-2">
          <Link to={ROUTE.ABOUT}>About</Link>
        </li>
        <li className="mx-2">
          <Link to={ROUTE.CONTACT}>Contact</Link>
        </li>
        <li className="mx-2">
          <Link to={ROUTE.EMPLOYEES}>Employees</Link>
        </li>
        <li className="mx-2">
          <Link to={ROUTE.OFFERS}>Offer</Link>
        </li>
        <li className="mx-2">
          <Link to={ROUTE.REGISTRATION}>Registration</Link>
        </li>
      </ul>
    </nav>
  );
};
