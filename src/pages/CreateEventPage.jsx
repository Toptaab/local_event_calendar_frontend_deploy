import CreateEventContainer from '../features/create_event/components/CreateEventContainer';
import { CreateEventContextProvider } from '../features/create_event/context/CreateEventContext';

export default function CreateEventPage() {
  return (
    <div className='w-dvw'>
      <CreateEventContextProvider>
        <CreateEventContainer />
      </CreateEventContextProvider>
    </div>
  );
}
