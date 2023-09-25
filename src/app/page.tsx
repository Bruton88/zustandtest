"use client";
import Bearbox from '@/components/Bearbox'
import CatBox from '@/components/CatBox';
import CatBox2 from '@/components/CatBox2';
import CatController from '@/components/CatController';


export default function Home() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>

      <div> <Bearbox /></div>

      <div>
        <CatBox />
        <CatBox2 />
        <CatController />
      </div>


    </div>
  )
}
