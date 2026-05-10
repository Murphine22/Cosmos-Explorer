import React, { useState } from 'react';
import './PlanetCard.css';

const PLANET_COLORS = {
  Mercury: { from: '#b5b5b5', to: '#6e6e6e', glow: 'rgba(181,181,181,0.3)' },
  Venus: { from: '#f5deb3', to: '#d4a853', glow: 'rgba(213,165,70,0.3)' },
  Earth: { from: '#6fb3f5', to: '#2d6db4', glow: 'rgba(100,180,255,0.3)' },
  Mars: { from: '#e87c5c', to: '#c0392b', glow: 'rgba(220,80,50,0.3)' },
  Jupiter: { from: '#e8c99a', to: '#c8752a', glow: 'rgba(220,160,80,0.3)' },
  Saturn: { from: '#f0d9a0', to: '#c8a032', glow: 'rgba(220,180,80,0.3)' },
  Uranus: { from: '#7de8e8', to: '#2ab5c8', glow: 'rgba(100,220,220,0.3)' },
  Neptune: { from: '#4b7fd4', to: '#1a3f8f', glow: 'rgba(80,120,220,0.3)' },
  Pluto: { from: '#c4a882', to: '#8b6347', glow: 'rgba(180,140,100,0.3)' },
};

const PLANET_FACTS = {
  Mercury: 'Smallest planet, extreme temperatures from -180°C to 430°C',
  Venus: 'Hottest planet despite not being closest to the Sun',
  Earth: 'The only known planet harboring life',
  Mars: 'Home to Olympus Mons, the largest volcano in the solar system',
  Jupiter: 'Largest planet, its Great Red Spot is older than 400 years',
  Saturn: 'Its rings are made of ice and rock, spanning 282,000 km',
  Uranus: 'Rotates on its side with an axial tilt of 98°',
  Neptune: 'Winds reach 2,100 km/h — the strongest in the solar system',
  Pluto: 'Reclassified as a dwarf planet in 2006 by the IAU',
};

const PLANET_SYMBOLS = {
  Mercury: '☿', Venus: '♀', Earth: '🜨', Mars: '♂',
  Jupiter: '♃', Saturn: '♄', Uranus: '⛢', Neptune: '♆', Pluto: '♇',
};

function PlanetCard({ planet, index }) {
  const [imgError, setImgError] = useState(false);
  const colors = PLANET_COLORS[planet.planet] || { from: '#aaa', to: '#555', glow: 'rgba(150,150,150,0.3)' };
  const fact = PLANET_FACTS[planet.planet] || '';
  const symbol = PLANET_SYMBOLS[planet.planet] || '●';

  const animDelay = `${index * 0.08}s`;

  return (
    <article
      className="planet-card"
      style={{ '--planet-glow': colors.glow, animationDelay: animDelay }}
    >
      {/* Order badge */}
      <div className="planet-card__order" style={{
        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Figure element as required */}
      <figure className="planet-card__figure">
        {!imgError ? (
          <img
            src={planet.image}
            alt={`${planet.planet} — planet ${index + 1} from the Sun`}
            className="planet-card__image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className="planet-card__image-fallback"
            style={{
              background: `radial-gradient(ellipse at 30% 30%, ${colors.from}, ${colors.to})`
            }}
            aria-label={`${planet.planet} illustration`}
          >
            <span className="planet-card__symbol">{symbol}</span>
          </div>
        )}
        <div className="planet-card__image-overlay" style={{
          background: `radial-gradient(ellipse at 50% 100%, ${colors.glow} 0%, transparent 70%)`
        }}></div>
      </figure>

      {/* Content */}
      <div className="planet-card__content">
        <div className="planet-card__symbol-label">{symbol}</div>
        <h3 className="planet-card__name">{planet.planet}</h3>

        <div className="planet-card__distance">
          <span className="planet-card__distance-label">Distance from Sun</span>
          <span className="planet-card__distance-value">
            {planet.distanceFromSun.toLocaleString()}
            <span className="planet-card__distance-unit"> million km</span>
          </span>
        </div>

        <div className="planet-card__divider" style={{
          background: `linear-gradient(90deg, ${colors.from}, transparent)`
        }}></div>

        <p className="planet-card__fact">{fact}</p>

        <figcaption className="planet-card__caption">
          Planet {index + 1} of 9 from the Sun
        </figcaption>
      </div>

      {/* Hover glow */}
      <div className="planet-card__glow" style={{
        background: `radial-gradient(ellipse at 50% 50%, ${colors.glow} 0%, transparent 70%)`
      }}></div>
    </article>
  );
}

export default PlanetCard;
