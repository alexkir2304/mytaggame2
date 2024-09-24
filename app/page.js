'use client'
import Image from "next/image";
import Mainbox from "@/app/mainBox/page";
import Head from "next/head";
import dynamic from 'next/dynamic'
// import './mainBox/zones/images/man-sits-end-trolltunga-before-mountains.jpg'
import Controls from "@/app/controls/page";
import './main.scss'
import {useState} from "react";
import TryAgain from "@/app/victory/page";

export default function Home() {

    const [gameMode, setGameMode] = useState('numbers');
    const [isGameWon, setGameWon] = useState(false);

    const Mainbox = dynamic(() => import('./mainBox/page'), { ssr: false })

    function handleClick1(e) {
        +e.target.getAttribute('id') !== 1 ? setGameMode('pictures') : setGameMode('numbers')
    }

    function handleVictoryNumbers() {
        setGameWon(true)
        console.log(isGameWon)
        // console.log('winner lable worked')

    }

    console.log(isGameWon)

    function handleTryAgain (e) {
        setGameWon(false)
        console.log('handleTryAgain')
    }

    if (isGameWon) {
        return (
            <div className="mainWrapper">
                <div className='choseSection'
                     style={{
                         fontSize: '10vh'
                     }}>
                    {isGameWon === false ? (<>
                        Chose your game mode
                    </>) : (<>
                        Victory!
                    </>)}
                </div>
                <TryAgain
                    className="TryAgain"
                    onClickFunc={handleTryAgain}
                />
            </div>
        )
    } else {
        return (
            <div className="mainWrapper">
                <div
                    className='choseSection'
                    >
                    {/*{headerText2()}*/}
                    {isGameWon === false ? (<>
                        Chose your game mode
                    </>) : (<>
                        Victory
                    </>)}
                </div>
                <Controls modeIsChosenLifted={handleClick1}/>
                {gameMode !== null ? <Mainbox gameMode={gameMode} onVictoryNumbers={handleVictoryNumbers}/> : null}
            </div>
        );
    }



}
