'use client'
import './zones.scss'
import {useState} from "react";
import myPicture from "@/app/mainBox/zones/images/12345.jpg";
import Image from "next/image";

export default function Card({value, styleLeft, styleTop, id, onClickFunc, status, gameMode, bgCoordinates}) {

    function myContent () {
        if (gameMode === 'numbers') {
            return (
                <>
                    {/*{status}*/}
                    {value}
                </>
            )
        } else {
            return (
                <>
                    <div className='testClass'
                         id = {id}
                         style={{
                             width:'100%',
                             height:'100%',
                             backgroundImage: bgCoordinates !== null ? `url(${myPicture.src})`: null,
                             backgroundSize: '400%',
                             backgroundPosition: bgCoordinates}}>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className={gameMode === 'pictures' ? "mainZoneClassPictures" : "mainZoneClass" }

                 id={id}
                 style={{
                     left: styleLeft,
                     top: styleTop,
                 }}
                 // onClick={onClickFunc}
                 status = {status}
            >
                <div
                    id={id}
                    className='cardsNumber'
                    onClick={onClickFunc}
                >
                    {myContent()}
                </div>
            </div>
        </>
    );
}