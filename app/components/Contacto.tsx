"use client"; // Marca este componente como Client Component

import Image from "next/image";
import FormContact from "./FormContact";

export default function Contacto() {
  return (
    <div id="contacto" className="relative h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/24A_CDM_R10_VISTA_4.jpg" // Ruta de la imagen de fondo
          alt="Fondo de contacto"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Contenido del formulario */}
      <div className="relative z-20 text-center text-white p-6 max-w-2xl w-full">
        <p className="mb-4 lg:mb-8 text-lg lg:text-5xl">Déjanos tus datos para recibir informes más detallados.</p>


        {/* Formulario de contacto */}
        {/* <form className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="nombre" className="block text-left text-sm font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              className="w-full p-3 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="correo" className="block text-left text-sm font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="tu@correo.com"
              className="w-full p-3 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="telefono" className="block text-left text-sm font-medium mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+52 123 456 7890"
              className="w-full p-3 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-left text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              rows={4}
              className="w-full p-3 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form> */}

        <FormContact />
      </div>
    </div>
  );
}