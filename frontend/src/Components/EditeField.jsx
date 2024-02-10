 


import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function EditeField() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Edite</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edite Your Content</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Enter Your Text" />
              </div>
              <TextInput
                id="text"
                placeholder="Enter Your Text"
                value={Text}
                onChange={(event) => setEmail(event.target.value)}
                
              />
            </div>
             
          
            <div className="w-full">
              <Button>Add</Button>
            </div>
             
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default EditeField;