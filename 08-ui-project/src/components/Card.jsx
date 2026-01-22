import React from 'react'

const Card = (prop) => {
    return (
        <div className="relative parent h-[670px] w-[240px] flex-shrink-0 snap-start">


            <div
                className="
      absolute inset-0
      bg-[url('https://www.shutterstock.com/image-photo/smiling-young-asian-woman-holding-600nw-2656961787.jpg')]
      bg-cover bg-center
      rounded-3xl
      brightness-75
      "
            ></div>

            <div className="counter relative z-10 text-white font-bold text-xl">
                {prop.n}
            </div>

            <div className="Cardtext absolute z-10 bottom-1/4 px-4
      text-lg drop-shadow-lg text-white font-medium leading-snug">
                {prop.para}
            </div>
            <button
                className="
      absolute z-10 bottom-7 left-1/2 -translate-x-1/2
      bg-blue-500 text-white px-5 py-3 rounded-full"
            >
                Satisfied
            </button>

        </div>
    );


}

export default Card;

