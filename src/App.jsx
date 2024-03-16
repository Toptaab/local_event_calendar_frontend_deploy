import { Slide, ToastContainer } from 'react-toastify';
import Router from './routes';
import AuthContextProvider from './features/auth/context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // console.log('api', import.meta.env);
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
      <ToastContainer
        position='top-left'
        autoClose={5000}
        // theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
