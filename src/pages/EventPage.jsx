import EventContainer from '../features/Events/components/EventContainer';
import EventContextProvider from '../features/Events/context/EventContext';

export default function EventPage() {
  return (
    <EventContextProvider>
      <EventContainer />
    </EventContextProvider>
  );
}
