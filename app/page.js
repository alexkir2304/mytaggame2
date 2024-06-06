'use client'
import Image from "next/image";
import Mainbox from "@/app/mainBox/page";
import Head from "next/head";
import dynamic from 'next/dynamic'
import './mainBox/zones/images/man-sits-end-trolltunga-before-mountains.jpg'
import Controls from "@/app/controls/page";
import './main.scss'
import {useState} from "react";

export default function Home() {

    const [gameMode, setGameMode] = useState('numbers');

    const Mainbox = dynamic(() => import('./mainBox/page'), { ssr: false })

    const test = 20

    function handleClick(e) {
        +e.target.getAttribute('id') !== 1 ? setGameMode('pictures') : setGameMode('numbers')

        console.log(e.target.getAttribute('id'))
    }


    return (
        <div className="mainWrapper">
            <div className='choseSection'>
                Chose your game mode
            </div>
            <Controls modeIsChosenLifted={handleClick}/>
            {gameMode !== null ? <Mainbox gameMode = {gameMode}/> : null}
        </div>
    );

}
