"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const estimateBands = {
  "Lawn Maintenance": {
    small: { label: "Small", range: "Under 50m²", estimate: "£25–£35" },
    medium: { label: "Medium", range: "50–150m²", estimate: "£35–£60" },
    large: { label: "Large", range: "150–400m²", estimate: "£60–£100" },
  },
  Strimming: {
    small: { label: "Small", range: "Under 50m²", estimate: "£25–£40" },
    medium: { label: "Medium", range: "50–150m²", estimate: "£40–£75" },
    large: { label: "Large", range: "150–400m²", estimate: "£75–£130" },
  },
};

export default function GardenCalculator() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const drawRef = useRef<MapboxDraw | null>(null);

  const [areaSqM, setAreaSqM] = useState(0);
  const [service, setService] =
    useState<keyof typeof estimateBands>("Lawn Maintenance");

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!token) {
      console.error("Missing NEXT_PUBLIC_MAPBOX_TOKEN");
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [-2.2426, 52.192],
      zoom: 16,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: "draw_polygon",
    });

    map.on("load", () => {
      map.addControl(new mapboxgl.NavigationControl(), "top-right");
      map.addControl(draw, "top-left");
      drawRef.current = draw;
    });

    const updateArea = () => {
      const data = draw.getAll();

      if (!data.features.length) {
        setAreaSqM(0);
        return;
      }

      const area = turf.area(data);
      setAreaSqM(Math.round(area));
    };

    map.on("draw.create", updateArea);
    map.on("draw.update", updateArea);
    map.on("draw.delete", updateArea);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      drawRef.current = null;
    };
  }, []);

  const sqFt = Math.round(areaSqM * 10.7639);
  const lawnSize = areaSqM < 50 ? "small" : areaSqM <= 150 ? "medium" : "large";
  const currentEstimate = estimateBands[service][lawnSize];
  const isOversized = areaSqM > 400;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-600">
            Garden Quote Calculator
          </p>

          <h2 className="text-4xl font-black uppercase text-slate-900 md:text-5xl">
            Draw Your Garden. Get an Estimate.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Use the satellite map to outline your garden and get a rough estimate
            for lawn maintenance or strimming services.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_420px]">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <div ref={mapContainer} className="h-[420px] md:h-[500px] xl:h-[600px] w-full cursor-crosshair" />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8 shadow-sm xl:sticky xl:top-28 h-fit">
            <h3 className="text-2xl font-black text-slate-900">
              Estimate Details
            </h3>

            <p className="mt-3 text-slate-600">
              The polygon tool starts automatically. Click around the garden
              boundary, then click the first point again to finish the shape.
            </p>

            <label className="mt-8 block text-sm font-black uppercase tracking-wide text-slate-700">
              Service
            </label>

            <select
              value={service}
              onChange={(event) =>
                setService(event.target.value as keyof typeof estimateBands)
              }
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 font-bold text-slate-900"
            >
              {Object.keys(estimateBands).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Garden Size
                </p>
                <p className="mt-2 text-2xl lg:text-3xl font-black text-slate-900 break-words">
                  {areaSqM ? `${areaSqM}m²` : "Draw area"}
                </p>
                {areaSqM > 0 && (
                  <p className="mt-1 font-bold text-slate-500">
                    Approx. {sqFt} sq ft
                  </p>
                )}
              </div>

              {areaSqM > 0 && (
                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Lawn Size Category
                  </p>
                  <p className="mt-2 text-2xl lg:text-3xl font-black text-slate-900">
                    {isOversized ? "Extra Large" : currentEstimate.label}
                  </p>
                  <p className="mt-1 font-bold text-slate-500">
                    {isOversized ? "Over 400m²" : currentEstimate.range}
                  </p>
                </div>
              )}

              <div className="rounded-2xl bg-[#07130b] p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-wide text-lime-300">
                  Rough Estimate
                </p>
                <p className="mt-2 text-3xl lg:text-4xl font-black break-words">
                  {areaSqM ? (isOversized ? "Quote needed" : currentEstimate.estimate) : "£—"}
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Final price confirmed after review.
                </p>
              </div>
            </div>

            <a
              href={`mailto:matt.galloway84@gmail.com?subject=G1M%20Garden%20Quote%20Estimate&body=Service:%20${encodeURIComponent(
                service
              )}%0AGarden%20size:%20${areaSqM}m²%20/%20${sqFt}%20sq%20ft%0ALawn%20size:%20${isOversized ? "Extra Large" : currentEstimate.label}%20(${isOversized ? "Over 400m²" : currentEstimate.range})%0AEstimate:%20${isOversized ? "Quote needed" : currentEstimate.estimate}`}
              className="mt-8 inline-flex w-full justify-center rounded-full bg-lime-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-lime-600"
            >
              Email Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}