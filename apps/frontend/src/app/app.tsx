import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { EmployeesPage } from './pages/EmployeesPage';
import { HomePage } from './pages/HomePage';
import { CreateOfferPage } from './pages/CreateOfferPage';
import { ROUTE } from './routes';
import { RegistrationPage } from './pages/RegistrationPage';
import { OffersPage } from './pages/OffersPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useState } from 'react';

import { worker } from './mocks/browser';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  // const { worker } = require("./mocks/browser");
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  worker.start();
}

export function App() {
  const [user, setUser] = useState(true);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: ROUTE.REGISTRATION,
          element: <RegistrationPage />,
        },
        {
          path: ROUTE.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTE.CONTACT,
          element: <ContactPage />,
        },
        {
          path: ROUTE.ABOUT,
          element: <AboutPage />,
        },
        {
          path: ROUTE.EMPLOYEES,
          element: <ProtectedRoute user={user} element={<EmployeesPage />} />,
        },
        {
          path: ROUTE.CREATE_OFFER,
          element: <CreateOfferPage />,
        },
        {
          path: ROUTE.OFFERS,
          element: <OffersPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
