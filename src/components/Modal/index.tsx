import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalComponent = ({ setModal }: Props) => {
  return (
    <Modal
      open
      onClose={() => setModal(false)}
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <h2>Text in a modal</h2>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </Box>
    </Modal>
  );
}

export default ModalComponent;