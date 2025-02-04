import Image from "next/image";

export default function Hero() {
    return (
      <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      {/* Imagen de fondo con el componente Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/acceso.jpg" // Ruta desde la carpeta public
          alt="Alía Residencial"
          layout="fill" // Cubre todo el espacio disponible
          objectFit="cover" // Ajusta la imagen para cubrir el contenedor
          quality={100} // Calidad de la imagen (opcional)
        />
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="absolute bottom-0 left-0 px-12 lg:px-32 py-12 z-10">
        <p className="uppercase text-white text-2xl md:text-4xl lg:text-6xl font-light">Tu nuevo <span className="font-medium">hogar</span> en el <br /><span className="font-medium">corazón</span> del Marqués</p>
        <h1 className="mt-6 text-white md:text-2xl font-light uppercase text-nowrap">Alía Residencial Querétaro</h1>
        
        <div className="flex mt-8">
              <a href="#contacto" className="bg-[#dc2c81] p-4 text-sm font-semibold flex items-center gap-4 uppercase text-nowrap">
                  Más información
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-right-down"><polyline points="10 15 15 20 20 15"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/></svg>
              </a>
          </div>
        {/* <a
          href="#nosotros"
          className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Conoce más
        </a> */}
      </div>

      {/* <div className="absolute bottom-0 left-0 px-12 lg:px-32 py-12 z-10">
          <p className="uppercase text-white text-2xl md:text-4xl lg:text-6xl font-light">Tu nuevo <span className="font-medium">hogar</span> en el <br><span class="font-medium">corazón</span> del Marqués</p>
          <h1 className="mt-6 text-white md:text-2xl font-light uppercase text-nowrap">Alía Residencial Querétaro</h1>

          <div className="flex mt-8">
              <a href="#contacto" className="bg-white p-4 text-sm font-semibold flex items-center gap-4 uppercase text-nowrap">
                  Más información
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-corner-right-down"><polyline points="10 15 15 20 20 15"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/></svg>
              </a>
          </div>
      </div> */}
    </section>
    );
  }