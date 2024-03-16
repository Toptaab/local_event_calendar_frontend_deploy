import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonToolbar, Modal } from 'rsuite';
import 'rsuite/Modal/styles/index.css';

function GlobalModal({ children, title, body, onDel }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = async () => {
    await onDel();
    setOpen(false);
    navigate('/profile');
  };
  return (
    <>
      <ButtonToolbar>
        <button type='button' aria-label='Save' onClick={handleOpen}>
          {children}
        </button>
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDelete} appearance='primary'>
            Ok
          </Button>
          <Button onClick={handleClose} appearance='subtle'>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GlobalModal;
