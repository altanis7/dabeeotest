/* eslint-disable */
import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
// import ReactDOM from "react-dom";
import "./App.css";
const App = () => {
  const [marker, setmarker] = useState([]);

  const reset = () => {
    setmarker([]);
  };

  useEffect(() => {
    console.log(marker, "확인");
  }, [marker]);
  return (
    <>
      <ScrollContainer className="map">
        <img
          className="mapimg"
          src="map.png"
          onContextMenu={(e) => {
            e.preventDefault();
            if (marker.length === 0) {
              setmarker([
                [e.nativeEvent.offsetX - 25, e.nativeEvent.offsetY - 20],
              ]);
            } else {
              setmarker([
                ...marker,
                [e.nativeEvent.offsetX - 25, e.nativeEvent.offsetY - 20],
              ]);
            }
          }}
        ></img>
        {marker.map((el) => (
          <img
            className="markerimg"
            src="marker.png"
            width="50px"
            height="50px"
            style={{
              transform: `translate(${el[0]}px, ${el[1]}px)`,
            }}
          ></img>
        ))}

        <img className="resetimg" src="reset.png" onClick={reset}></img>
        {/* </div> */}
      </ScrollContainer>
    </>
  );
};
// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
