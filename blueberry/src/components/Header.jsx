import { useEffect, useState } from 'react';
import { Link} from 'react-scroll'; //IMPORTO LINK DE LA LIBRERIA REACT-SCROLL

import headerimg from '../assets/headerimg.jpg';
import menu from '../assets/menu.png'

export default function Header({ showHeader }) {
    const [navDesplegar, setDesplegar] = useState(false)
    useEffect(() => {
        const modalNav = document.querySelector('.modal-nav');
        if (modalNav) {
          if (navDesplegar) {
            modalNav.classList.toggle('desplegar');
            aparecerLinks();
            
        }
        setDesplegar(false)
    }
      }, [navDesplegar]);


      function aparecerLinks(){
        const links = document.querySelectorAll('.nav a');
        links.forEach(link => {
            setTimeout(()=>{
                if(link.hasAttribute('id')){
                    link.removeAttribute('id')
                    return;
                }
                link.setAttribute("id","aparecerLink")

            },300)
        	
        })

      }
    return (
        <>

            <div className="containerg-header" id='containerg-header'>


                <div className="container-header">
                    <div className="container-menu" onClick={() => { setDesplegar(true) }}>
                        <img src={menu} alt="logo menu" loading='lazy' />
                    </div>
                    <div className="modal-nav">

                        <div className="container-nav">

                            <div className="nav">
                               <Link  to="containerg-header" spy={true} smooth={true} offset={-100} duration={500} >Home</Link> {/*USO EL COMPONENTE LINK, QUE TIENE LA FUNCIONALIDAD DE LLEVARNOS A LA SECCION AL DARLE UN CLICK */}
                                 {/*OFFSET: DESLIZAMIENTO CANTIDAD*/}
                                <Link  to="containerg-joyas" spy={true} smooth={true} offset={50} duration={500} >Joyas</Link>
                                <Link to="containerg-declarations" spy={true} smooth={true} offset={50} duration={500}>Declarations</Link>
                                <Link to='containerg-opinions'  spy={true} smooth={true} offset={50} duration={500}>Opinions</Link>

                               <Link to="types" spy={true} smooth={true} offset={50} duration={500}>Products</Link>

                            </div>


                        </div>
                    </div>

                    {showHeader && (
                        <div className="container-logo-text">
                            <div className="container-logo">
                                <div className="part1">
                                    <h1>Bluee</h1>
                                    <p>The best</p>
                                </div>
                                <div className="part2">
                                    <h1>Berry</h1>
                                    <p>Joureys</p>

                                </div>
                            </div>

                        </div>
                    )}





                </div>

                {showHeader && (
                    <div className="container-imgheader">
                        <img src={headerimg} alt="img header" loading='lazy' />
                    </div>

                )}

            </div>



        </>)


}


;