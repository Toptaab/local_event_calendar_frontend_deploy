import { useState, useRef, React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MapContainer } from 'react-leaflet';
import Input from '../../../global_components/Input';
import Button from '../../../global_components/Button';
import FacilityCheckbox from './FacilityCheckbox';
import EditOption from './EditOption';
import useEditEvent from '../hooks/useEditEvent';
import EditInput from './EditInput';
import EditDateAndTime from './EditDateAndTime';
import { updateEvent } from '../../../api/event';
import { validateEditEvent } from '../validation/validate-edit-event';
import EditeventMap from './EditeventMap';

export default function EditEventContainer() {
  const { province, category, event, loading, setLoading, eventId } =
    useEditEvent();

  const [district, setDistrict] = useState(null);
  const [subDistrict, setSubDistrict] = useState(null);
  const [coverImage, setCoverImage] = useState();
  const [time, setTime] = useState(null);
  const [input, setInput] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const fileEl = useRef();

  // console.log(event);
  // console.log(subDistrict);
  const BkkLatLon = [13.756329334391024, 100.50176927408629];
  // ========================= map value ========================= //

  if (!district && !loading) {
    setDistrict(
      province?.find((value) => value.id === event?.EventAddress.provinceId)
        .Districts
    );
  }
  if (!subDistrict && district) {
    setSubDistrict(
      district?.find((value) => value.id === event?.EventAddress?.districtId)
        .SubDistricts
    );
  }

  //= =========================== Select Picker data =======================//
  let districtData = [];
  let subDistrictData = [];

  const provinceData = province?.map((provinces, index) => ({
    label: provinces.provinceNameEn,
    value: provinces.id,
    name: 'provinceId',
    index,
  }));

  if (district?.length > 1) {
    districtData = district?.map((districts, index) => ({
      label: districts?.districtNameEn,
      value: districts?.id,
      name: 'districtId',
      index,
    }));
  }

  if (subDistrict?.length > 1) {
    subDistrictData = subDistrict?.map((subDistricts, index) => ({
      label: subDistricts?.subdistrictNameEn,
      value: subDistricts?.id,
      name: 'subDistrictId',
      index,
    }));
  }

  const categoryData = category?.map((categories) => ({
    label: categories?.name,
    value: categories?.id,
    name: 'categoryId',
  }));

  /// ========================== Handle ============================== ///
  // =========================== Handle change ==========================//

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleDate = (e) => {
    setInput({
      ...input,
      [e.target.name]: new Date(e.target.value).toISOString(),
    });
    console.log(new Date(e.target.value).toISOString());
  };

  const handleSelectPicker = (value, item) => {
    setInput({ ...input, [item.name]: value });
    if (item.name === 'provinceId') {
      setDistrict(province[item.index].Districts);
      setSubDistrict([]);
      setInput((prev) => {
        delete prev.districtId;
        delete prev.subDistrictId;
        return prev;
      });
    }

    if (item.name === 'districtId') {
      setSubDistrict(district[item.index].SubDistricts);
    }
  };

  // =========================== Handle CheckBox ==========================//
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: true });
    } else {
      setInput({ ...input, [e.target.name]: false });
    }
  };

  // =========================== Handle coverImage ==========================//
  const handleUploadCover = (e) => {
    setInput({ ...input, [[e.target.name]]: e.target.files[0] });
    setCoverImage(e.target.files[0]);
  };

  /// ========================== setTime ============================== ///

  let tempPeriodTime;
  if (event) {
    tempPeriodTime = event?.timePeriod?.split('-');
    if (!time) {
      setTime({ startTime: tempPeriodTime[0], endTime: tempPeriodTime[1] });
    }
  }

  // =========================== Handle time ==========================//
  let craetetimePeriod;
  const handleTime = (e) => {
    if (e.target.name === 'startTime') {
      setTime({ ...time, [e.target.name]: e.target.value });
      craetetimePeriod = `${e.target.value}-${time.endTime}`;
    }
    if (e.target.name === 'endTime') {
      setTime({ ...time, [e.target.name]: e.target.value });
      craetetimePeriod = `${time.startTime}-${e.target.value}`;
    }
    setInput({ ...input, timePeriod: craetetimePeriod });
  };

  // =========================== Handle Summit ==========================//
  const handleformSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const validateError = validateEditEvent(input);
      if (Object.keys(validateError).length > 0) {
        setError(validateError);
      }
      const formData = new FormData();
      Object.keys(input).forEach((key) => formData.append(key, input[key]));
      console.log(...formData);
      await updateEvent(eventId, formData);
      toast.success('edit successfully');
      navigate(`/event/${eventId}`);
    } catch (err) {
      console.log(err);
      setInput(null);
    } finally {
      setLoading(false);
    }
  };

  // ========================== Loading Spinner =====================//
  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        loading...
      </div>
    );
  }

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <div className=' mx-auto flex flex-col  gap-[1rem] w-full py-[2rem] px-[2rem]'>
          <div className='text-[1.75rem] font-semibold text-center pb-3'>
            Edit
          </div>
          <span className='text-[1.2rem] font-medium'>Cover Image</span>

          {/*  ============================= cover Image start ======================== */}
          <div className=' flex justify-center items-center'>
            <img
              className='object-cover w-full h-[34vh] rounded-lg'
              src={
                coverImage ? URL.createObjectURL(coverImage) : event?.coverImage
              }
              alt='cover pic'
            />
          </div>
          <div className='flex flex-row justify-end'>
            <div className='md:w-[18%] sm:[30%]'>
              <input
                name='coverImage'
                type='file'
                multiple
                ref={fileEl}
                className='hidden'
                onChange={handleUploadCover}
              />
            </div>
            <Button onClick={() => fileEl.current.click()}>Upload </Button>
          </div>
          {/*  ============================= cover Image end ======================== */}

          {/*  ============================= Input start ======================== */}
          <Input
            name='title'
            placeholder='Title'
            value={input?.title !== undefined ? input : event}
            onChange={handleChange}
            title='Title'
          />
          {/* ================================ description ======================= */}
          <div>
            <p className='font-semibold pl-2 pb-2 text-[1rem]'>Description</p>
            <textarea
              placeholder='Description'
              className='textarea textarea-bordered textarea-md w-full'
              name='description'
              value={
                input?.description !== undefined
                  ? input?.description
                  : event?.description
              }
              onChange={handleChange}
            />
          </div>
          {/* /////////////////// date and time /////////// */}
          <EditDateAndTime
            handleChange={handleDate}
            handleTime={handleTime}
            input={input}
            initData={event}
            tempPeriodTime={tempPeriodTime}
            time={time}
          />
          {/* ============================== Yearly ============================== */}
          <div className='flex gap-[0.5rem] p-2 border rounded-lg'>
            <span className='font-medium'>Yearly</span>
            <input
              type='checkbox'
              name='isYearly'
              value={input?.isYearly || event.isYearly}
              onChange={handleCheckbox}
            />
          </div>
          {/* ============================== info contact ============================ */}
          <EditInput onChange={handleChange} input={input} initData={event} />
          {/* ============================== province district subdistrict =========================  */}
          <EditOption
            data={{
              provinceData,
              districtData,
              subDistrictData,
              categoryData,
              event,
            }}
            onSelect={handleSelectPicker}
            input={input}
          />

          <FacilityCheckbox
            onChange={handleCheckbox}
            input={input}
            initData={event}
          />
        </div>
        <MapContainer
          center={BkkLatLon}
          zoom={9}
          style={{ height: '300px', zIndex: '0' }}
        >
          <EditeventMap
            error={error}
            setInput={setInput}
            input={input}
            event={event}
          />
          {/* =========================== <EventMap /> ====================================== */}
        </MapContainer>
        {error?.lat && (
          <small className='text-red-500 pl-[0.5rem] flex  w-full'>
            {error.lat}
          </small>
        )}
      </div>

      <div className=' mx-auto flex flex-col justify-center text- gap-[1.5rem] space-between w-fit p-[1.5rem] '>
        <Button type='submit'>Save Edit</Button>
      </div>
    </form>
  );
}
