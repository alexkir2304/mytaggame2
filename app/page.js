'use client'
import Image from "next/image";
import Mainbox from "@/app/mainBox/page";
import Head from "next/head";
import dynamic from 'next/dynamic'
import './mainBox/zones/images/man-sits-end-trolltunga-before-mountains.jpg'

export default function Home() {


    const Mainbox = dynamic(() => import('./mainBox/page'), { ssr: false })


    return (
        <>
            <Mainbox/>
            {/*<Image src='/mainBox/zones/images/12345.jpg' alt='something' width= '300' height= '300'/>*/}
        </>
    );

}
