/**
 * Starfinder - Characters View
 * ===
 *
 * @module charactersView
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import CharactersService from '../services/characters-service';
import Card from '../elements/card';
import AbilityScores from './characters/ability-scores';
import Skills from './characters/skills';

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
    this._charactersService = new CharactersService();
    this.state = {
      points: 10,
      character: {
        name: '',
        level: {},
        race: '',
        theme: '',
        size: '',
        speed: '',
        gender: '',
        homeWorld: '',
        alignment: '',
        deity: '',
        abilityScores: {
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
      <div className="o-grid o-characters">
        <div className="o-cell o-cell--column-6 o-page">
          <Card title="Basic Information">
            <div className="o-cell o-cell--column-4">
              <input type="text" className="c-form__control" id="name" onChange={(event) => this._changeProperty(event)} />
              <label htmlFor="name" className="c-form__control__label">Name</label>
            </div>
            <div className="o-cell o-cell--column-3">
              {this._renderDropDown('theme', LOOKUPS.themes, (event) => this._changeProperty(event))}
              <label htmlFor="theme" className="c-form__control__label">Theme</label>
            </div>
            <div className="o-cell o-cell--column-2">
              <input type="text" className="c-form__control" id="level" disabled />
              <label htmlFor="level" className="c-form__control__label" >Level</label>
            </div>
            <div className="o-cell o-cell--column-3">
              <input type="text" className="c-form__control" id="experience" disabled />
              <label htmlFor="experience" className="c-form__control__label">Experience</label>
            </div>
            <div className="o-cell o-cell--column-3">
              {this._renderDropDown('race', LOOKUPS.classes, (event) => this._changeProperty(event))}
              <label htmlFor="class" className="c-form__control__label">Class</label>
            </div>
            <div className="o-cell o-cell--column-4">
              <select className="c-form__control" id="archetype">
              </select>
              <label htmlFor="archetype" className="c-form__control__label">Archetype</label>
            </div>
            <div className="o-cell o-cell--column-3">
              {this._renderDropDown('race', LOOKUPS.races, (event) => this._changeProperty(event))}
              <label htmlFor="race" className="c-form__control__label">Race</label>
            </div>
            <div className="o-cell o-cell--column-2">
              {this._renderDropDown('gender', LOOKUPS.genders, (event) => this._changeProperty(event))}
              <label htmlFor="gender" className="c-form__control__label">Gender</label>
            </div>
            <div className="o-cell o-cell--column-2">
              <input type="text" className="c-form__control" id="size" disabled />
              <label htmlFor="size" className="c-form__control__label">Size</label>
            </div>
            <div className="o-cell o-cell--column-2">
              <input type="text" className="c-form__control" id="speed" disabled />
              <label htmlFor="speed" className="c-form__control__label">Speed</label>
            </div>
            <div className="o-cell o-cell--column-4">
              <input type="text" className="c-form__control" id="home-world" />
              <label htmlFor="home-world" className="c-form__control__label">Home World</label>
            </div>
            <div className="o-cell o-cell--column-4">
              {this._renderDropDown('alignment', LOOKUPS.alignments, (event) => this._changeProperty(event))}
              <label htmlFor="alignment" className="c-form__control__label">Alignment</label>
            </div>
            <div className="o-cell o-cell--column-4">
              {this._renderDropDown('deity', LOOKUPS.deities, (event) => this._changeProperty(event))}
              <label htmlFor="deity" className="c-form__control__label">Deity</label>
            </div>
          </Card>
          <div className="o-grid">
            <div className="o-cell o-cell--column-6">
              <Card title="Ability Scores">
                <AbilityScores abilities={LOOKUPS.abilities} onChange={(event) => this._changeProperty(event)}></AbilityScores>
              </Card>
              <Card title="Skills">
                <Skills skills={LOOKUPS.skills} onChange={(event) => this._changeProperty(event)}></Skills>
              </Card>
            </div>
            <div className="o-cell o-cell--column-6">
              <Card title="Initiative">
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="initiative" disabled />
                  <label htmlFor="initiative" className="c-form__control__label">Total</label>
                </div>
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="initiative-dex-mod" disabled />
                  <label htmlFor="initiative-dex-mod" className="c-form__control__label">Dex</label>
                </div>
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="initiative-misc-mod" disabled />
                  <label htmlFor="initiative-misc-mod" className="c-form__control__label">Misc</label>
                </div>
              </Card>
              <Card title="Health & Resolve">
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="stamina-total" disabled />
                  <label htmlFor="stamina-total" className="c-form__control__label">Stamina</label>
                </div>
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="hit-points-total" disabled />
                  <label htmlFor="hit-points-total" className="c-form__control__label">Hit Points</label>
                </div>
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="resolve-total" disabled />
                  <label htmlFor="resolve-total" className="c-form__control__label">Resolve</label>
                </div>
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="stamina-current" disabled />
                  <label htmlFor="stamina-current" className="c-form__control__label">Current</label>
                </div>
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="hit-points-current" disabled />
                  <label htmlFor="hit-points-current" className="c-form__control__label">Current</label>
                </div>
                <div className="o-cell o-cell--column-4">
                  <input type="text" className="c-form__control" id="resolve-current" disabled />
                  <label htmlFor="resolve-current" className="c-form__control__label">Current</label>
                </div>
              </Card>
              <Card title="Armor Class">
                <div className="o-cell o-cell--column-3">
                <input type="text" className="c-form__control" id="energy-armor-class" disabled />
                <label htmlFor="energy-armor-class" className="c-form__control__label">Energy</label>
              </div>
                <div className="o-cell o-cell--column-3">
                  <input type="text" className="c-form__control" id="energy-armor-bonus" disabled />
                  <label htmlFor="energy-armor-class" className="c-form__control__label">Armor</label>
                </div>
                <div className="o-cell o-cell--column-3">
                  <input type="text" className="c-form__control" id="energy-dex-mod" disabled />
                  <label htmlFor="energy-dex-mod" className="c-form__control__label">Dex</label>
                </div>
                <div className="o-cell o-cell--column-3">
                  <input type="text" className="c-form__control" id="energy-misc-mod" disabled />
                  <label htmlFor="energy-misc-mod" className="c-form__control__label">Misc</label>
                </div>
                <div className="o-cell o-cell--column-3">
                  <input type="text" className="c-form__control" id="kinetic-armor-class" disabled />
                  <label htmlFor="kinetic-armor-class" className="c-form__control__label">Kinetic</label>
                </div>
                <div className="o-cell o-cell--column-3">
                  <input type="text" className="c-form__control" id="kinetic-armor-bonus" disabled />
                  <label htmlFor="kinetic-armor-class" className="c-form__control__label">Armor</label>
                </div>
                <div className="o-cell o-cell--column-3">
                  <input type="text" className="c-form__control" id="kinetic-dex-mod" disabled />
                  <label htmlFor="kinetic-dex-mod" className="c-form__control__label">Dex</label>
                </div>
                <div className="o-cell o-cell--column-3">
                  <input type="text" className="c-form__control" id="kinetic-misc-mod" disabled />
                  <label htmlFor="kinetic-misc-mod" className="c-form__control__label">Misc</label>
                </div>
              </Card>
              <Card title="Saving Throws">
                body
              </Card>
              <Card title="Attack Bonuses">
                body
              </Card>
            </div>
          </div>
        </div>
        <div className="o-cell o-cell--column-6 o-page">
          <section className="c-card">
            <div className="c-card__heading">heading</div>
            <div className="c-card__body">body</div>
          </section>
        </div>
      </div>
    );
  }


  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _dropDownChange(event) {
    console.log(event.target);
  }

  _changeProperty(event) {
    const MESSAGE = {
      entity: 'entity id',
      property: event.target.id,
      value: event.target.value
    };

    console.log(MESSAGE);
  }

  _renderDropDown(id, options, handler) {
    return (
      <select className="c-form__control" id={id} onChange={handler}>
        {options.map((name, key) =>
          <option value={key} key={key}>{name}</option>
        )}
      </select>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default CharactersView;
