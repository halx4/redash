import { isString, isObject, get } from "lodash";
import { useState, useEffect } from "react";
import axios from "axios";
import { visualizationsSettings } from "@/visualizations/visualizationsSettings";
import createReferenceCountingCache from "@/lib/referenceCountingCache";

const cache = createReferenceCountingCache();

export default function useLoadGeoJson(mapType: any) {
  console.log("useLoadGeoJson(): w/ map type:")
  console.log(mapType)

  const [geoJson, setGeoJson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("useLoadGeoJson mapType changed. reloading...")

    const mapUrl = get(visualizationsSettings, `choroplethAvailableMaps.${mapType}.url`, undefined);
    console.log("mapUrl:")
    console.log(mapUrl)

    console.log("viz settings:")
    console.log(visualizationsSettings)

    if (isString(mapUrl)) {
      console.log("map url is string")

      setIsLoading(true);
      let cancelled = false;

      const promise = cache.get(mapUrl, () => axios.get(mapUrl).catch(() => null));
      promise.then(({
        data
      }: any) => {
        console.log("promise returned:")
        console.log(data)
        if (cancelled) {
          console.log("promise request cancelled")
        }

        if (!cancelled) {
          console.log("promise request NOT cancelled")

          // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'object | null' is not assignable... Remove this comment to see the full error message
          setGeoJson(isObject(data) ? data : null);
          setIsLoading(false);
        }
      });

      return () => {
        cancelled = true;
        cache.release(mapUrl);
      };
    } else {
      console.log("mapUrl is NOT string. setting geojson=null")

      setGeoJson(null);
      setIsLoading(false);
    }
  }, [mapType]);

  return [geoJson, isLoading];
}
