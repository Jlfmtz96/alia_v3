'use client'
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";

interface Place {
    name: string;
    coord: [number, number];
}

type PlacesCategories = "supermercados" | "escuelas" | "hospitales" | "plazas";

const placesCoordinates: Record<PlacesCategories, Place[]> = {
    supermercados: [
        { name: "El Atoron mini super", coord: [-101.38772412036853, 20.68553942328185] },
        { name: "Supercenter Irapuato", coord: [-101.3668253571473, 20.68566426974837] },
        { name: "Walmart Express Villas Irapuato", coord: [-101.38504012944458, 20.682532700973944] },
        { name: "Walmart Irapuato", coord: [-101.36691685468398, 20.68401571349927] },
        { name: "Soriana Híper Jacarandas", coord: [-101.3715680497763, 20.671884493164896] },
    ],
    escuelas: [
        { name: "Prepa Tec", coord: [-101.39449613217165, 20.686681655679404] },
        { name: "Art and Music Academy", coord: [-101.39370335221858, 20.689462879017793] },
    ],
    hospitales: [
        { name: "Hospital MAC: Irapuato", coord: [-101.37162519655372, 20.67775727902632] },
        { name: "Hospital Genova", coord: [-101.3700476993185, 20.67821848977905] },
    ],
    plazas: [
        { name: "Plaza Cibeles", coord: [-101.37981529393456, 20.681368366181726] },
        { name: "Plaza Delta", coord: [-101.37613452986676, 20.681792189773965] },
    ],
};

// interface FilterButtonProps {
//     label: string;
//     icon: JSX.Element;
//     onClick: () => void;
// }

// const FilterButton: React.FC<FilterButtonProps> = ({ label, icon, onClick }) => (
//     <button className="flex flex-col group items-center" onClick={onClick}>
//         <div className="rounded-full border border-neutral-900 group-hover:bg-neutral-800 group-hover:text-white w-10 h-10 flex items-center justify-center">
//             {icon}
//         </div>
//         <span className="text-xs">{label}</span>
//     </button>
// );

export const MapView: React.FC = () => {
    const [filter] = useState<PlacesCategories | null>(null);
    const [map, setMap] = useState<mapboxgl.Map | null>(null);
    const [markers, setMarkers] = useState<mapboxgl.Marker[]>([]);

    // const handleFilterClick = (selectedFilter: PlacesCategories) => {
    //     setFilter(selectedFilter);
    // };

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg';
        const newMap = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-100.312596, 20.597956], // Coordenadas iniciales
            zoom: 14,
            scrollZoom: false,
        });
        setMap(newMap);

        // Marcador principal centrado
        new mapboxgl.Marker({ color: 'red' })
            .setLngLat([-100.312596, 20.597956])
            .addTo(newMap);

        // Centrando el mapa en las coordenadas del marcador principal
        newMap.setCenter([-100.312596, 20.597956]);

        return () => newMap.remove();
    }, []);

    useEffect(() => {
        if (!map || !filter) return;
        markers.forEach(marker => marker.remove());
        setMarkers([]);

        const newMarkers = placesCoordinates[filter].map(({ name, coord }) =>
            new mapboxgl.Marker({ color: '#004E90' })
                .setLngLat(coord)
                .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3 className="font-bold">${name}</h3>`))
                .addTo(map)
        );
        setMarkers(newMarkers);
    }, [filter, map]);

    return (
        <div className="relative">
            {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 backdrop-blur-sm p-2">
                <div className="grid grid-cols-4 gap-20 md:gap-3 justify-center mt-4">
                    <FilterButton label="Supermercados" icon={<span>🛒</span>} onClick={() => handleFilterClick("supermercados")} />
                    <FilterButton label="Escuelas" icon={<span>🎓</span>} onClick={() => handleFilterClick("escuelas")} />
                    <FilterButton label="Hospitales" icon={<span>🏥</span>} onClick={() => handleFilterClick("hospitales")} />
                    <FilterButton label="Plazas" icon={<span>🏬</span>} onClick={() => handleFilterClick("plazas")} />
                </div>
            </div> */}
            <div id="map" className="w-full h-[500px]" />
        </div>
    );
};
