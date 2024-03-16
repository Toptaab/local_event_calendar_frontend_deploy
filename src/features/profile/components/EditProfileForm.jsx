import { useState, useRef, useEffect } from 'react';
import { SelectPicker } from 'rsuite';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Avatar from '../../../global_components/Avatar';
import useProfileContext from '../hook/useProfileContext';
import getProvince from '../../../api/province';
import { authMe } from '../../../api/auth';
import Input from '../../../global_components/Input';
import useAuth from '../../auth/hooks/auth';
import { LineIcon, LinkedIcon } from '../../../icons';
import configaxios from '../../../configs/axios';

function EditProfileForm() {
  const profileImageEl = useRef(null);
  const [profileImage, setProfileImage] = useState();
  const [input, setInput] = useState(null);
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subDistrict, setSubDistrict] = useState(null);
  const [selectPickerProvince, setSelectPickerProvince] = useState(null);
  const [selectPickerDistrict, setSelectPickerDistrict] = useState(null);
  const [selectPickerSubDistrict, setSelectPickerSubDistrict] = useState(null);
  const [oldData, setOldData] = useState(null);
  const [loading, setLoading] = useState(true);
  const allAuthObj = useAuth();
  const navigate = useNavigate();
  const { authUser, setAuthUser } = allAuthObj;
  // =============================== Line api ===========================//
  const [linecode, setLinecode] = useState();
  const [code] = useSearchParams();
  // console.log(code.size > 2);
  if (code.size > 0 && !linecode) {
    console.log('codesss');
    setLinecode(code.get('code'));
  }
  //= ===================================== Line ===================================//
  const lineAccess =
    'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=2003956202&redirect_uri=https://local-event-calendar-frontend.vercel.app/profile/edit&state=12345abcde&scope=profile%20openid&bot_prompt=aggressive';
  const url = 'https://api.line.me/oauth2/v2.1/token';

  const data = {
    grant_type: 'authorization_code',
    client_id: '2003956202',
    client_secret: '8db90c43497495d698fc5cf607ef80c2',
    code: linecode,
    redirect_uri:
      'https://local-event-calendar-frontend.vercel.app/profile/edit',
  };

  const oAuthLine = async () => {
    try {
      setLoading(true);
      const lineLogin = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(lineLogin.data);
      const res = await configaxios.post('/line/binding', lineLogin.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate('/profile/edit');
      window.location.reload();
    }
  };

  //= ============================================= line api ===============================//

  const fetchProvince = async () => {
    try {
      setLoading(true);
      const responseProvince = await getProvince();
      setProvince(responseProvince?.data);
      // console.log(responseProvince?.data);
      const responseUserInfo = await authMe();
      // console.log(responseUserInfo?.data);
      // setOldData(responseUserInfo?.data);
      setInput({
        ...input,
        userName: responseUserInfo?.data?.userName,
        profileImage: responseUserInfo?.data?.profileImage,
        address: responseUserInfo?.data?.UserAddress?.address,
      });
      setSelectPickerProvince(responseUserInfo?.data?.UserAddress?.provinceId);
      setSelectPickerDistrict(responseUserInfo?.data?.UserAddress?.districtId);
      setSelectPickerSubDistrict(
        responseUserInfo?.data?.UserAddress?.subDistrictId
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (!district && province && selectPickerProvince) {
    setDistrict(
      province?.find((value) => value.id === selectPickerProvince).Districts
    );
  }

  if (!subDistrict && district && selectPickerDistrict) {
    setSubDistrict([]);

    setSubDistrict(
      district?.find((value) => value.id === selectPickerDistrict).SubDistricts
    );
  }

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    if (linecode) {
      oAuthLine();
    }
  }, [linecode]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSelectPicker = (value, item, event) => {
    setInput({ ...input, [item.name]: value });
    if (item.name === 'provinceId') {
      setDistrict(province[item.index].Districts);
      setSelectPickerDistrict([]);
      setSelectPickerSubDistrict([]);
      setSubDistrict([]);
      setInput((prev) => {
        delete prev.districtId;

        return prev;
      });
    }

    if (item.name === 'districtId') {
      setSubDistrict(district[item.index].SubDistricts);
      setSelectPickerSubDistrict([]);
    }
  };

  let districtData;
  let subDistrictData;
  const provinceData = province?.map((provinces, index) => ({
    label: provinces.provinceNameEn,
    value: provinces.id,
    name: 'provinceId',
    index,
  }));

  if (district) {
    districtData = district?.map((districts, index) => ({
      label: districts?.districtNameEn,
      value: districts?.id,
      name: 'districtId',
      index,
    }));
  }

  if (subDistrict) {
    subDistrictData = subDistrict?.map((subDistricts, index) => ({
      label: subDistricts?.subdistrictNameEn,
      value: subDistricts?.id,
      name: 'subDistrictId',
      index,
    }));
  }

  // const handleSubmitEdit = (e) => {
  //   try {
  //     e.preventDefault();

  //     if (!input.userName || input.userName.trim() === '') {
  //       return toast.error('please fill your username');
  //     }
  //     const formData = new FormData();
  //     const propertiesToAppend = [
  //       'userName',
  //       'provinceId',
  //       'districtId',
  //       'subDistrictId',
  //         'address',
  //     ];

  //     propertiesToAppend.forEach((property) => {
  //       if (input?.[property]) {
  //         formData.append(property, input[property]);
  //       }
  //     });

  //     if (profileImage) {
  //       formData.append('profileImage', profileImage);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // console.log(input);
  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }
  return (
    <div className='w-full flex flex-col gap-4 justify-start items-center h-full'>
      <form className='border-2 rounded-lg w-full flex flex-col p-3 gap-4'>
        <div className='p-3 border-b-2 w-full font-semibold'>
          Edit your profile
        </div>
        <input
          type='file'
          ref={profileImageEl}
          className='hidden'
          onChange={(e) => {
            if (e.target.files[0]) {
              setProfileImage(e.target.files[0]);
            }
          }}
        />
        <div className='self-center'>
          <button
            type='button'
            onClick={() => profileImageEl.current.click()}
            aria-label='Save'
          >
            <Avatar
              src={
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : input?.profileImage
              }
            />
          </button>
        </div>
        <div className='w-full'>
          <Input
            title='Username'
            name='userName'
            value={input}
            onChange={handleChangeInput}
          />
        </div>

        {authUser?.role === 'ORGANIZER' ? (
          <div className='flex flex-col gap-4'>
            <div className='w-full'>
              <span className='text-[0.8rem] py-3'>Province</span>
              <SelectPicker
                block
                placeholder='province'
                data={provinceData}
                value={selectPickerProvince}
                onChange={setSelectPickerProvince}
                onSelect={handleSelectPicker}
              />
            </div>
            <div className='w-full'>
              <span className='text-[0.8rem]'>District</span>
              <SelectPicker
                block
                placeholder='district'
                data={districtData}
                value={selectPickerDistrict}
                onChange={setSelectPickerDistrict}
                onSelect={handleSelectPicker}
              />
            </div>
            <div className='w-full'>
              <span className='text-[0.8rem]'>Sub-District</span>
              <SelectPicker
                block
                placeholder='sub-district'
                data={subDistrictData}
                value={selectPickerSubDistrict}
                onChange={setSelectPickerSubDistrict}
                onSelect={handleSelectPicker}
              />
            </div>
            <div className='flex flex-col'>
              <span className='text-[0.8rem]'>Address</span>
              <textarea
                placeholder='address'
                className='textarea textarea-bordered textarea-lg w-full  text-[0.75rem]'
                name='address'
                value={input?.address}
                onChange={handleChangeInput}
              />
            </div>
          </div>
        ) : null}

        <div className='flex gap-3 justify-end'>
          <button
            type='button'
            className='btn '
            onClick={() => navigate('/profile')}
          >
            cancel
          </button>
          <button
            type='submit'
            className='btn text-white bg-primary hover:bg-blue-900'
          >
            save
          </button>
        </div>
      </form>
      <div className='p-3 w-full '>
        {authUser?.lineToken ? (
          <div className='flex w-full justify-center'>
            <div className='flex items-center gap-2 text-[0.8rem] font-semibold text-green-500 border border-green-500 p-2 rounded-full'>
              Account Line Linked{' '}
              <span>
                <LinkedIcon />
              </span>
            </div>
          </div>
        ) : (
          <a href={lineAccess}>
            <button
              className='flex justify-center items-center gap-3 border p-3 rounded-lg w-full bg-[#00B900] font-bold text-white'
              type='button'
              aria-label='Save'
            >
              Binding Line{' '}
              <span>
                <LineIcon />
              </span>
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default EditProfileForm;
