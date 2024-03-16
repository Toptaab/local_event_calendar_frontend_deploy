import { useState, useEffect } from 'react';
import { SelectPicker } from 'rsuite';
import { useParams } from 'react-router-dom';
import { getCalendarEvent } from '../../../api/event';
import getProvince from '../../../api/province';
import EventCalendar from './EventCalendar';
import EventList from './EventList';

function CalendarContainer() {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [province, setProvince] = useState([]);
  const [search, setSearch] = useState(null);
  const [tempEvents, setTempEvents] = useState(null);
  const [currentProvince, setCurrentProvince] = useState(null);
  const { seasonId } = useParams();

  const init = new Date();
  if (seasonId) {
    init.setMonth(seasonId - 1);
  }

  if (!tempEvents && events) {
    setTempEvents([...events]);
  }

  const fetchProvinceData = async () => {
    try {
      const getProvinces = await getProvince();
      setProvince(getProvinces.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    // Filter by province if selected
    if (search?.provinceId) {
      const filterEvent = [...tempEvents].filter(
        (event) => event.EventAddress.provinceId === search.provinceId
      );
      setEvents(filterEvent);
    }
  };

  const handleClear = () => {
    setEvents([...tempEvents]);
    setCurrentProvince(null);
  };

  const provinceData = province?.map((provinces, index) => ({
    label: provinces.provinceNameEn,
    value: provinces.id,
    name: 'provinceId',
    index,
  }));

  const fetchCalendarEvent = async (input) => {
    try {
      setLoading(true);
      const getEvent = await getCalendarEvent(input);
      setEvents(getEvent.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // calendar handling state
  const [focusDate, setFocusDate] = useState(init);

  const generateCalendarDates = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const numDaysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const calendarDates = [];

    // Fill in the previous month's days if necessary
    for (let i = 0; i < startingDayOfWeek; i += 1) {
      const prevMonthDate = new Date(
        year,
        month,
        -startingDayOfWeek + i + 1,
        7
      );
      calendarDates.push(prevMonthDate);
    }

    // Fill in the current month's days
    for (let i = 1; i <= numDaysInMonth; i += 1) {
      const currentDate = new Date(year, month, i, 7);
      calendarDates.push(currentDate);
    }

    // Fill in the next month's days if necessary
    const totalDays = 42; // Total cells in a typical 6-week calendar view
    const remainingDays = totalDays - calendarDates.length;
    for (let i = 1; i <= remainingDays; i += 1) {
      const nextMonthDate = new Date(year, month + 1, i, 7);
      calendarDates.push(nextMonthDate);
    }

    // console.log('firstDay', calendarDates[0].toISOString());
    // console.log('lastDay', calendarDates[41].toISOString());

    fetchCalendarEvent({
      firstDay: calendarDates[0].toISOString(),
      lastDay: calendarDates[41].toISOString(),
    });
  };

  useEffect(() => {
    fetchProvinceData();
    generateCalendarDates(focusDate.getFullYear(), focusDate.getMonth());

    window.scrollTo(0, 0);
  }, [focusDate]);

  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }

  return (
    <div className='p-4'>
      {/* search form */}
      <div className='flex flex-col'>
        {/* search from province */}
        <div className='flex flex-col gap-3 py-4'>
          <span className='font-semibold '>Select province</span>
          <SelectPicker
            value={currentProvince}
            onChange={setCurrentProvince}
            data={provinceData}
            onSelect={(value) => setSearch({ ...search, provinceId: value })}
            block
          />

          <EventCalendar
            data={events}
            setSearch={setSearch}
            focusDate={focusDate}
            setFocusDate={setFocusDate}
          />
        </div>

        <div className='flex flex-row gap-2 justify-end'>
          <button type='button' className='btn' onClick={handleClear}>
            clear
          </button>
          <button type='button' className='btn' onClick={handleSearch}>
            search
          </button>
        </div>
      </div>
      {/* data */}
      <div className='flex flex-col gap-3 py-4'>
        <EventList currentEvents={events} />
      </div>
    </div>
  );
}

export default CalendarContainer;
