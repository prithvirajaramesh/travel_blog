import React from "react";
import '../src/Css/Main.css'

export default function Main(props) {

    if (!props.img || !props.location || !props.map || !props.title || !props.date_s || !props.date_e || !props.para) {
        // Return null or some fallback element when any required prop is missing
        return null;
    }

    return (

        <>
            <div className="card_head">
                <div className="Card_Image_head">
                    <img src={props.img} className="Card_image" alt="imagecard" />
                </div>
                <div className="spacing"></div>
                <div className="card_data">
                    <div><span>{props.location} </span><a className="card_location" href={props.map}>view on google map</a></div>
                    <h2 className="card_heading"><b>{props.title}</b></h2>
                    <div className="card_date"><b>{props.date_s}-{props.date_e} </b></div>
                    <p className="card_para">{props.para}</p>
                </div>

            </div>
            
        </>



    )
}