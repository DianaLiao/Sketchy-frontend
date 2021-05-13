import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentColor, setColor] = useState("#000000")
  const [currentWidth, setWidth] = useState(8)
  let canvasRef = useRef(null);
  let contextRef = useRef(null);

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = 400
    canvas.height = 400

    const context = canvas.getContext("2d")
    
    context.lineCap = "round";
    context.strokeStyle = currentColor;
    context.lineWidth = currentWidth;
    contextRef.current = context;
  };

  const changeColor = (event) => {
    setColor(event.target.value)
  }

  const changeWidth = (event) => {
    setWidth(event.target.value)
  }

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.strokeStyle = currentColor
    contextRef.current.lineWidth = currentWidth
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const saveCanvas = () => {
    const canvas = canvasRef.current
    const dataUrl = canvas.toDataURL()
    return dataUrl
  }



  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        saveCanvas,
        changeColor, 
        changeWidth,
        currentColor,
        currentWidth
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
