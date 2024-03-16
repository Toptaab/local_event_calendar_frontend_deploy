import { FACILITY_LIST } from '../../../constance';

export default function FacilityCheckbox({ input, onChange, initData }) {
  return (
    <div className='grid grid-cols-2  gap-[0.5rem] font-medium w-full'>
      {Object.entries(FACILITY_LIST).map((el) => (
        <div className='flex flex-row gap-[0.5rem]' key={el[0]}>
          <input
            // id={el[0]}
            type='checkbox'
            name={el[0]}
            value={el[0]}
            // checked={input ? input[el[0]] : initData.EventFacility[el[0]]}
            onChange={onChange}
            defaultChecked={initData.EventFacility[el[0]]}
          />
          <div className='font-semibold'>{el[1]}</div>
        </div>
      ))}
    </div>
  );
}
