import { useEffect, useRef, useState } from "react";
import shaka from 'shaka-player/dist/shaka-player.compiled';

export type ShakaProps = {
  manifestUri: string
}

export function Shaka({manifestUri }: ShakaProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null);

  const initVideo = async () => {
    if(!videoLoaded && manifestUri) {
      const video = videoRef.current;
      const player = new shaka.Player();
      await player.attach(video);
  
      (window as any).player = player;
  
      player.addEventListener('error', console.error);
  
      try {
        await player.load(manifestUri);
      } catch (e) {
        console.error(e)
      }
    }
  }

  initVideo()

  useEffect(() => {
    shaka.polyfill.installAll();
    if (!shaka.Player.isBrowserSupported()) {
      console.error('Shaka player does not support the browser')
    }
  }, [])

  return (
    <div>
      <video ref={videoRef}>

      </video>
    </div>
  );
}