import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import './PlanetsSection.css';

const PLANETS_API = 'https://anurella.github.io/json/planets.json';

// Fallback planet images using reliable public domain space images
const PLANET_IMAGES = {
  Mercury: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg',
  Venus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg',
  Earth: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/600px-The_Earth_seen_from_Apollo_17.jpg',
  Mars: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg',
  Jupiter: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
  Saturn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg',
  Uranus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg',
  Neptune: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
  Pluto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/600px-Pluto_in_True_Color_-_High-Res.jpg',
};

function PlanetsSection() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setLoading(true);
        const response = await fetch(PLANETS_API);
        if (!response.ok) throw new Error('Failed to fetch planet data');
        const data = await response.json();
        // Inject reliable images
        const enriched = data.map((p) => ({
          ...p,
          image: PLANET_IMAGES[p.planet] || p.image,
        }));
        setPlanets(enriched);
      } catch (err) {
        setError(err.message);
        // Fallback: show planets with static data
        const fallback = Object.entries(PLANET_IMAGES).map(([name, img], i) => ({
          planet: name,
          distanceFromSun: [57.9, 108.2, 149.6, 227.9, 778.6, 1433.5, 2872.5, 4495.1, 5906.4][i],
          image: img,
        }));
        setPlanets(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <section id="planets" className="planets-section">
      <div className="planets-section__bg" aria-hidden="true"></div>

      <div className="container">
        {/* Header */}
        <div className="planets-section__header">
          <div className="section-label">Fetch API · Live Data</div>
          <h2 className="section-title">The Solar System</h2>
          <p className="planets-section__desc">
            Real-time data fetched from our planetary database. Each world tells a story 
            billions of years in the making.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="planets-section__loading">
            <div className="planets-section__loader">
              <div className="planets-section__loader-ring"></div>
              <div className="planets-section__loader-ring planets-section__loader-ring--2"></div>
              <div className="planets-section__loader-dot"></div>
            </div>
            <p className="planets-section__loading-text">Scanning the cosmos...</p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="planets-section__error">
            <span>⚠ API fetch attempted — displaying cached data</span>
          </div>
        )}

        {/* Planet Grid */}
        {!loading && planets.length > 0 && (
          <div className="planets-section__grid">
            {planets.map((planet, index) => (
              <PlanetCard
                key={planet.planet}
                planet={planet}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PlanetsSection;
