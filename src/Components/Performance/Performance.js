import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './Performance.css';

const Performance = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="container spectacle">
      <div className="row title">
        <h3 className="red-text accent-4">Le Spectacle</h3>
      </div>
      <p>« Le cirque est un poème en acte. À partager.  »</p>
      <div className="row video">
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=D7uRsk38Cd4"
          playing={play} 
          volume={0.5}
          onClick={() => setPlay(!play)}
        />
      </div>
      <div className="row description">
        <p>DURÉE : 1H50</p>
        <p>ÉCRITURE, MISE EN SCÈNE, SCÉNOGRAPHIE ET DIRECTION ARTISTIQUE : BERNARD KUDLAK</p>
        <p>COMPOSITION ET DIRECTION MUSICALE : BENOIT SCHICK</p>
        <p>
          Les adieux du Cirque Plume sont un hymne merveilleux à la nature. 
          Un ultime spectacle baigné de poésie, de musique, d’humour et de tendresse. 
          Le Cirque Plume revient au Pin Galant pour partager ce qui sera son spectacle d’adieu, sa « Dernière saison ». 
          Depuis trente ans, Bernard Kudlak fait descendre des forêts du Jura ses mondes et ses merveilles, ses monstres et ses anges, 
          ses joies enfantines, sa tendresse, sa poésie, son esprit bohème, ses paradis perdus. Pionnier du nouveau cirque, Plume mêle poésie visuelle, 
          théâtre, chant, acrobatie, jonglerie, numéros de clown et musique en live dirigée par Benoit Schick dont la voix rappelle celle de Tom Waits. 
          Histoire de finir en beauté, la troupe composée pour moitié de jeunes circassiens surdoués et pour moitié des piliers de la compagnie, 
          a concocté un spectacle qui évoque les saisons et la vie de la nature. Tourbillon des feuilles mortes, danse des flocons de neige, 
          fracas des icebergs, ballet des parfums, farandole de fleurs… et bien d’autres secrets, bien d’autres chimères encore. 
          « La Dernière saison » est un poème à partager. Une dernière fois.
        </p>
        <p>« Pour cet ultime tour de piste, les embardées poétiques sont les plus courts chemins pour décoller. »</p>
        <p>LE MONDE</p>
      </div>
    </div>
  );
}

export default Performance;