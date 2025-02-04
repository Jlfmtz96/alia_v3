import Image from "next/image";

export default function Nosotros() {
    return (
      <section id="nosotros" className="p-12 lg:p-32 lg:grid grid-rows-2 gap-12">
        <div>
            <p className="text-lg md:text-2xl">¡Bienvenido a Alia Residencial! <span className="font-semibold">Te invitamos a descubrir
                nuestro nuevo proyecto, diseñado para que tú y tu familia
                cumplan el sueño de tener un hogar propio.</span>
            </p>
        </div>

        <div className="row-start-2 mt-4 lg:mt-0">
            <div className="flex justify-between">
                <div className="">
                    <h6 className="text-xs md:text-xl"><span className="text-base md:text-3xl font-semibold">más de <span className="text-2xl md:text-6xl">6</span></span> <br />Años de experiencia</h6>
                </div>
                <div>
                    <h6 className="text-xs md:text-xl"><span className="text-base md:text-3xl font-semibold">más de <span className="text-2xl md:text-6xl">90</span></span> <br />Residencias disponibles</h6>
                </div>
                <div className="w-20 md:w-40">
                    <Image
                        alt="" 
                        src="/images/domumcolor.png"
                        width={500}
                        height={500}
                        objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                        quality={100} // Calidad de la imagen (opcional) 
                    />
                    {/* <img src={domum.src} alt="" className="w-full h-full object-contain"> */}
                </div>
            </div>
        </div>

        <div className="row-start-2 mt-4 lg:mt-0">
            <p className="md:text-xl text-right">
                Descubre un estilo de vida exclusivo con residencias diseñadas para ofrecerte comodidad, privacidad y tranquilidad,
                rodeadas de áreas verdes y extraordinarias amenidades.
            </p>
        </div>
      </section>
    );
  }