import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EmailIcon, LockerIcon } from '../../../icons';
import Input from '../../../global_components/Input';
import { validateLogin } from '../validation/validate-login';
import { apiLogin, authMe } from '../../../api/auth';
import { storeToken } from '../../../utils/local-storage';
import useAuth from '../hooks/auth';

export default function LoginContainer() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const { setAuthUser, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateResult = validateLogin(input);
      if (Object.keys(validateResult).length > 0) {
        setError(validateResult);
      } else {
        setLoading(true);
        const loginResult = await apiLogin(input);
        storeToken(loginResult.data.accessToken);
        const authResult = await authMe(loginResult.data.accessToken);
        setAuthUser(authResult.data);
        navigate('/');
        toast.success('Login Success');
      }
    } catch (err) {
      console.log(err);
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => window.scrollTo(0, 0), []);

  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }

  return (
    <form className='min-h-dhv' onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className=' flex flex-col  gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Login</div>
          <Input
            name='email'
            placeholder='Example@gmail.com'
            value={input}
            onChange={handleChange}
            title='Email'
            errorMessage={error?.email}
          >
            <EmailIcon />
          </Input>

          {/* password */}
          {showPassword ? (
            <Input
              name='password'
              placeholder='Password'
              value={input}
              onChange={handleChange}
              title='Password'
              errorMessage={error?.password}
              type='text'
              onClickButton={() => setShowPassword(false)}
            >
              <LockerIcon />
            </Input>
          ) : (
            <Input
              name='password'
              placeholder='Password'
              value={input}
              onChange={handleChange}
              title='Password'
              errorMessage={error?.password}
              type='password'
              onClickButton={() => setShowPassword(true)}
            >
              <LockerIcon />
            </Input>
          )}

          <div className=' mx-auto flex flex-col justify-center text-center gap-[1.5rem] space-between w-full'>
            <button
              type='submit'
              className='btn bg-primary h-12 text-white text-[1rem] '
            >
              Login
            </button>

            <div className='text-[1rem]'>
              <span>{`Don't have an account ? `}</span>
              <Link to='/register'>
                <span className='text-green-700'>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
