import { useCallback, useState } from "react"
import flechaImg from '../assets/flecha.png'


export default function Card({titleCard, textCard, img,ventajaTitle}){

    const [isOpen, setIsOpen] = useState(false);
 
    return(
        <>
        <div className="container-ventaja" onClick={() => setIsOpen(!isOpen)}>
            <div className="logo-ventaja">
                           <picture><img src={img}  loading="lazy" alt="Running img" /></picture> 
                        </div>

                        <div className="text-ventajas">
                            <p>{ventajaTitle}</p>
                        </div>

                        <div className="container-flecha">
                            <picture><img src={flechaImg} loading="lazy" alt="imagen flecha" /></picture> 
                        </div>

                {
                    isOpen && (
                        <div className="container-card">
                            <h2>{titleCard}</h2>
                            <hr />
                            <div className="container-desc-card">
                                <p>{textCard}</p>
                            </div>
                        </div>
                    )
                }
            </div>
           
        </>



    )

}