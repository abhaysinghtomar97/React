import React from 'react'
import Card from './components/Card';
import { ArrowUpRight } from 'lucide-react';

const App = () => {
  return (
    <div className="parent  flex flex-col items-center bg-amber-100 w-full  p-25 ">

      <div className="top flex  w-[80%] : gap-8 mb-15">

        <div className="logo">
          <img  src="https://vastrakar.com/wp-content/uploads/2025/05/image-30.png" alt="" className="h-32 w-32 rounded-full" id="" />
        </div>

        <div className="info">
          <h1 className="text-2xl m-3">PRESENTAION DESIGN</h1>
          <p className="font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>

      </div>

      <div className="main  bg-neutral-50 p-10 w-[75vw]  rounded-2xl ">

        <div className="nav flex justify-between mb-5">
          <p className="bg-black text-amber-50 rounded-2xl p-1">TARGET AUDIENCE</p>
          <p className="font-mono">DIGITAL BANKING PLATFORM</p>
        </div>

        <div className=" flex ">

          <div className="para p-10   max-w-[25vw] min-w-[20vw]">
            <h1 className="text-5xl mb-10 ">Prospective customer segmentation</h1>
            <p className="text-gray-500 text-xl">Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
            <div className="icon mt-40">
              <ArrowUpRight size={48} />
            </div>
          </div>

          <div className=" overflow-x-auto whitespace-nowrap snap-x snap-mandatory card_container h-[690px]   gap-5 flex rounded-3xl ">
            <Card n={1} para="Prime customers, that have access to bank credit and are satisfied with the current product" />
            <Card n={2} para="Prime customers, that have access to bank credit and are not satisfied with the current service" />
            <Card n={2} para="Prime customers, that have access to bank credit and are not satisfied with the current service" />
            <Card n={2} para="Prime customers, that have access to bank credit and are not satisfied with the current service" />
            <Card n={2} para="Prime customers, that have access to bank credit and are not satisfied with the current service" />
            <Card n={2} para="Prime customers, that have access to bank credit and are not satisfied with the current service" />
           
          </div>

        </div>

      </div>
    </div>

  )
}

export default App;