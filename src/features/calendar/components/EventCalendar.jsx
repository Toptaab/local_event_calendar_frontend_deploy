import 'rsuite/Calendar/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import 'rsuite/Popover/styles/index.css';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';

function EventCalendar({ data, setSearch, focusDate, setFocusDate }) {
  const handleCellClick = (day) => {
    const newDate = new Date(day);
    newDate.setUTCHours(0, 0, 0, 0);
    const isoDate = newDate.toISOString();
    setSearch({ date: isoDate });
  };

  const getEventList = (date) => {
    const newDate = new Date(date);
    newDate.setUTCHours(0, 0, 0, 0);
    const isoDate = newDate.toISOString();

    if (data) {
      return data.filter((value) => value?.startDate === isoDate);
    }
    return [];
  };

  const renderCell = (date) => {
    const list = getEventList(date);

    return (
      <button
        className='w-full h-full'
        type='button'
        aria-label='Save'
        onClick={() => handleCellClick(date)}
      >
        {list.length > 0 && (
          <Whisper
            placement='right'
            trigger='click'
            speaker={
              <Popover>
                {list.map((item) => (
                  <li className='list-none' key={item.id}>
                    <div>
                      <Badge /> {item.title} {item.timePeriod}
                    </div>
                  </li>
                ))}
              </Popover>
            }
          >
            <ul className='calendar-todo-list h-full'>
              <div className='w-full h-full flex justify-center items-center'>
                <Badge />
              </div>
            </ul>
          </Whisper>
        )}
      </button>
    );
  };

  // console.log(focusDate);
  return (
    <div>
      <Calendar
        bordered
        renderCell={renderCell}
        value={focusDate}
        onChange={setFocusDate}
      />
    </div>
  );
}

export default EventCalendar;
