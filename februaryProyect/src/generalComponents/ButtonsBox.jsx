import { useState } from "react";
import "../styles/ButtonsBox.css";

const ButtonsBox = () => {
  const [songs, setSongs] = useState([
    "city",
    "babybemine",
    "27",
    "onemoretime",
    "feelmylove",
    "efimera",
    "tofindyou",
    "dust",
    "labios",
    "up",
    "galactica",
    "notalone",
    "teregalo",
    "justlike",
    "mondo",
  ]);
  const [currentSong, setCurrentSong] = useState(0);
  const audioButton = new Audio("/sanValentinesPlayer/sounds/click.mp3"); // Ruta al archivo de sonido
  const playSound = () => {
    audioButton.play(); // Reproduce el sonido
  };

  const [audioSong, setAudioSong] = useState(
    new Audio(`/sanValentinesPlayer/sounds/city.mp3`)
  );
  // Ruta al archivo de sonido
  const playFirstSong = () => {
    playSound();
    audioSong.play(); // Pausa el sonido
  };

  const pauseSong = () => {
    playSound();
    audioSong.pause(); // Pausa el sonido
  };

  const plusSong = () => {
    console.log(currentSong + 1);

    if (currentSong === songs.length - 1) {
      setCurrentSong(0);
      audioSong.pause();
      audioSong.src = `/sanValentinesPlayer/sounds/${songs[0]}.mp3`; // Ruta al archivo de sonido
      audioSong.play(); // Reproduce el sonido
      return;
    }

    setCurrentSong(currentSong + 1);
    audioSong.pause();
    audioSong.src = `/sanValentinesPlayer/sounds/${songs[currentSong]}.mp3`; // Ruta al archivo de sonido
    audioSong.play(); // Reproduce el sonido
  };

  const minusSong = () => {
    if (currentSong === 0) {
      setCurrentSong(0);
      audioSong.pause();
      audioSong.src = `/sanValentinesPlayer/sounds/${songs[0]}.mp3`; // Ruta al archivo de sonido
      audioSong.play(); // Reproduce el sonido
      return;
    }
    setCurrentSong(currentSong - 1);
    audioSong.pause();
    audioSong.src = `/sanValentinesPlayer/sounds/${songs[currentSong]}.mp3`; // Ruta al archivo de sonido
    audioSong.play(); // Reproduce el sonido
  };
  return (
    <div>
      <div className="main mt-5 max-buttons-width">
        <div className="buttons d-flex flex-row">
          <div className="button_pair me-3">
            <div className="btn-player">
              <button
                className="button3 d-flex align-items-center"
                onClick={playFirstSong}
              >
                <i className="bi bi-play-fill fs-1 text-white"></i>
              </button>
            </div>
            <div className="btn-player">
              <button
                className="button4 d-flex align-items-center"
                onClick={pauseSong}
              >
                <i className="bi bi-pause-fill fs-1 text-white"></i>
              </button>
            </div>
          </div>
          <div className="button_pair ms-1 ms-sm-3">
            <div className="btn-player">
              <button className="button1" onClick={minusSong}>
                <i className="bi bi-skip-backward-fill fs-1"></i>
              </button>
            </div>
            <div className="btn-player">
              <button className="button2" onClick={plusSong}>
                <i className="bi bi-skip-forward-fill fs-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBox;
