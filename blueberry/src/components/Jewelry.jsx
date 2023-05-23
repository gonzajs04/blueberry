import {Link} from 'react-scroll';
import runImg from '../assets/run.png';
import diamondImg from '../assets/diamond.png';
import walletImg from '../assets/wallet.png'
import Card from './Card';
import { useState } from 'react';

const CARDS_INFO = [
    {title: 'Fastest than everyone', description: 'On the line of perfection we can make your dreams come true on a shortly time. Enjoy your product in less than 3 days', img: runImg,ventajaTitle: 'The Fastest to send and process'},
    {title: 'The most economics jewelry', description: 'On the line of perfection we can make your dreams come true on a shortly time. Enjoy your perfect product with a bottom price', img: walletImg,ventajaTitle: 'The Most economic Jewelry'},
    {title: 'The most brillant jewelry', description: 'On the line of perfection we can make your dreams come true on a shortly time. Enjoy your perfect product', img: diamondImg,ventajaTitle: 'The Most brillant jewelry'},
    
    
]

export default function Jewerly() {

    const [modalVentajas,setVentajas] = useState(false) //MODAL PARA ABRIR VENTAJAS STATE

    return (
        <>
            <div className="containerg-joyas" id='containerg-joyas' >
            <div className="panel"></div>
                <div className="container-joyas">

                    <div className="container-text-joyas">

                        <div className="container-joyas-h2">
                            <h2>Our Jewerly's</h2>
                        </div>
                        <div className="container-joyas-p">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minima, reiciendis cupiditate quis commodi obcaecati, qui quia praesentium earum recusandae quo quasi deserunt minus, id consequuntur. Recusandae voluptatem tempora tenetur!Loremloremi obcaecati, qui quia praesentium earum recusandae quo quasi deserunt minus, id consequuntur. Recusandae voluptatem tempora tenetur!Loremloremi obcaecati, qui quia praesentium earum recusandae quo quasi deserunt minus, id consequuntur. Recusandae voluptatem tempora tenetur!Loremloremi obcaecati, qui quia praesentium earum recusandae quo quasi deserunt minus, id consequuntur. Recusandae voluptatem tempora tenetur!Loremlorem</p>
                        </div>
                        <div className="container-btn-more">
                            <Link to="types" spy={true} smooth={true} offset={50} duration={500}  className="btn-white">Show</Link>
                        </div>
                    

                    </div>

                    <div className="container-ventajas">
                        <div className="ventaja">
                            {
                                CARDS_INFO.map((card) =>{
                                    return <Card 
                                        key={card.title}
                                        titleCard={card.title}
                                        textCard={card.description}
                                        img={card.img}
                                        ventajaTitle = {card.ventajaTitle}
                                    />
                                })
                            }
                           

                        </div>
                    </div>


                </div>


            </div>

        </>
    )



}