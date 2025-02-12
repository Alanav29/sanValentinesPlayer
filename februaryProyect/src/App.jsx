import "./App.css";
import ButtonsBox from "./generalComponents/ButtonsBox";
import cassette from "../public/cassette.svg";

function App() {
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <div className="cassette-width">
        <img src={cassette} alt="cassettePLayer" />
      </div>
      <div className="z-2 position-absolute mt-5 cassette-padding">
        <div className="cassette">
          <div className="top-tape">
            <div className="arrow-mark-container">
              <div className="arrow-mark">🡁</div>
            </div>
            <div className="brand-mark">SONY</div>
          </div>
          <div className="medium-tape">
            <div className="label-container">
              <div className="label">
                <div className="top-label">
                  <div className="predefined-text">INDEX</div>
                  <div className="top-text">
                    <div>Love</div>
                    <div>Memories (First Time Version)</div>
                  </div>
                </div>
                <div className="medium-label">
                  <div className="side-name">A</div>
                  <div className="gap-container">
                    <div className="gap">
                      <div className="left tapereel">
                        <div className="notch notch-1"></div>
                        <div className="notch notch-2"></div>
                        <div className="notch notch-3"></div>
                      </div>
                      <div className="central-gap">
                        <div className="left innertape"></div>
                        <div className="right innertape"></div>
                      </div>
                      <div className="right tapereel">
                        <div className="notch notch-1"></div>
                        <div className="notch notch-2"></div>
                        <div className="notch notch-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="noise-reduction">
                    NOISE REDUCTION
                    <div className="box">
                      <div>ON</div>
                      <div>OFF</div>
                    </div>
                  </div>
                </div>
                <div className="bottom-label">
                  <div className="brand-text">
                    <div className="maintext">SONY</div>
                    <div className="subtext">TYPE I (NORMAL) POSITION</div>
                  </div>
                  <div className="arrow-text">
                    <span>🡆</span>
                  </div>
                  <div className="model-text">
                    <span>AHF</span>46
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-tape">
            <div className="magnetic-shield-container">
              <div className="magnetic-shield">
                <div className="left-hole-container">
                  <div className="hole hole-1"></div>
                  <div className="hole hole-2"></div>
                </div>
                <div className="screw-container">
                  <div className="screw"></div>
                </div>
                <div className="right-hole-container">
                  <div className="hole hole-3"></div>
                  <div className="hole hole-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="screw screw-1">
            <div className="dot"></div>
          </div>
          <div className="screw screw-2">
            <div className="dot"></div>
          </div>
          <div className="screw screw-3">
            <div className="dot"></div>
          </div>
          <div className="screw screw-4">
            <div className="dot"></div>
          </div>
        </div>
      </div>

      <div className="controls-container z-2 position-absolute margin-top-cassette">
        <ButtonsBox />
      </div>
    </div>
  );
}

export default App;
