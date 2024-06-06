'use client'

import Image from "next/image";
import './controls.scss'

import myPicture from "@/app/mainBox/zones/images/12345.jpg";

function CardForChose ({imagePath, isImage = false, modeIsChosen, id}) {
    return (
        <div
            id = {id}
            className='controlCards'
             onClick = {modeIsChosen}
        >
            {id === 1 ? 'Numbers' : 'Picture'}
        </div>
    )
}

function ModeToggler () {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '25%',
            textAlign: 'center',
            fontSize: '4vh',
            color: '#008080'
        }}>
            or
        </div>
    )
}

export default function Controls ({modeIsChosenLifted}) {



    // function handleClick() {
    //     console.log('hello')
    // }

    return (
        <div
            className='controlsWrapper'
            >
            <CardForChose id = {1} modeIsChosen = {modeIsChosenLifted}   />
            <ModeToggler/>
            <CardForChose id = {2}  modeIsChosen = {modeIsChosenLifted}/>
        </div>
    )
}