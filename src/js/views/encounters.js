/**
 * Starfinder - Encounters
 * ===
 *
 * @module encounters
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Character from './encounters/character';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const COMBAT = require('../../../test/data/combat.json');

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Encounters
 * @class
 * @extends React.Component
 */
class Encounters extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _isRunning;
  _index;
  _players;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Encounters
   * @constructor
   */
  constructor() {
    super();
    this._players = COMBAT.players;
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
            <select id="encounter-dropdown" value={this.state.selectValue} onChange={(event) => this.handleSelect(event)}>
              <option></option>
              {this.state.encounters.map((encounter, index) =>
                this._renderEncounterDropDown(encounter, index)
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
            this._renderCharacter(character, index)
          )}

        </div>
      </div>
    );
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _renderEncounterDropDown(encounter, index) {
    return <option value={index} key={index}>{encounter.name}</option>
  }

  _renderCharacter(character, index) {
    return <Character value={character} key={index} />
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Encounters;
