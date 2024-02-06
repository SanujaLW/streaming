import { useEffect, useRef, useState } from "react";
import shaka from 'shaka-player/dist/shaka-player.compiled';

export type ShakaProps = {
  manifestUri: string
}

export function Shaka({manifestUri }: ShakaProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null);

  const initVideo = async () => {
    const videoElem = videoRef.current
    if(videoElem && !videoLoaded && manifestUri) {
      const player = new shaka.Player();
      await player.attach(videoElem);

      (window as any).player = player;
  
      player.addEventListener('error', console.error);
      try {
        await player.load(manifestUri);
        setVideoLoaded(true)
      } catch (e) {
        console.error(e)
      }
    }
  }

  useEffect(() => {
    initVideo()
  }, [manifestUri, videoLoaded])

  useEffect(() => {
    shaka.polyfill.installAll();
    if (!shaka.Player.isBrowserSupported()) {
      console.error('Shaka player does not support the browser')
    }
  }, [])

  return (
      <video autoPlay={true} controls={true} ref={videoRef}>

      </video>
  );
}