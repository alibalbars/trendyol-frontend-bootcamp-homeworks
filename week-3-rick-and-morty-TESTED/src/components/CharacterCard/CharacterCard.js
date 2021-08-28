import './character-card.css';

export default function CharacterCard({ character, episodeNames }) {

  return (
    <div className={`card ${character.gender == 'Male' ? 'green' : ''}  ${episodeNames ? 'long' : 'short'}`}>
      <div className="additional">
        <div className="user-card">
          <div className="level center">
            {character.gender}
          </div>
          <div className="points center">
            {character.status}
          </div>
          <img width="110" height="110" src={character.image} alt={`${character.name} image`} />

        </div>
        <div className="more-info">
          <h1>{character.name}</h1>
          <ul className="character-specs">
            <li><strong>Type:</strong> {character.species || 'Unknown'}</li>
            <li><strong>Location:</strong> {character?.location?.name || 'Unknown'}</li>
            {episodeNames ? (
              <li className="episodes-li">
                <strong>Last 5 Episodes:</strong>
                <ul className="episode-list">
                  {episodeNames?.map((episode) => <li key={episode}>{episode}</li>)}
                </ul>
              </li>) : null}
          </ul>

        </div>

      </div>
      <div className="general">
        <h1>{character.name}</h1>
        <ul className="character-specs">
          <li><strong>Type:</strong> {character.species || 'Unknown'}</li>
          <li><strong>Location:</strong> {character?.location?.name || 'Unknown'}</li>
          {episodeNames ? (
              <li className="episodes-li">
                <strong>Last 5 Episodes:</strong>
                <ul className="episode-list">
                  {episodeNames?.map((episode) => <li key={episode}>{episode}</li>)}
                </ul>
              </li>) : null}
        </ul>

        {episodeNames ? null : (<span className="more">Click the card for more info</span>)}

      </div>
    </div>
  );
}
