'use client'

import * as React from 'react';
import Map, { Marker } from 'react-map-gl/mapbox';
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MapView() {
  return (
    <Map
    mapboxAccessToken="pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg"
    initialViewState={{
      longitude: -100.312596,
      latitude: 20.597956,
      zoom: 14
    }}
    style={{width: '100%', height: 600}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    scrollZoom={false} // Deshabilita el zoom con el scroll
    >
              {/* Agregar un marcador en las coordenadas especificadas */}
      <Marker longitude={-100.312596} latitude={20.597956}>
        <Link href="https://www.google.com.mx/maps/place/20%C2%B035'49.9%22N+100%C2%B018'46.7%22W/@20.597181,-100.3136207,19z/data=!3m1!4b1!4m4!3m3!8m2!3d20.597181!4d-100.312977?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target='_blank'>
            <Image src="/images/icons8-geo-cerca-94.png" alt='' width={32} height={32}/>
        </Link>
      </Marker>
    </Map>
  )
}
