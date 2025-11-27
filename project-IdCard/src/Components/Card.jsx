import React from 'react'
import clg_logo from "../assets/LogoPSIT_IDcard.png"
// import dp from "../assets/2411085.jpg"
import qr from "../assets/psit.ac.in_qrcode.png"


const Card = (prop) => {
    return (
        <div className="parent">
            <div className="top">

                <div className="logo">
                    <img src={clg_logo} height="70px" width="100px" />
                </div>
                <div className="Dp">
                    <img src={prop.dp} height="150px" width="150px" />
                </div>
            </div>

            <div className="center">
                <h2>{prop.name}</h2>
                <h3>{prop.roll}</h3>
                <h4 className="domain">{prop.branch}</h4>
                <h4>Pranveer Singh Institute of Technology</h4>
            </div>

            <div className="bottom">
                <div className="qr">
                    <img src={qr} height="100px" width="100px" />
                </div>
                <div className="clg_det">
                    <h3>STUDENT ID - {prop.std_id}</h3>
                    <p>Kanpur - Agra - Delhi National Highway &#40; NH-19&#41;, Bhauti, Kanpur &#40;UP&#41;</p>
                    <p> <span>TOLL FREE:</span> +91 7670998888</p>
                </div>
            </div>

        </div>
    )
}

export default Card