'use client'
import './zones.scss'
import {useState} from "react";

export default function Card({value, styleLeft, styleTop, id, onClickFunc, status}) {


    return (
        <>
            <div className="mainZoneClass"
                 id={id}
                 style={{
                     left: styleLeft,
                     top: styleTop
                 }}
                 onClick={onClickFunc}
                 status = {status}
            >
                {value}
                <br/>
                {status}

            </div>
        </>
    );
}