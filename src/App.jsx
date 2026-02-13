import "./App.css"
import { useState } from "react"

function App() {

  const [colorType, setColorType] = useState("hex");
  const [currentColor, setCurrentColor] = useState("#000000");

  function hexToRgb(hexValue) {
    let newRgb = hexValue.replace(/^#/, "");
    const r = parseInt(newRgb.slice(0, 2), 16);
    const g = parseInt(newRgb.slice(2, 4), 16);
    const b = parseInt(newRgb.slice(4), 16);
    newRgb = `rgb(${r}, ${g}, ${b})`;
    return newRgb;
  }

  function rgbToHex(rgbValue) {
    let newHex = rgbValue.match(/\d+/g).map(n => parseInt(n));
    const r = newHex[0].toString(16).padStart(2, "0");
    const g = newHex[1].toString(16).padStart(2, "0");
    const b = newHex[2].toString(16).padStart(2, "0");
    newHex = "#" + r + g + b;
    return newHex;
  }

  function randIndex(len) {
    return Math.floor(Math.random() * len);
  }

  function generateRandColor() {
    if (colorType === "hex") {
      let hexColor = "#"
      const components = ["0", "1", "2", "3", "4", "5", "6", "7", 
                          "8", "9", "a", "b", "c", "d", "e", "f"];
      for (let i = 0; i < 6; i++) {
        hexColor += components[randIndex(components.length)]; 
      }
      setCurrentColor(hexColor);
    } else if (colorType === "rgb") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const rgbColor = `rgb(${r}, ${g}, ${b})`;
      setCurrentColor(rgbColor);
    }
  }

  function toggleHex() {
    colorType === "rgb" && setCurrentColor(rgbToHex(currentColor));
    setColorType("hex");
  }

  function toggleRgb() {
    colorType === "hex" && setCurrentColor(hexToRgb(currentColor));
    setColorType("rgb");
  }

  return (
    <>
      <div className="container" style={{backgroundColor: currentColor}}>
        <button onClick={toggleHex}>Change to HEX</button>
        <button onClick={toggleRgb}>Change to RGB</button>
        <button onClick={generateRandColor}>Generate random color</button>
      </div>
      <div className="color-value">
        {currentColor}
      </div>
    </>
  );
}

export default App