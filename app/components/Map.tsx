'use client'

import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {useCountries} from "@/app/lib/getCountries";
import {icon} from "leaflet";

const ICON = icon({
    iconUrl: 'https://emassi.fr/wp-content/uploads/2017/10/Map-Marker-PNG-File.png',
    iconSize: [50, 50]
})


export default function Map({locationValue}:{locationValue:string}) {
  const {getCountryByValue} =  useCountries()
    const latLang = getCountryByValue(locationValue)?.latLang
    return (
        <MapContainer  center={latLang ?? [52.505, -0.09]}  scrollWheelZoom={false} className="h-[50vh] relative rounded-lg z-0" zoom={8}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLang ?? [52.505, -0.09]} icon={ICON}/>

        </MapContainer>
    )
}