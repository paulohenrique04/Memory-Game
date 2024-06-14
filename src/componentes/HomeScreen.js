import React from 'react';

function HomeScreen({ onPlay }) {
  return (
    <div className="home-screen">
      <h1>Jogo da Memória</h1>
      <button onClick={onPlay}>Play</button>
      <div className="images">
        <img src="/img/MMS.png" alt="mms" />
        <img src="/img/iguatu.png" alt="igt" />
        <img src="/img/agrinho.png" alt="agrinho" />
        <img src="/img/senar.png" alt="senar" />
      </div>
    </div>
  );
}

export default HomeScreen;
