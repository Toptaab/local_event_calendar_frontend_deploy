import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import EventPage from '../pages/EventPage';
import CreateEventPage from '../pages/CreateEventPage';
import ExplorePage from '../pages/ExplorePage';
import ProfilePage from '../pages/ProfilePage';
import Container from '../layouts/Container';
import MapPage from '../pages/MapPage';
import OrganizerRegisterPage from '../pages/OrganizerRegisterPage';
import UserRegisterPage from '../pages/UserRegisterPage';
import EventContextProvider from '../features/Events/context/EventContext';
import EditEventPage from '../pages/EditEventPage';
// import ExploreContextProvider from '../features/explore/context/ExploreContext';
import AuthContextProvider from '../features/auth/context/AuthContext';

import EditProfilePage from '../pages/EditProfilePage';
import CalendarPage from '../pages/CalendarPage';
import ProtectProfile from '../features/profile/components/ProtectProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register/organizer',
        element: <OrganizerRegisterPage />,
      },
      {
        path: '/register',
        element: <UserRegisterPage />,
      },
      {
        path: '/create-event',
        element: (
          <ProtectProfile>
            <CreateEventPage />
          </ProtectProfile>
        ),
      },
      {
        path: '/editevent/:eventId',
        element: (
          <ProtectProfile>
            <EditEventPage />
          </ProtectProfile>
        ),
      },

      {
        path: '/explore',
        element: <ExplorePage />,
      },
      {
        path: '/profile',
        element: (
          <ProtectProfile>
            <ProfilePage />
          </ProtectProfile>
        ),
      },
      { path: '/map', element: <MapPage /> },

      {
        path: '/event/:eventId',
        element: <EventPage />,
      },
      {
        path: '/profile/edit',
        element: (
          <ProtectProfile>
            <EditProfilePage />
          </ProtectProfile>
        ),
      },
      { path: '/calendar', element: <CalendarPage /> },
      { path: '/calendar/:seasonId', element: <CalendarPage /> },
      {
        path: '',
        element: <Navigate to='/home' />,
      },
      {
        path: '/*',
        element: <Navigate to='/home' />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
