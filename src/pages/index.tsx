import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import RadioList from "@/ui/radio-list";
import AudioPlayer from "@/ui/audio-player";

interface Dashjs {
  MediaPlayer: () => MediaPlayerFactory;
}

interface MediaPlayerFactory {
  create: () => MediaPlayer;
}

interface MediaPlayer {
  initialize: (
    audio: HTMLElement | null,
    url: string,
    autoStart: boolean
  ) => object;
  destroy: () => void;
}

declare const dashjs: Dashjs;

const AKAMAI =
  "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/dash/uk/pc_hd_abr_v2/aks/{SID}.mpd";

export default function Home() {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playerRef = useRef<MediaPlayer | null>(null);

  /**
   * Initialize the dash.js player
   * @description This effect runs when the component mounts and when the URL changes.
   * It creates a new dash.js player instance and initializes it with the audio element and the URL.
   * The effect cleans up by destroying the player instance when the component unmounts.
   * @see {@link https://reactjs.org/docs/hooks-reference.html#useeffect}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio}
   */
  useEffect(() => {
    if (!playerRef.current) {
      try {
        playerRef.current = dashjs.MediaPlayer().create();
      } catch (error) {
        console.error("Failed to initialize dash.js player:", error);
      }
    }

    if (url && audioRef.current) {
      try {
        playerRef.current?.initialize(audioRef.current, url, true);
      } catch (error) {
        console.error("Failed to initialize media player:", error);
      }
    }

    return () => {
      try {
        if (playerRef.current) {
          playerRef.current.destroy();
          playerRef.current = null;
        }
      } catch (error) {
        console.error("Failed to destroy dash.js player:", error);
      }
    };
  }, [url]);

  /**
   * Handle click event on radio list items
   * @param {SyntheticEvent} e - The click event
   * @returns {void}
   * @description This function prevents the default action and stops the event from propagating.
   * It retrieves the ID of the clicked radio station from the data attribute and sets the URL for the media player.
   * The URL is constructed using the Akamai URL template and the station ID.
   * The media player is then initialized with the new URL.
   * The function is memoized using useCallback to prevent unnecessary re-renders.
   * @see {@link https://reactjs.org/docs/hooks-reference.html#usecallback}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/dataset}
   */
  const handleClick = useCallback((e: SyntheticEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLAnchorElement;
    const id = target.dataset.id;
    if (id) {
      setUrl(AKAMAI.replace("{SID}", id));
    } else {
      console.warn("No data-id found on the clicked element.");
    }
  }, []);

  return (
    <>
      <AudioPlayer />
      <RadioList onClick={handleClick} />
    </>
  );
}
