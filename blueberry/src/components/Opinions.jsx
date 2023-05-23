import { useState } from "react";
import stadistics from '../assets/stadistics.jpeg'

export default function Opinions() {

    return (
        <div className="containerg-opinions" id="containerg-opinions">
            <div className="container-opinions">
          

            <div className="containerg-img-opinions">
       

            <div className="container-img-numbers">
                 
                 <div className="container-img-opinions">
                    <div className="opinions-img">
                    <picture>
                         <img loading="lazy" src={stadistics} alt="Img opinions" />
                     </picture>
                    </div>
                  
                 </div>
                 <div className="container-numbers-opinions">
                 <h2>Expectatives</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, assumenda molestias obcaecati laborum dolores sequi dolorum placeat fuga iusto est a quibusdam fugiat iure. Eligendi vel laboriosam quas numquam consequuntur.</p>
                     <p>In the numbers</p>
                     <div className="numbers">
                         <h2>48+</h2>
                         <p>More than 48 years</p>
                     </div>
                     <div className="numbers">
                         <h2>1M</h2>
                         <p>More than 1M positive opinions</p>
                     </div>
                     <div className="numbers">
                     <h2>1.2M</h2>
                         <p>More than 1.2M Orders</p>
                     </div>
                 </div>
             </div>
            </div>
           
            </div>
        </div>

    )


}