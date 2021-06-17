import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Info from "./Info";
import Footer from "./Footer";
import {UseContext} from "../../utils/Context";
import ModalWindow from "./ModalWindow";

const Index = () => {

    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <UseContext.Provider value={{modalIsOpen, openModal, closeModal}}>
                <ModalWindow/>
            <Header/>
            <Main/>
            <Info/>
            <Footer/>
            </UseContext.Provider>
        </div>
    );
};

export default Index;
