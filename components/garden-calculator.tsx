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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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

  const handleLocationSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!token || !mapRef.current || !searchQuery.trim()) return;

    setIsSearching(true);
    setSearchError("");

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchQuery
        )}.json?access_token=${token}&country=gb&limit=1`
      );

      if (!response.ok) {
        throw new Error("Unable to search for that location.");
      }

      const data = await response.json();
      const feature = data.features?.[0];

      if (!feature) {
        setSearchError("No location found. Try a full postcode or address.");
        return;
      }

      const [lng, lat] = feature.center;

      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 19,
        essential: true,
      });
    } catch {
      setSearchError("Unable to search right now. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const sqFt = Math.round(areaSqM * 10.7639);
  const lawnSize = areaSqM < 50 ? "small" : areaSqM <= 150 ? "medium" : "large";
  const currentEstimate = estimateBands[service][lawnSize];
  const isOversized = areaSqM > 400;

  const statusLabel = areaSqM > 0 ? "Area Measured" : "Ready to Draw";
  const statusDotClass = areaSqM > 0 ? "bg-lime-500" : "bg-amber-400";

  return (
    <section id="calculator" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-lime-50/80 to-transparent" />
      <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-lime-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-4 inline-flex rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-lime-700 shadow-sm">
            Garden Quote Calculator
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight text-slate-950 sm:text-5xl">
            Draw your lawn. Get a rough estimate.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Use the satellite map to outline your lawn, choose a service and get an instant guide price before requesting a quote.
          </p>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-4">
          {["Find Property", "Draw Lawn", "Select Service", "Request Quote"].map(
            (step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-2xl border border-lime-100 bg-white px-4 py-3 shadow-sm shadow-lime-900/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-500 text-sm font-black text-white">
                  {index + 1}
                </span>
                <span className="text-xs font-black uppercase tracking-wide text-slate-700">
                  {step}
                </span>
              </div>
            )
          )}
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2 text-xs font-black uppercase tracking-wide text-lime-700">
          <span className="rounded-full border border-lime-100 bg-lime-50 px-3 py-2">
            Satellite Measurement Tool
          </span>
          <span className="rounded-full border border-lime-100 bg-lime-50 px-3 py-2">
            Instant Lawn Estimate
          </span>
          <span className="rounded-full border border-lime-100 bg-lime-50 px-3 py-2">
            No Obligation Quote
          </span>
        </div>

        <div className="mb-6 rounded-[2rem] border border-lime-100 bg-white p-4 shadow-xl shadow-lime-900/5 md:p-5">
          <form
            onSubmit={handleLocationSearch}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Enter postcode or address"
              className="min-h-12 flex-1 rounded-2xl border border-lime-100 bg-lime-50/40 px-4 font-bold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:bg-white"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="min-h-12 rounded-2xl bg-lime-500 px-6 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-lime-950/10 transition hover:bg-lime-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSearching ? "Searching..." : "Find Property"}
            </button>
          </form>

          {searchError && (
            <p className="mt-3 text-sm font-bold text-red-600">
              {searchError}
            </p>
          )}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_430px]">
          <div className="overflow-hidden rounded-[2rem] border border-lime-100 bg-slate-100 shadow-xl shadow-lime-900/5">
            <div className="flex items-center justify-between gap-4 border-b border-lime-100 bg-white px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-700">
                  Satellite Lawn Mapper
                </p>
                <p className="mt-1 text-sm font-bold text-slate-500">
                  Zoom in, then draw around the lawn area.
                </p>
              </div>
              <div className="hidden rounded-full bg-lime-50 px-3 py-2 text-xs font-black uppercase tracking-wide text-lime-700 sm:block">
                Draw Mode
              </div>
            </div>
            <div ref={mapContainer} className="h-[420px] w-full cursor-crosshair md:h-[500px] xl:h-[600px]" />
          </div>

          <div className="h-fit rounded-[2rem] border border-lime-100 bg-white p-6 shadow-xl shadow-lime-900/5 xl:sticky xl:top-28 lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black uppercase text-slate-950">
                  Estimate Details
                </h3>
                <p className="mt-3 text-slate-600">
                  Search for a postcode or address, then draw around the lawn area.
                  Click the first point again to finish the shape.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-full border border-lime-100 bg-lime-50 px-3 py-2 text-xs font-black uppercase tracking-wide text-lime-700">
                <span className={`h-2.5 w-2.5 rounded-full ${statusDotClass}`} />
                {statusLabel}
              </div>
            </div>

            <label className="mt-8 block text-sm font-black uppercase tracking-[0.16em] text-slate-700">
              Service
            </label>

            <select
              value={service}
              onChange={(event) =>
                setService(event.target.value as keyof typeof estimateBands)
              }
              className="mt-3 w-full rounded-2xl border border-lime-100 bg-lime-50/40 px-4 py-4 font-bold text-slate-900 outline-none transition focus:border-lime-500 focus:bg-white"
            >
              {Object.keys(estimateBands).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-lime-100 bg-lime-50/50 p-4">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Garden Size
                </p>
                <p className="mt-2 text-xl lg:text-2xl font-black text-slate-900 break-words">
                  {areaSqM ? `${areaSqM}m²` : "Draw area"}
                </p>
                {areaSqM > 0 && (
                  <p className="mt-1 font-bold text-slate-500">
                    Approx. {sqFt} sq ft
                  </p>
                )}
              </div>

              {areaSqM > 0 && (
                <div className="rounded-2xl border border-lime-100 bg-lime-50/50 p-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Lawn Size Category
                  </p>
                  <p className="mt-2 text-xl lg:text-2xl font-black text-slate-900">
                    {isOversized ? "Extra Large" : currentEstimate.label}
                  </p>
                  <p className="mt-1 font-bold text-slate-500">
                    {isOversized ? "Over 400m²" : currentEstimate.range}
                  </p>
                </div>
              )}

              <div className="col-span-2 rounded-[1.5rem] bg-[#07130b] p-5 text-white shadow-lg shadow-lime-950/10">
                <p className="text-sm font-bold uppercase tracking-wide text-lime-300">
                  Estimated Cost
                </p>
                <p className="mt-2 text-3xl lg:text-4xl font-black break-words">
                  {areaSqM ? (isOversized ? "Quote needed" : currentEstimate.estimate) : "£—"}
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Guide price only. Final quote confirmed after review.
                </p>
              </div>
            </div>

            <a
              href={`mailto:matt.galloway84@gmail.com?subject=G1M%20Garden%20Quote%20Estimate&body=Service:%20${encodeURIComponent(
                service
              )}%0AGarden%20size:%20${areaSqM}m²%20/%20${sqFt}%20sq%20ft%0ALawn%20size:%20${isOversized ? "Extra Large" : currentEstimate.label}%20(${isOversized ? "Over 400m²" : currentEstimate.range})%0AEstimate:%20${isOversized ? "Quote needed" : currentEstimate.estimate}`}
              className="mt-5 inline-flex w-full justify-center rounded-full bg-lime-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-lime-950/10 transition hover:bg-lime-600"
            >
              Request This Quote
            </a>
            <p className="mt-4 text-center text-xs font-bold leading-5 text-slate-500">
              This tool provides an estimate only. G1M will confirm the final price after reviewing the lawn area and service requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}