import { SelectPicker } from 'rsuite';
import 'rsuite/SelectPicker/styles/index.css';
import { useState } from 'react';
import Button from '../../../global_components/Button';
import ToggleOnButton from '../../../global_components/ToggleOnButton';
import Input from '../../../global_components/Input';
import { SearchIcon } from '../../../icons';
import EventCardGanX from '../../../global_components/EventCardGanX';
import useExploreContext from '../hooks/useExploreContext';
import { FACILITY_LIST } from '../../../constance';

export default function ExploreContainer() {
  const {
    input,
    setInput,
    open,
    setOpen,
    category,
    province,
    handleCheckbox,
    handleOnChange,
    handleOnSubmit,
    events,
    loading,
  } = useExploreContext();

  const categoryData = category?.map((el, index) => ({
    label: el.name,
    value: el.id,
    name: 'categoryId',
  }));

  const provinceData = province?.map((el, index) => ({
    label: el.provinceNameEn,
    value: el.id,
    name: 'provinceId',
  }));

  const facilityData = Object.entries(FACILITY_LIST).map((el, index) => ({
    label: el[1],
    value: el[0],
    name: el[0],
    key: index,
  }));

  // select picker state
  const [selectCategory, setSelectCategory] = useState();
  const [selectProvince, setSelectProvince] = useState();

  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }

  return (
    <div className='p-[1rem] flex flex-col gap-2'>
      {open && (
        <button
          type='button'
          onClick={() => {
            setOpen(false);
            setInput({});
          }}
          className='rounded-full self-end'
        >
          x
        </button>
      )}

      {/* search event form */}
      <form onSubmit={handleOnSubmit}>
        <Input
          border='border-b-2'
          title='Search here'
          onClick={() => setOpen(true)}
          onChange={handleOnChange}
          name='title'
          value={input}
        >
          <SearchIcon className='w-[1rem] h-[1.5rem]' />
        </Input>
        {open ? (
          <div className='flex flex-col gap-2'>
            {/* search by category */}
            <div className='w-full'>
              <p className='font-semibold p-2'>Category</p>
              <SelectPicker
                block
                data={categoryData}
                onSelect={(value) => {
                  setInput({ ...input, categoryId: value });
                }}
                value={selectCategory}
                onChange={setSelectCategory}
              />
            </div>

            {/* search by province */}
            <div className='w-full '>
              <p className='font-semibold p-2'>Destination</p>
              <SelectPicker
                block
                data={provinceData}
                onSelect={(value) => {
                  setInput({ ...input, provinceId: value });
                }}
                value={selectProvince}
                onChange={setSelectProvince}
              />
            </div>

            {/* facility checklist */}
            <div className='py-[2rem]'>
              <div className='flex flex-col gap-4 '>
                <span className='font-semibold'>Facility</span>
                <ToggleOnButton
                  forMap={facilityData}
                  onChange={handleCheckbox}
                  input={input}
                />
              </div>
            </div>

            {/* button group */}
            <div className='flex justify-end items-center gap-4'>
              <button
                className='hover:underline cursor-pointer'
                type='button'
                onClick={() => {
                  setInput({});
                  setSelectCategory([]);
                  setSelectProvince([]);
                }}
              >
                Clear
              </button>
              <div className='w-[5rem]'>
                <Button type='submit'>Search</Button>
              </div>
            </div>
          </div>
        ) : null}
      </form>

      {/* render searched event */}
      <div className='flex flex-col gap-2 py-[1rem]'>
        {events?.map((event) => (
          <EventCardGanX event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
