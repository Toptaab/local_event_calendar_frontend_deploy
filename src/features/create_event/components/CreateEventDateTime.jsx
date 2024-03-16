import InputDate from '../../../global_components/InputDate';
import useCreateEvent from '../hook/useCreateEvent';

function CreateEventDateTime() {
  const { CreateEventContextObject } = useCreateEvent();

  const { handleDate, handleTime, error } = CreateEventContextObject;

  return (
    <div className='flex flex-col  gap-[1rem] w-full'>
      {/* Date Input */}
      <div className='flex flex-row justify-between  '>
        <div className='flex flex-col font-medium'>
          <InputDate
            name='startDate'
            title='Start Date'
            onChange={handleDate}
          />
          {error?.startDate && (
            <small className='text-red-500 pl-[0.5rem] flex  w-full'>
              {error.startDate}
            </small>
          )}
        </div>
        <div className='text-end flex flex-col items-end font-medium'>
          <InputDate name='endDate' title='End Date' onChange={handleDate} />
          {error?.endDate && (
            <small className='text-red-500 ps-[1.5rem] flex  w-full'>
              {error.endDate}
            </small>
          )}
        </div>
      </div>

      {/* Time input */}
      <div className='flex flex-row justify-between'>
        <div className='font-medium min-w-[9rem]'>
          <InputDate
            name='startTime'
            title='Start Time'
            type='time'
            onChange={handleTime}
          />
        </div>

        <div className='font-medium min-w-[9rem] text-end'>
          <InputDate
            name='endTime'
            title='End Time'
            type='time'
            onChange={handleTime}
          />
        </div>
      </div>
      {error?.timePeriod && (
        <small className='text-red-500 ps-[1.5rem] flex  w-full'>
          {error.timePeriod}
        </small>
      )}
    </div>
  );
}

export default CreateEventDateTime;
