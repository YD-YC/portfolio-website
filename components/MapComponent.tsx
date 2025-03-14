import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
    const mapRef = useRef<L.Map | null>(null); // Store map instance

    useEffect(() => {
        if (typeof window !== "undefined" && !mapRef.current) {
            const map = L.map("map").setView([28.6265, 77.4354], 15);
            mapRef.current = map; // Store map instance

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            const icon = new L.Icon({
                iconUrl: "/marker-icon.png",
                iconSize: [40, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            });

            L.marker([28.6265, 77.4354], { icon })
                .addTo(map)
                .bindPopup("<b>Ghaziabad</b><br>Uttar Pradesh, India.")
                .openPopup();
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return <div id="map" className="w-full h-[400px]"></div>;
};

export default MapComponent;
