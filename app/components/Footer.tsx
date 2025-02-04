import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-12 bg-gradient-to-t from-[#dc2c81] to-[#be5f8d]">
        <div className="md:grid grid-cols-4 grid-rows-2 gap-4">
            <div className="col-span-3 lg:mt-8 text-white lg:text-2xl">
                <p className="font-light"><span className="font-medium">Vive la experiencia Alía</span> y descubre por qué somos la elección perfecta para aquellos que buscan lo mejor.</p>
            </div>
            <div className="col-span-2 row-start-2 my-4 lg:my-0">
                <div className="w-28 md:w-44 h-auto">
                    <Link href="/">
                        <Image src="/images/Aliia_logo_blanco.png" alt="" width={500} height={500}/>
                    </Link>
                </div>
            </div>
            <div className="col-start-3 row-start-2 text-white flex flex-col mb-4 lg:mb-0">
                <span className="font-light text-sm">Redes Sociales</span>
                <Link href={""}>Facebook</Link>
                <Link href={""}>Instagram</Link>
            </div>
            <div className="col-start-4 row-start-2 text-white flex flex-col mb-4 lg:mb-0">
                <span className="font-light text-sm">Contactanos</span>
                <Link href={""}>(444) 447-7205</Link>
                <Link href={""}>Prol. Constituyentes Ote., CP 76246 El Marqués, Qro</Link>
            </div>
        </div>
        <div className="text-xs lg:text-center text-white mb-2">
            *Imágenes y renders mostrados en este sitio son estrictamente de carácter ilustrativo. Los proyectos podrán cambiar o sufrir de modificaciones de acuerdo al desarrollador. Sujeto a cambios sin previo aviso. Consulta prototipos y amenidades disponibles con tu asesor.
        </div>
        <div className="text-xs lg:text-sm text-center text-white">
            Copyright 2025 Alía Residencial | <Link href="" className="font-medium">Aviso de Privacidad</a>
        </div>
    </footer>
  );
}
