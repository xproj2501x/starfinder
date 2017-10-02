/**
 * Starfinder - Characters View
 * ===
 *
 * @module charactersView
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import { MESSAGES } from '../../engine/constants';
import React from 'react';
import MessageService from '../../framework/services/message';
import CharactersService from '../services/characters-service';
import AbilityScores from './characters/ability-scores';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const LOOKUPS = require('../../../../dist/data/lookups.json');

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * CharactersView
 * @class
 * @extends React.Component
 */
class CharactersView extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _messageService;
  _charactersService;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * CharactersView
   * @constructor
   */
  constructor() {
    super();
    this._messageService = MessageService.create();
    this._charactersService = new CharactersService();
    this.state = {
      points: 10,
      character: {
        name: '',
        abilities: {
          strength: 10,
          dexterity: 10,
          constitution: 10,
          intelligence: 10,
          wisdom: 10,
          charisma: 10
        }
      }
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    this._charactersService.createCharacter();
  }

  render() {
    return (
      <div className="o-cell o-cell--column-6 c-card o-characters">
        <section>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={this.state.character.name} onChange={(event) => this.handleTextBox(event)}/>
          <label htmlFor="race">Race</label>
          <select id="race" >
            {LOOKUPS.races.map((race, index) => <option value={index} key={index}>{race}</option>)}
          </select>
          <label htmlFor="theme">Theme</label>
          <select id="theme" >
            {LOOKUPS.themes.map((theme, index) => <option value={index} key={index}>{theme}</option>)}
          </select>
        </section>
        <section className="o-grid">
          <div className="o-cel o-cell--column-6">
            <section>
              <AbilityScores names={LOOKUPS.abilities} values={this.state.character.abilities} />
            </section>
            <section>
              Skills
            </section>
          </div>
          <div className="o-cel o-cell--column-6">
            <section>
              Initiative
            </section>
            <section>
              Health
            </section>
            <section>
              Armor Class
            </section>
            <section>
              Saves
            </section>
            <section>
              Attack Bonuses
            </section>
            <section>
              Weapons
            </section>
          </div>
        </section>
      </div>
    );
  }

  handleTextBox(event) {
    this.setState({character: {
      name: event.target.value
    }});
  }

  handleAbilityChange(event) {
    const ABILITY_NAME = event.target.name;
    const STATE_NAME = `character.abilities[${ABILITY_NAME}]`;
    const ABILITY = this.state.character.abilities[ABILITY_NAME];
    const NEW_VALUE = event.target.value;

    // if (NEW_VALUE > ABILITY && this.state.points > 0) {
    //   this.setState({points: ++this.state.points});
    //   this.setState({character: {
    //     abilities: {
    //       [ABILITY_NAME]: NEW_VALUE
    //     }
    //   }});
    // }
    // } else if (NEW_VALUE < ABILITY && ABILITY > 0) {
    //
    //   this.setState({
    //     points: --this.state.points,
    //     [STATE_NAME]: NEW_VALUE});
    // }
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default CharactersView;
