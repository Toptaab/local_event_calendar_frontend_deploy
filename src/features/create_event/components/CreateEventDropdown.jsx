import { SelectPicker } from 'rsuite';
import useCreateEvent from '../hook/useCreateEvent';

function CreateEventDropdown() {
  const { CreateEventContextObject } = useCreateEvent();

  const {
    province,
    district,
    subDistrict,
    category,
    handleSelectPicker,
    error,
  } = CreateEventContextObject;

  // ------------------------------map-----------------------------

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

  const categoryData = category?.map((catagories) => ({
    label: catagories?.name,
    value: catagories?.id,
    name: 'categoryId',
  }));

  return (
    <div className='flex flex-col  gap-[1rem] w-full'>
      {/* Address dropdown */}
      <div className='flex flex-col  gap-[1rem] w-full'>
        <div className='w-full '>
          <span className='font-semibold p-1'>Province</span>
          <SelectPicker
            block
            placeholder='Select Province'
            data={provinceData}
            onSelect={handleSelectPicker}
          />
          {error?.provinceId && (
            <small className='text-red-500 pl-[0.5rem] flex  w-full'>
              {error.provinceId}
            </small>
          )}
        </div>

        <div className='w-full'>
          <span className='font-semibold p-1'>District</span>
          <SelectPicker
            block
            data={districtData}
            onSelect={handleSelectPicker}
          />
          {error?.districtId && (
            <small className='text-red-500 pl-[0.5rem] flex  w-full'>
              {error.districtId}
            </small>
          )}
        </div>

        <div className='w-full'>
          <span className='font-semibold p-1'>Subdistrict</span>
          <SelectPicker
            block
            data={subDistrictData}
            onSelect={handleSelectPicker}
          />
          {error?.subDistrictId && (
            <small className='text-red-500 pl-[0.5rem] flex  w-full'>
              {error.subDistrictId}
            </small>
          )}
        </div>
      </div>

      {/* Category dropdown */}
      <div className='w-full'>
        <span className='font-semibold p-1'>Category Event</span>
        <SelectPicker block data={categoryData} onSelect={handleSelectPicker} />
      </div>
      {error?.categoryId && (
        <small className='text-red-500 pl-[0.5rem] flex  w-full'>
          {error.categoryId}
        </small>
      )}
    </div>
  );
}

export default CreateEventDropdown;
