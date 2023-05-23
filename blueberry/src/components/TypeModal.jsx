import { useState } from "react";
import close from '../assets/close.svg'
export default function TypeModal({ selectedType, setOpenModal, isOpenModal, animarModal, setAnimar }) {

    function handleModal() {

        if (isOpenModal) {
            setAnimar(false);
            setTimeout(() => {
                setOpenModal(false);
            }, 1000);
        }


    }


    return (

        <div className={`modal-type ${animarModal ? "animar" : 'cerrar'}`} onClick={() => { handleModal() }} >

            <div className="container-x" onClick={()=>{setOpenModal(!isOpenModal)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
            <div className="container-datamodal" >
                <div className="title-img-datamodal">
                    <div className="title-datamodal">
                        <h2>{selectedType.type_name}</h2>
                    </div>
                    <div className="img-datamodal">
                        <picture><img src={selectedType.img} alt="imagen tipo" loading="lazy" /></picture>
                    </div>
                </div>
                <div className="text-datamodal">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias recusandae repudiandae voluptatibus deleniti hic labore doloribus unde voluptas praesentium rem assumenda amet, facilis, corrupti, quidem atque quod nostrum. Consequuntur.</p>
                </div>
            </div>
        </div>
    )

}