import React from 'react'
import './Section.css'
const Section = () => {
  return (
    <div className='section-main'>
        
        <div className="section-container">
            <div className="section-heading">
                <div id='head-title'>Order our best food options</div>
                <div className="sec-icons">
                    <i class="fa-solid fa-arrow-left" id='left-icon'></i>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>

            <div className="full-items">
                <div className="items">
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png" alt="Dosa" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png" alt="Idli" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png" alt="Biryani" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poori.png" alt="Poori" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png" alt="Vada" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" alt="Paratha" />
                    </div>
                </div>

                <div className="items">
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Bonda.png" alt="Bonda" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png" alt="Shake" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png" alt="Pav Bhaji" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Omelette.png" alt="Omelette" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Appam.png" alt="Appam" />
                    </div>
                    <div className="item">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha.png" alt="Poha" />
                    </div>
                </div>

            </div>

        </div>

        <div className="section-add">
            <div className="section-heading">
                <div id='head-title'>Discover best restaurants on Dineout</div>
                <div className="sec-icons">
                    <i class="fa-solid fa-arrow-left" id='left-icon'></i>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section
