import { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';

function App() {
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <div className="App">
      <h1>Click on the below button to open modal</h1>
      <button className="openModalBtn" onClick={() => {
        setOpenModal(true);
      }}>Open</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
