import women from '../assets/women.jpeg';
import marks from '../assets/quote.svg';
import ilustration from '../assets/illustration.png';
export default function Declarations() {

    return (

        <div className="containerg-declarations" id='containerg-declarations'>
            <div className="container-declarations">
                <div className="declarations_title">
                    <p>Best testimonials of clients</p>
                    <h2>Find what our most expert clients say about us</h2>
                </div>

                <div className="cards-illustration">


                    <div className="container-dcards">

                                <div className="declarations-card">

                                        <div className="card">
                                            <div className="comillas-declaration"> <picture><img src={marks} alt="comillas" /></picture> </div>
                                            <div className="text-declaration">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam temporibus enim sint aperiam commodi fugiat odit minus fuga nulla atque. Rerum labore maxime cumque consequuntur dicta ducimus distinctio, sapiente architecto!</p>

                                                <div className="author-declaration">
                                                    <div className="author-img"><picture><img src={women} alt="img autor" /></picture></div>
                                                    <div className="author-name"><p>Magdalena Deleppiane</p></div>
                                                    <div className="author-profession"><p>Expert jewelry analyst</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="declarations-card">

                                        <div className="card">
                                            <div className="comillas-declaration"> <picture><img src={marks} alt="comillas" /></picture> </div>
                                            <div className="text-declaration">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam temporibus enim sint aperiam commodi fugiat odit minus fuga nulla atque. Rerum labore maxime cumque consequuntur dicta ducimus distinctio, sapiente architecto!</p>

                                                <div className="author-declaration">
                                                    <div className="author-img"><picture><img src={women} alt="img autor" /></picture></div>
                                                    <div className="author-name"><p>Magdalena Deleppiane</p></div>
                                                    <div className="author-profession"><p>Expert jewelry analyst</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                    </div>  
                    <div className="container-ilustration">
                        <picture><img src={ilustration} loading='lazy' alt="ilustracion" /></picture>
                    </div>


                </div>
            </div>


        </div>



    )


}