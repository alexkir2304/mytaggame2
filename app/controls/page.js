'use client'

import Image from "next/image";
import './controls.scss'

import myPicture from "@/app/mainBox/zones/images/12345.jpg";

function CardForChose ({imagePath, isImage = false}) {
    return (
        <div style={{
            height: '30vh',
            width: '30vh',
            border: '3px solid black',
            overflow: 'hidden',
            position: 'relative',
            // backgroundImage: isImage === true ? `url(${myPicture.src})` : null,
            // backgroundSize: '100%',
        }}>
            {isImage !== false ? <Image src={myPicture}  fill={true} alt={'something'}/> : null}
        </div>
    )
}

function ModeToggler () {
    return (
        <div style={{
            width: '25%',
            border: '3px solid black'
        }}>
            something toggling the mode
        </div>
    )
}

export default function Controls () {

    return (
        <div
            className='controlsWrapper'
            >
            <CardForChose />
            <ModeToggler/>
            <CardForChose isImage={true}/>
        </div>
    )
}