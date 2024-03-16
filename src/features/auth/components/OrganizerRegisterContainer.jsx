import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../../global_components/Input';
import {
  EmailIcon,
  LockerIcon,
  ProfileIcon,
  PictureIcon,
  IdentityCardIcon,
} from '../../../icons';
import { validateOrganizerRegister } from '../validation/validate-register';
import Button from '../../../global_components/Button';
import { apiRegister, authMe } from '../../../api/auth';
import { storeToken } from '../../../utils/local-storage';
import useAuth from '../hooks/auth';
import { ORGANIZER } from '../../../constance/index';

export default function OrganizerRegisterContainer() {
  const [input, setInput] = useState({
    gender: 'MALE',
    role: 'ORGANIZER',
    corporation: 'INDIVIDUAL',
  });
  const [error, setError] = useState();
  const [profileImage, setProfileImage] = useState(null);
  const [identityCopyImage, setIdentityCopyImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConfirmPassword] = useState(false);
  const { setAuthUser, loading, setLoading } = useAuth();

  const fileEl = useRef(null);
  const fileEl2 = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
    setInput({ ...input, [e.target.name]: e.target.files[0] });
  };

  const handleIdentityCopy = (e) => {
    setIdentityCopyImage(e.target.files[0]);
    setInput({ ...input, [e.target.name]: e.target.files[0] });
  };

  const handleProfilePicDelete = () => {
    setProfileImage(null);
    const temp = { ...input };
    delete temp.profileImage;
    setInput(temp);
  };

  const handleIdentityCopyPicDelete = () => {
    setIdentityCopyImage(null);
    const temp = { ...input };
    delete temp.identityCopyImage;
    setInput(temp);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateResult = validateOrganizerRegister(input);

      if (Object.keys(validateResult).length > 0) {
        setError(validateResult);
      } else {
        setLoading(true);
        const formData = new FormData();

        Object.entries(input).map((el) => {
          formData.append(el[0], el[1]);
          return null;
        });

        // console.log(...formData);

        const registerResult = await apiRegister(formData);
        storeToken(registerResult.data.accessToken);
        const authResult = await authMe(registerResult.data.accessToken);
        setAuthUser(authResult.data);
        setError(null);
        console.log('Organizer register success');
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
      if (err.response.data.message === 'this email has aleady been used') {
        setError({ ...error, email: 'This email has already been used' });
      }
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
    <form onSubmit={handleSubmit}>
      <div className=' mx-auto flex flex-col  gap-[2rem] w-full p-[3rem]'>
        <div className='text-[1.75rem] font-semibold text-center'>
          Create An Account
        </div>

        {/* profile image */}
        <div className='flex flex-col items-center'>
          {profileImage ? (
            <div className=' relative'>
              <img
                src={URL.createObjectURL(profileImage)}
                alt='event'
                className='w-[200px] h-[200px] object-cover'
              />
              <button
                type='button'
                className='absolute top-0 right-0 m-3 bg-white w-[1.5rem] font-bold h-[1.5rem] text-center rounded-[100%]'
                onClick={handleProfilePicDelete}
              >
                X
              </button>
            </div>
          ) : (
            <PictureIcon />
          )}
        </div>

        {/* upload profile */}
        <div className='flex flex-row justify-end'>
          <div className='flex flex-col items-end'>
            <div className=' sm:[30%] flex flex-col '>
              <input
                type='file'
                ref={fileEl}
                className='hidden'
                name='profileImage'
                onChange={handleProfileImage}
              />
              <Button onClick={() => fileEl.current.click()}>
                Upload Profile
              </Button>
            </div>
            <div>
              {error?.profileImage ? (
                <div className='text-red-500 pl-[0.5rem]'>
                  {error?.profileImage}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* email */}
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

        {/* username */}
        <Input
          name='userName'
          placeholder='Username'
          value={input}
          onChange={handleChange}
          title='Username'
          errorMessage={error?.userName}
        >
          <ProfileIcon />
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

        {/* confirm password */}
        {showConformPassword ? (
          <Input
            name='confirmPassword'
            placeholder='Confirm password'
            value={input}
            onChange={handleChange}
            title='Confirm password'
            errorMessage={error?.confirmPassword}
            type='text'
            onClickButton={() => setShowConfirmPassword(false)}
          >
            <LockerIcon />
          </Input>
        ) : (
          <Input
            name='confirmPassword'
            placeholder='Confirm password'
            value={input}
            onChange={handleChange}
            title='Confirm password'
            errorMessage={error?.confirmPassword}
            type='password'
            onClickButton={() => setShowConfirmPassword(true)}
          >
            <LockerIcon />
          </Input>
        )}

        {/* Select gender */}
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <div>Gender</div>
            <select
              name='gender'
              className='h-10  rounded-lg'
              onChange={handleChange}
              value={input.gender}
            >
              <option value='MALE'>MALE</option>
              <option value='FEMALE'>FEMALE</option>
              <option value='OTHER'>OTHER</option>
            </select>
          </div>
        </div>

        {/* id copy image */}
        <div className='flex flex-col items-center'>
          {identityCopyImage ? (
            <div className='relative'>
              <img
                src={URL.createObjectURL(identityCopyImage)}
                alt='event'
                className='w-[200px] h-[200px] object-cover'
              />
              <button
                type='button'
                className='absolute top-0 right-0 m-3 bg-white w-[1.5rem] font-bold h-[1.5rem] text-center rounded-[100%]'
                onClick={handleIdentityCopyPicDelete}
              >
                X
              </button>
            </div>
          ) : (
            <IdentityCardIcon />
          )}
        </div>
        <div className='flex flex-row justify-end '>
          <div className='flex flex-col items-end'>
            <div className='sm:[30%]'>
              <input
                type='file'
                ref={fileEl2}
                className='hidden'
                name='identityCopyImage'
                onChange={handleIdentityCopy}
              />
              <Button onClick={() => fileEl2.current.click()}>Upload ID</Button>
            </div>
            <div>
              {error?.identityCopyImage ? (
                <div className='text-red-500 pl-[0.5rem]'>
                  {error?.identityCopyImage}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* official name */}
        <Input
          name='officialName'
          placeholder='Official name'
          value={input}
          onChange={handleChange}
          title='Official Name'
          errorMessage={error?.officialName}
        />

        {/* corporation type */}
        <div className='flex flex-col gap-4'>
          <div>Please select your entity type:</div>
          <select
            name='corporation'
            className='h-10  rounded-lg'
            onChange={handleChange}
            value={input.corporation}
          >
            <option value={ORGANIZER.INDIVIDUAL}>Individual</option>
            <option value={ORGANIZER.CORPORATION}>Corporation</option>
          </select>

          {/* company number */}
          {input?.corporation === ORGANIZER.CORPORATION && (
            <Input
              name='companyNumber'
              placeholder='Company number'
              value={input}
              onChange={handleChange}
              title='Company Number'
              errorMessage={error?.companyNumber}
            />
          )}
        </div>

        {/* button group */}
        <div className=' mx-auto flex flex-col justify-center text-center gap-[1rem] space-between w-full'>
          <button
            type='submit'
            className='btn bg-primary h-12 text-white text-[1rem] '
          >
            Create Account
          </button>

          <div className='text-[1rem]'>
            <span>Already Have An Account ?</span>
            <Link to='/login'>
              <span className='text-green-700'> Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
