import React, { useState } from "react";
import HomeScreen from "./componentes/HomeScreen";
import Cards from "./componentes/Cards";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      {isPlaying ? (
        <>
          <h1>Jogo da Memória</h1>
          <Cards />
        </>
      ) : (
        <HomeScreen onPlay={() => setIsPlaying(true)} />
      )}
    </div>
  );
}

export default App;
