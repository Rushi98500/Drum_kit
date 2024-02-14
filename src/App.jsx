import { useState, useEffect } from "react";
import "./App.css";
import DrumKit from "./Component/DrumKit";
import boom from "./Sounds/boom.wav";
import clap from "./Sounds/clap.wav";
import hihat from "./Sounds/hihat.wav";
import kick from "./Sounds/kick.wav";
import openhat from "./Sounds/openhat.wav";
import ride from "./Sounds/ride.wav";
import snare from "./Sounds/snare.wav";
import tink from "./Sounds/tink.wav";
import tom from "./Sounds/tom.wav";

function App() {
  const [activeKey, setActiveKey] = useState(null);
  const sounds = [
    {
      name: "boom",
      sound: boom,
      key: "A",
    },
    {
      name: "clap",
      sound: clap,
      key: "S",
    },
    {
      name: "hihat",
      sound: hihat,
      key: "D",
    },
    {
      name: "kick",
      sound: kick,
      key: "F",
    },
    {
      name: "openhat",
      sound: openhat,
      key: "G",
    },
    {
      name: "ride",
      sound: ride,
      key: "H",
    },
    {
      name: "snare",
      sound: snare,
      key: "J",
    },
    {
      name: "tink",
      sound: tink,
      key: "K",
    },
    {
      name: "tom",
      sound: tom,
      key: "L",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const soundToPlay = sounds.find(
        (sound) => sound.key.toUpperCase() === event.key.toUpperCase()
      );
      if (soundToPlay) {
        new Audio(soundToPlay.sound).play();
        setActiveKey(soundToPlay.key);
        setTimeout(() => setActiveKey(null), 200); // Reset active key after 200ms
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []); // Depend on sounds, so if it changes, the effect will re-run

  return (
    <div className="App bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center py-5">
      <h1 className='text-4xl md:text-5xl lg:text-6xl mb-20 text-white font-bold'>Drum Kit</h1>
      <div className="drum-grid grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4">
        {sounds.map((sound) => (
          <DrumKit
            key={sound.key}
            letter={sound.key}
            sound={sound.sound}
            isActive={activeKey === sound.key}
            play={() => new Audio(sound.sound).play()}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
