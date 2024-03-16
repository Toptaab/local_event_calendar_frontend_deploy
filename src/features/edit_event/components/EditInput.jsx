import Input from '../../../global_components/Input';

export default function EditInput({ input, onChange, initData }) {
  console.log(initData);
  console.log(input);
  return (
    <div>
      <Input
        name='website'
        placeholder='Web Site'
        value={input?.website ? input : initData}
        onChange={onChange}
        title='Web Site'
      />

      <Input
        name='email'
        placeholder='Email'
        value={input?.email ? input : initData}
        onChange={onChange}
        title='Email'
      />

      <Input
        name='facebook'
        placeholder='Facebook'
        value={input?.facebook ? input : initData}
        onChange={onChange}
        title='Facebook'
      />

      <Input
        name='telNumber'
        placeholder='Telephone'
        value={input?.telNumber ? input : initData}
        onChange={onChange}
        title='Telephone'
      />

      <Input
        name='address'
        placeholder='Address'
        value={input?.address ? input : initData?.EventAddress}
        onChange={onChange}
        title='Address'
      />

      <Input
        name='address2'
        placeholder='Address(optional)'
        value={input?.address2 ? input : initData}
        onChange={onChange}
        title='Address(optional)'
      />
    </div>
  );
}
