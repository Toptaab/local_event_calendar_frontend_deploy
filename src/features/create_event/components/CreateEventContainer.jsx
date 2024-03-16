import { MapContainer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Input from '../../../global_components/Input';
import { FACILITY_LIST } from '../../../constance/index';
import EventMap from './EventMap';
import useCreateEvent from '../hook/useCreateEvent';
import CreateEventDropdown from './CreateEventDropdown';
import CreateEventTextInput from './CreateEventTextInput';
import CreateEventDateTime from './CreateEventDateTime';
import CreateEventImages from './CreateEventImages';
import Button from '../../../global_components/Button';

export default function CreateEventContainer() {
  const nevigate = useNavigate();
  const { CreateEventContextObject, CreateEventImageObject } = useCreateEvent();
  const {
    input,
    image,
    handleChange,
    handleCheckbox,
    handleformSubmit,
    error,
    loading,
  } = CreateEventContextObject;
  const { tempImage } = CreateEventImageObject;

  const BkkLatLon = [13.756329334391024, 100.50176927408629];
  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        loading...
      </div>
    );
  }

  const handleCancelEdit = () => {
    nevigate(-1);
  };

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <div className=' mx-auto flex flex-col  gap-[1rem] w-full py-[2rem] px-[2rem]'>
          <div className='text-[1.75rem] font-semibold text-center pb-3'>
            Create An Event
          </div>

          <CreateEventImages tempImage={tempImage} />

          {/* Title input */}
          <Input
            name='title'
            placeholder='Title'
            value={input}
            onChange={handleChange}
            title='Title'
            errorMessage={error.title}
          />

          {/* Description text area */}
          <div>
            <p className='font-semibold pl-2 pb-2 text-[1rem]'>Description</p>
            <textarea
              placeholder='Description'
              className='textarea textarea-bordered leading-6 textarea-md w-full h-[8rem] text-[0.9rem]'
              name='description'
              value={input?.description}
              onChange={handleChange}
            />
          </div>

          <CreateEventDateTime />

          {/* Yearly checkbox */}
          <div className='flex flex-row gap-[0.5rem]'>
            <Input
              type='checkbox'
              title=''
              name='isYearly'
              onChange={handleCheckbox}
            >
              yearly
            </Input>
          </div>

          <CreateEventTextInput />

          <CreateEventDropdown />

          {/* select facility */}
          <div className='grid grid-cols-2  gap-[0.25rem] font-medium w-full'>
            {Object.entries(FACILITY_LIST).map((el) => (
              <div className='flex flex-row gap-[0.5rem]' key={el[0]}>
                <input
                  type='checkbox'
                  name={el[0]}
                  value={el[0]}
                  onChange={handleCheckbox}
                />
                <div className='font-semibold'>{el[1]}</div>
              </div>
            ))}
          </div>

          {/* Map & LatLong selector */}
          <MapContainer
            center={BkkLatLon}
            zoom={9}
            style={{ height: '300px', zIndex: '0' }}
          >
            <EventMap />
          </MapContainer>
          {error?.lat && (
            <small className='text-red-500 pl-[0.5rem] flex  w-full'>
              {error.lat}
            </small>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className=' mx-auto flex flex-col justify-center text-center gap-[1.5rem] space-between w-fit p-[1.5rem] '>
        <button
          type='submit'
          className='btn bg-primary h-12 text-white text-[1rem] '
        >
          Create Event
        </button>
        <Button onClick={handleCancelEdit}>cancel</Button>
      </div>
    </form>
  );
}
