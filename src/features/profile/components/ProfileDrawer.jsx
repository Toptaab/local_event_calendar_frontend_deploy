import { useState, useMemo } from 'react';
// import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
import 'rsuite/Drawer/styles/index.css';
import 'rsuite/Animation/styles/index.css';

import {
  Drawer,
  RadioGroup,
  Radio,
  ButtonToolbar,
  Button,
  IconButton,
  Placeholder,
  Animation,
} from 'rsuite';
import useProfileContext from '../hook/useProfileContext';

function ProfileDrawer({ children, props }) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [placement, setPlacement] = useState('right');

  // const ProfileContextObject = useProfileContext();
  console.log(props, '++++++++++++++++++++');

  return (
    <>
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>{children}</Button>
      </ButtonToolbar>
      <Animation.Slide in={show} placement={placement}>
        <Drawer size='20rem' open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <Drawer.Title>
              <div className='font-bold'>Reminded Events</div>
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <div className='flex flex-col gap-3'>{props}</div>
          </Drawer.Body>
        </Drawer>
      </Animation.Slide>
    </>
  );
}

export default ProfileDrawer;
