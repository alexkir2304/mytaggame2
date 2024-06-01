'use client'
import Image from "next/image";
import Mainbox from "@/app/mainBox/page";
import Head from "next/head";
import dynamic from 'next/dynamic'

export default function Home() {


    const Mainbox = dynamic(() => import('./mainBox/page'), { ssr: false })


    return (
        <>
            <Mainbox/>
        </>
    );

}
