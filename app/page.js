'use client'
import Image from "next/image";
import Mainbox from "@/app/mainBox/page";
import Head from "next/head";
import dynamic from 'next/dynamic'
import './mainBox/zones/images/man-sits-end-trolltunga-before-mountains.jpg'
import Controls from "@/app/controls/page";
import './main.scss'

export default function Home() {


    const Mainbox = dynamic(() => import('./mainBox/page'), { ssr: false })


    return (
        <div className="mainWrapper">
            <div>
                Chose the game mode
            </div>
            <Controls/>
            <Mainbox/>
        </div>
    );

}
