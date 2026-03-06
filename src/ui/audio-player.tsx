import { useEffect, useRef } from "react";
import { radioStationId } from "@/signals";

const AKAMAI = 'https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/dash/uk/pc_hd_abr_v2/aks/{ID}.mpd';

export default function AudioPlayer() {
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    const streamUrl = AKAMAI.replace('{ID}', radioStationId.value);
    console.log(streamUrl)
    // const audioPlayer = audioPlayerRef.current;
  }, []);

  return (
    <div className="mt-6 flex justify-center items-center">
      <audio ref={audioPlayerRef} id="audio-player" controls></audio>
    </div>
  );
}
