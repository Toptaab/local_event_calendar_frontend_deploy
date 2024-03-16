import React from 'react';
import { SelectPicker } from 'rsuite';

export default function EditOption({ data, onSelect, input }) {
  const { provinceData, districtData, subDistrictData, categoryData, event } =
    data;

  return (
    <>
      <div className='w-full '>
        <span className='font-semibold p-1'>Province</span>
        <SelectPicker
          block
          placeholder='Select Province'
          data={provinceData}
          onSelect={onSelect}
          value={input?.provinceId || event.EventAddress.provinceId}
        />
      </div>

      <div className='w-full'>
        <span className='font-semibold p-1'>District</span>
        <SelectPicker
          block
          data={districtData}
          onSelect={onSelect}
          value={input?.districtId || event.EventAddress.districtId}
        />
      </div>

      <div className='w-full'>
        <span className='font-semibold p-1'>Subdistrict</span>
        <SelectPicker
          block
          data={subDistrictData}
          onSelect={onSelect}
          value={input?.subDistrictId || event.EventAddress.subDistrictId}
        />
      </div>

      <div className='w-full'>
        <span className='font-semibold p-1'>Category Event</span>
        <SelectPicker
          block
          data={categoryData}
          onSelect={onSelect}
          value={input?.categoryId || event.categoryId}
          // onChange={setSelectCategory}
        />
      </div>
    </>
  );
}
