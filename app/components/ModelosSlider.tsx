'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const modelos = [
  {
    name: 'Alía',
    bgImage: '/images/R01_ALIA.jpg',
    features: {
      beds: 3,
      showers: '3 1/2',
      flexroom: true,
      roofgarden: true,
    },
    link: '/modelo/alia',
    color: '#dc2c81',
    text: '#fff',
  },
  {
    name: 'Celia',
    bgImage: '/images/R01_CELIA.jpg',
    features: {
      beds: 3,
      showers: '3 1/2',
      flexroom: true,
      roofgarden: true,
    },
    link: '/modelo/celia',
    color: '#e94529',
    text: '#fff',
  },
  {
    name: 'Isla',
    bgImage: '/images/R01_ISLA.jpg',
    features: {
      beds: 3,
      showers: '2 1/2',
    },
    link: '/modelo/isla',
    color: '#ef8317',
    text: '#fff',
  },
  {
    name: 'Luna',
    bgImage: '/images/R01_LUNA.jpg',
    features: {
      beds: 3,
      showers: '3 1/2',
    },
    link: '/modelo/luna',
    color: '#4651a0',
    text: '#fff',
  },
  {
    name: 'Mira',
    bgImage: '/images/R01_MIRA.jpg',
    features: {
      beds: 3,
      showers: '2 1/2',
    },
    link: '/modelo/mira',
    color: '#ede41b',
    text: '#000',
  },
  {
    name: 'Siena',
    bgImage: '/images/R01_SIENA.jpg',
    features: {
      beds: 3,
      showers: '3 1/2',
      flexroom: true,
      roofgarden: true,
    },
    link: '/modelo/siena',
    color: '#934c98',
    text: '#fff',
  },
  {
    name: 'Tessa',
    bgImage: '/images/R01_TESSA.jpg',
    features: {
      beds: 3,
      showers: '3 1/2',
      flexroom: true,
      roofgarden: true,
    },
    link: '/modelo/tessa',
    color: '#6cc3ca',
    text: '#fff',
  },
];

export default function ModelosSlider() {
  return (
    <section id="modelos" className="relative w-full h-screen md:flex justify-center items-center overflow-hidden">
      <div>
        <Image src="/images/lotificacion.jpg" width={1500} height={1500} alt="Master plan" />
      </div>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        keyboard
        mousewheel={{ thresholdDelta: 70 }}
        spaceBetween={60}
        loop
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard]}
        className="swiper"
      >
        {modelos.map((modelo, index) => (
          <SwiperSlide
          key={index}
          style={{ width: '300px', height: '400px' }}
          className="relative overflow-hidden"
        >
            <Link href={modelo.link}>
              {/* Imagen de fondo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={modelo.bgImage}
                  alt={`Fondo de ${modelo.name}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                {/* Gradiente superpuesto */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, #0f2027, #203a4300, #2c536400)',
                  }}
                />
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                    <span className="model w-1/2" style={{ backgroundColor: modelo.color, color: modelo.text }}>
                    {modelo.name}
                    </span>
                    <div className='px-4 py-7'>
                      <div className="flex gap-4">
                          <div className="flex flex-col justify-center items-center">
                          <Image src="/images/icons8-cama-48.png" alt="Bed" width={20} height={20} />
                          <span className="text-white">{modelo.features.beds}</span>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                          <Image src="/images/icons8-ducha-64.png" alt="Shower" width={20} height={20} />
                          <span className="text-white">{modelo.features.showers}</span>
                          </div>
                          {modelo.features.flexroom && (
                          <div className="flex flex-col justify-center items-center">
                              <Image src="/images/icons8-sofá-48.png" alt="Flexroom" width={20} height={20} />
                              <span className="text-white">Flexroom</span>
                          </div>
                          )}
                          {modelo.features.roofgarden && (
                          <div className="flex flex-col justify-center items-center">
                              <Image src="/images/icons8-terrace-64.png" alt="Roofgarden" width={20} height={20} />
                              <span className="text-white">Roofgarden</span>
                          </div>
                          )}
                      </div>
                      <Link href={modelo.link} className="text-white underline inline-block">
                          Ver más
                      </Link>
                    </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}