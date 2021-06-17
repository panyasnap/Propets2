import React, {useContext} from 'react';
import Modal from 'react-modal';
import {UseContext} from "../../utils/Context";
import ModalInput from "../ModalInput";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const ModalWindow = () => {
    const {closeModal, modalIsOpen} = useContext(UseContext)

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example ModalInput"
            >
                <ModalInput/>
            </Modal>
        </div>
    );
};

export default ModalWindow;