// app/modelos/[modelo]/page.tsx
import { houseModels } from "../../data/houseModels"; // Asegúrate de que esta ruta sea correcta
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Layout from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export default function ModelPage({ params }: { params: { modelo: string } }) {
  const model = houseModels.find((m) => m.id === params.modelo);

  if (!model) {
    return <div>Modelo no encontrado</div>;
  }

  return (
    <Layout>
      <Navbar />
      <div className="h-screen w-full overflow-hidden relative bg-black">
        <div className="absolute bottom-0 left-0 px-12 lg:px-32 py-12 z-10">
          <p className="uppercase text-white text-2xl md:text-4xl lg:text-6xl font-light">
            Modelo <span className="font-medium">{model.name}</span>
          </p>
          <h1 className="mt-6 text-white md:text-2xl font-light uppercase">
            {model.location}
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={model.images.hero}
            alt={model.name}
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>
      </div>
      <div className="p-12 lg:py-12 lg:px-32">
        <div className="md:grid grid-cols-2">
          <div>
            <div className="flex gap-6 lg:gap-16">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/cama-48b.png"
                  alt="Habitaciones"
                  width={32}
                  height={32}
                  quality={80}
                />
                <span className="lg:text-xl">{model.features.bedrooms}</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image src="/images/ducha-64b.png" alt="Baños" width={32} height={32} />
                <span className="lg:text-xl">{model.features.bathrooms}</span>
              </div>
              {model.features.flexroom && (
                <div className="flex flex-col justify-center items-center">
                  <Image src="/images/sofa-48b.png" alt="Flexroom" width={32} height={32} />
                  <span className="lg:text-xl">Flexroom</span>
                </div>
              )}
              {model.features.roofgarden && (
                <div className="flex flex-col justify-center items-center">
                  <Image src="/images/terrace-64b.png" alt="Roofgarden" width={32} height={32} />
                  <span className="lg:text-xl">Roofgarden</span>
                </div>
              )}
            </div>

            <p className="text-xl lg:text-3xl mt-4">Terreno: {model.features.terrain}</p>
            <p className="text-xl lg:text-3xl">Construcción: {model.features.construction}</p>

            <p className="text-xl lg:text-3xl font-light mt-4">{model.features.description}</p>
          </div>

          <div className="col-start-2 flex justify-center gap-4 py-4 md:py-0">
            {model.images.plans.map((plan, index) => (
              <div key={index} className="w-auto">
                <Image
                  src={plan}
                  alt={`Plano ${index + 1}`}
                  width={120}
                  height={300}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>

          <div className="flex">
            <Link
              href="/#contacto"
              className="bg-[#DF2884] text-white p-4 text-sm font-semibold flex items-center gap-4 uppercase"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden md:grid grid-cols-2">
        {model.images.interiors.map((img, index) => (
          <div key={index} className="w-full h-auto">
            <Image
              src={img}
              alt={`Interior ${index + 1}`}
              width={1500}
              height={1500}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}
