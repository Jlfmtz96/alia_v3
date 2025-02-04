import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-12 bg-gradient-to-t from-[#dc2c81] to-[#be5f8d]">
        <div className="md:grid grid-cols-4 grid-rows-2 gap-4 mb-10">
            <div className="col-span-3 lg:mt-8 text-white lg:text-2xl">
                <p className="font-light"><span className="font-medium">Vive la experiencia Alía</span> y descubre por qué somos la elección perfecta para aquellos que buscan lo mejor.</p>
            </div>
            <div className="col-span-2 row-start-2 my-4 lg:my-0">
                <div className="w-28 md:w-44 h-auto">
                    <Link href="/">
                        <Image src="/images/domumblanco.png" alt="" width={500} height={500}/>
                    </Link>
                </div>
            </div>
            <div className="col-start-3 row-start-2 text-white flex flex-col mb-4 lg:mb-0">
                <span className="font-light text-sm">Redes Sociales</span>
                <Link href="https://www.facebook.com/casasdomum" target='_blank'>Facebook</Link>
                <Link href="https://www.instagram.com/casas_domum/" target='_blank'>Instagram</Link>
            </div>
            <div className="col-start-4 row-start-2 text-white flex flex-col mb-4 lg:mb-0">
                <span className="font-light text-sm">Contactanos</span>
                <Link href="https://wa.me/5214424750573" target='_blank'>(442) 475-0573</Link>
                <Link href="https://www.google.com.mx/maps/place/20%C2%B035'49.9%22N+100%C2%B018'46.7%22W/@20.597181,-100.3136207,19z/data=!3m1!4b1!4m4!3m3!8m2!3d20.597181!4d-100.312977?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target='_blank'>Prol. Constituyentes Ote., CP 76246 El Marqués, Qro</Link>
            </div>
        </div>
        <div className="text-xs lg:text-center text-white">
            *Imágenes y renders mostrados en este sitio son estrictamente de carácter ilustrativo. Los proyectos podrán cambiar o sufrir de modificaciones de acuerdo al desarrollador. Sujeto a cambios sin previo aviso. Consulta prototipos y amenidades disponibles con tu asesor.
        </div>
        <div className="text-xs lg:text-sm text-center text-white">
            Copyright 2025 Alía Residencial | <Link href="/aviso-de-privacidad.pdf" target='_blank' className="font-medium">Aviso de Privacidad</Link>
        </div>
    </footer>
  );
}
