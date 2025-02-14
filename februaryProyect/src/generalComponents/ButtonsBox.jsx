import { useState } from "react";
import "../styles/ButtonsBox.css";

const ButtonsBox = () => {
  const [songs, setSongs] = useState(["dust", "city"]);
  const [currentSong, setCurrentSong] = useState(0);
  const audioButton = new Audio("/sounds/click.mp3"); // Ruta al archivo de sonido
  const playSound = () => {
    audioButton.play(); // Reproduce el sonido
  };

  const [audioSong, setAudioSong] = useState(
    new Audio(`../../public/sounds/city.mp3`)
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

    setCurrentSong(currentSong + 1);
    audioSong.pause();
    audioSong.src = `/sounds/${songs[currentSong]}.mp3`; // Ruta al archivo de sonido
    audioSong.play(); // Reproduce el sonido
  };

  const minusSong = () => {
    setCurrentSong(currentSong - 1);
    audioSong.pause();
    audioSong.src = `/sounds/${songs[currentSong]}.mp3`; // Ruta al archivo de sonido
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
                <svg
                  viewBox="0 -960 960 960"
                  className="svg1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M200-440v-80h560v80H200Z"></path>
                </svg>
              </button>
            </div>
            <div className="btn-player">
              <button className="button2" onClick={plusSong}>
                <svg
                  viewBox="0 -960 960 960"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg2"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBox;
