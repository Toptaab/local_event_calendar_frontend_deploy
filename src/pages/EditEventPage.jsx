import React from 'react';
import EditEventContainer from '../features/edit_event/components/EditEventContainer';
import EditEventContextProvider from '../features/edit_event/context/EditEventContext';

export default function EditEventPage() {
  return (
    <EditEventContextProvider>
      <div className='w-dvw'>
        <EditEventContainer />;
      </div>
    </EditEventContextProvider>
  );
}
