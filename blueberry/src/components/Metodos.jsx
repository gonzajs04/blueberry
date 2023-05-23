import visa from '../assets/visa.png';
import master from '../assets/master.png';
import cash from '../assets/cash.png';
import CardMethods from './CardMethods';

export default function Metodos() {

    const CARDS_METHODS = [
        { name: "Visa", description: "You can pay with credit or debit card VISA", img:  visa  },
        { name: "MasterCard", description: "Credit or debit, doesn't matter, pay with MasterCard", img:  master  },
        { name: "Cash", description: "You can pay with cash, and make de transaction more easier", img: cash }

    ]

    return (

        <div className="containerg-metodos">

            <div className="container-metodos">
                {CARDS_METHODS.map((method) => {
                    
                  return <CardMethods
                   key={method.name}
                    name = {method.name}
                    img = {method.img}
                    description = {method.description}
                   />
                   
                })}

            </div>


        </div>
    )





}