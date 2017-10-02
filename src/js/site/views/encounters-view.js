/**
 * Starfinder - Encounters View
 * ===
 *
 * @module encountersView
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Character from './encounters/character';
import CharactersService from '../services/characters-service';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const COMBAT = require('../../../../dist/data/combat.json');

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Encounters
 * @class
 * @extends React.Component
 */
class EncountersView extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _charactersService;
  _isRunning;
  _index;
  _players;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * EncountersView
   * @constructor
   */
  constructor() {
    super();
    this._charactersService = new CharactersService();
    this._players = [];
    this._isRunning = false;
    this._index = -1;
    this.state = {
      round: 0,
      characters: this._players,
      encounters: COMBAT.encounters,
      selectValue: -1
    };

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    return this._charactersService.getCharacters()
      .then((characters) => {
        characters.forEach((character) => {
          if (character.type === 'Player') {
            this._players.push(character);
          }
        });
        this.setState({characters: this._players});
      });
  }

  toggle() {
    this._isRunning = !this._isRunning;
    if (this._isRunning && this._index === -1) {
      this._index = 0;
    }
  }

  next() {
    if (this._isRunning) {
      const IS_END = Boolean(this._index === (this.state.characters.length - 1));

      if (IS_END) {
        this._index = -1;
        this.setState({round: ++this.state.round});
      }
      ++this._index;
    }
  }

  roll() {
    if (!this._isRunning) {
      alert('next');
    }
  }

  sort() {
    alert('sort');
  }

  addMonsters() {
    if (!this._isRunning && this.state.selectValue >= 0) {
      const MONSTERS = this.state.encounters[this.state.selectValue].monsters;
      let characters = this.state.characters.slice();

      characters = [...characters, ...MONSTERS];
      this.setState({characters: characters});
    }
  }

  clear() {
    if (!this._isRunning) {
      this.setState({characters: this._players});
    }
  }

  reset() {
    if (!this._isRunning) {
      alert('next');
    }
  }

  handleSelect(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    return (
      <div className="o-cell o-cell--column-4 c-card o-encounters">
        <div className="c-card__body o-grid o-initiative-table" id="character-grid">
          <div className="o-cell o-cell--column-6">
            <button className="c-button c-button--primary" onClick={() => this.toggle()}>Start</button>
            <button className="c-button c-button--primary" onClick={() => this.next()}> &rarr; </button>
          </div>
          <div className="o-cell o-cell--column-6">
            <select value={this.state.selectValue} onChange={(event) => this.handleSelect(event)}>
              <option></option>
              {this.state.encounters.map((encounter, index) =>
                <option value={index} key={index}>{encounter.name}</option>
              )}
            </select>
            <button className="c-button c-button--primary" onClick={() => this.addMonsters()}> + </button>
          </div>
          <div className="o-cell o-cell--column-6">
            <button className="c-button c-button--primary" onClick={() => this.roll()}> Roll </button>
            <button className="c-button c-button--primary" onClick={() => this.sort()}> Sort </button>
          </div>
          <div className="o-cell o-cell--column-6">
            <button className="c-button c-button--primary" onClick={() => this.reset()}> reset </button>
            <button className="c-button c-button--primary" onClick={() => this.clear()}> clear </button>
          </div>
          <div className="o-cell o-cell--column-12 o-grid o-grid--no-spacing o-initiative-table__heading">
            <div className="o-cell o-cell--column-4">Name</div>
            <div className="o-cell o-cell--column-1 init">Init</div>
            <div className="o-cell o-cell--column-2 hit-points">HP</div>
            <div className="o-cell o-cell--column-2 stamina">Stamina</div>
            <div className="o-cell o-cell--column-1 kac">KAC</div>
            <div className="o-cell o-cell--column-1 eac">EAC</div>
            <div className="o-cell o-cell--column-1 quick-buttons"></div>
          </div>
          {this.state.characters.map((character, index) =>
            <Character value={character} key={index} />
          )}

        </div>
      </div>

    );
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default EncountersView;
