import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // mediaQueryList= {
    //     matches: boolean,
    //     media: string,
    //     addEventListener(),
    //     removeEventListener()
    //   }

    setMatches(mediaQueryList.matches);

    const handler = (event) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handler);

    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
