import { useState } from "react"

export default function CardMethods({ name, img, description }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="metodo">
                <div className="img-metodo" onClick={() => open == true ? setOpen(false) : setOpen(true)}>
                    <picture><img loading="lazy" src={img} alt="visa" /></picture>
                </div>

                {open && (

                    <>
                        <div className="container-card methods">
                            <h2>{name}</h2>
                            <hr />
                            <div className="container-desc-card">
                                <p>{description}</p>
                            </div>
                        </div>
                    </>


                )}
            </div>



        </>
    )
}