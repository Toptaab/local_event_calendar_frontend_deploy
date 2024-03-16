import Input from '../../../global_components/Input';
import useCreateEvent from '../hook/useCreateEvent';

function CreateEventTextInput() {
  const { CreateEventContextObject } = useCreateEvent();

  const { input, handleChange } = CreateEventContextObject;

  return (
    // Text data input
    <div className='flex flex-col  gap-[1rem] w-full'>
      <Input
        name='website'
        placeholder='Web Site'
        value={input}
        onChange={handleChange}
        title='Web Site'
      />

      <Input
        name='email'
        placeholder='Email'
        value={input}
        onChange={handleChange}
        title='Email'
      />

      <Input
        name='facebook'
        placeholder='Facebook'
        value={input}
        onChange={handleChange}
        title='Facebook'
      />

      <Input
        name='telNumber'
        placeholder='Telephone'
        value={input}
        onChange={handleChange}
        title='Telephone'
      />

      <Input
        name='address'
        placeholder='Address'
        value={input}
        onChange={handleChange}
        title='Address'
      />

      <Input
        name='address2'
        placeholder='Address(optional)'
        value={input}
        onChange={handleChange}
        title='Address(optional)'
      />
    </div>
  );
}

export default CreateEventTextInput;
