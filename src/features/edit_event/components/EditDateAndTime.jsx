import InputDate from '../../../global_components/InputDate';

export default function EditDateAndTime({
  handleChange,
  handleTime,
  input,
  tempPeriodTime,
  initData,
  time,
}) {
  return (
    <div>
      <div className='flex justify-between w-full '>
        <InputDate
          name='startDate'
          title='Start Date'
          onChange={handleChange}
          // value={input?.startDate || }
          initData={initData.startDate.substring(0, 10)}
        />
        <div className='text-end '>
          <InputDate
            name='endDate'
            title='End Date'
            onChange={handleChange}
            // value={input?.endDate }
            initData={initData.endDate.substring(0, 10)}
          />
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='font-semibold w-full'>
          <InputDate
            name='startTime'
            title='Start Time'
            type='time'
            value={time.startTime || tempPeriodTime[0]}
            onChange={handleTime}
          />
        </div>

        <div className='font-semibold w-full text-end'>
          <InputDate
            name='endTime'
            title='End Time'
            type='time'
            value={time.endTime || tempPeriodTime[1]}
            onChange={handleTime}
          />
        </div>
      </div>
    </div>
  );
}
