import bannerEvento1 from "../../assents/banner-1.png"
import bannerEvento2 from "../../assents/banner-2.png"
import bannerEvento3 from "../../assents/banner-3.png"

import "./Carrossel.css"

function Carrossel (){
    return(
        <section 
        id= "carrosselEventPlus" 
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bannerEvento1} className="carousel-banner" alt="Banner do Primeiro Evento" />
                </div>

                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bannerEvento2} className="carousel-banner" alt="Banner do Segundo Evento" />
                </div>

                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bannerEvento3} className="carousel-banner" alt="Banner do Terceiro Evento" />
                </div>

                </div>
                </div>

        </section>
    )
}

export default Carrossel;