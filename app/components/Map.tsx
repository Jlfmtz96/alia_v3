
import React from 'react'
import { MapView } from './MapView';

export default function Map() {
  return (
    <section id="entorno" className="overflow-hidden">
        <div className="relative">
            <div className="w-full h-full">
                <MapView />
            </div>

            {/* <div class="lg:w-1/2 flex flex-col justify-center lg:h-[80vh]">
                <div class="absolute top-0 -right-60 h-[80vh] w-auto">
                    <img src={icono.src} alt="" class="w-full h-full opacity-10">
                </div>
                <div class="relative z-10">
                    <h2 class="text-3xl md:text-4xl 2xl:text-5xl font-helvetica-condensed-oblique text-[#21272A]">CONOCE TU ENTORNO</h2>
                    <p class="md:text-xl 2xl:text-2xl mt-5 md:mt-12 text-[#21272A]">Ubicado en la privilegiada zona de El Mirador, nuestras casas en preventa ofrecen espacios ideales para disfrutar en familia.</p>
                </div>
            </div> */}
        </div>
    </section>
  );
}
