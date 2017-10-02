/**
 * Starfinder - Combat Tracker
 * ===
 *
 * @module combatTracker
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const COMBAT = require('../../../dist/data/combat.json');

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * CombatTracker
 * @class
 */

export default class CombatTracker {
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _round;
  _startButton;

  template;

  viewModel = {
    isRunning: false,
    currentRound: null,
    characters: [],
    index: null
  };
  /**
   * CombatTracker
   * @constructor
   */
  constructor() {
    this._init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  toggle() {
    const START_BUTTON = document.getElementById('start-button');
    const NEXT_BUTTON = document.getElementById('next-button');
    const PREVIOUS_BUTTON = document.getElementById('previous-button');

    if (!this.viewModel.isRunning) {
      START_BUTTON.textContent = 'Pause';
      NEXT_BUTTON.disabled = false;
      PREVIOUS_BUTTON.disabled = false;
      this.viewModel.isRunning = true;
      this.viewModel.round = 1;
      this.viewModel.index = 0;
    } else {
      START_BUTTON.textContent = 'Start';
      this.viewModel.isRunning = false;
      NEXT_BUTTON.disabled = true;
      PREVIOUS_BUTTON.disabled = true;
    }
    this._clearCharacterRows();
    this._drawCharacterRows();
  }

  next() {
    const NEXT = this.viewModel.index + 1;

    if (NEXT === this.viewModel.characters.length) {
      this.viewModel.round += 1;
      this.viewModel.index = 0;
    } else {
      this.viewModel.index = NEXT;
    }
    this._clearCharacterRows();
    this._drawCharacterRows();
  }

  previous() {
    const NEXT = this.viewModel.index - 1;

    if (NEXT === -1) {
      this.viewModel.round -= 1;
      this.viewModel.index = this.viewModel.characters.length - 1;
    } else {
      this.viewModel.index = NEXT;
    }
    this._clearCharacterRows();
    this._drawCharacterRows();
  }

  roll() {

  }


  sort() {
    this.viewModel.characters.sort((char1, char2) => {
      return (char1.init < char2.init);
    });
  }

  add() {
    const ENCOUNTER_DROPDOWN = document.getElementById('encounter-dropdown');
    const ENCOUNTER = this.viewModel.encounters[ENCOUNTER_DROPDOWN.value];
    const CHARACTERS = [...this.viewModel.characters, ...ENCOUNTER.monsters];

    this.viewModel.characters = CHARACTERS;
    this.sort();
    this._clearCharacterRows();
    this._drawCharacterRows();

  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init() {
    const START_BUTTON = document.getElementById('start-button');
    const NEXT_BUTTON = document.getElementById('next-button');
    const PREVIOUS_BUTTON = document.getElementById('previous-button');
    const ROLL_BUTTON = document.getElementById('roll-button');
    const SORT_BUTTON = document.getElementById('sort-button');
    const ENCOUNTER_DROPDOWN = document.getElementById('encounter-dropdown');
    const ADD_BUTTON = document.getElementById('add-button');

    START_BUTTON.addEventListener('click', (event) => this.toggle(event));
    NEXT_BUTTON.addEventListener('click', (event) => this.next(event));
    PREVIOUS_BUTTON.addEventListener('click', (event) => this.previous(event));
    ADD_BUTTON.addEventListener('click', (event) => this.add(event));
    SORT_BUTTON.addEventListener('click', (event) => this.sort(event));
    this.viewModel.index = -1;
    this.viewModel.characters = COMBAT.players;
    this.viewModel.encounters = COMBAT.encounters;
    this._drawCharacterRows();
    for (const IDX in this.viewModel.encounters) {
      const ENCOUNTER = this.viewModel.encounters[IDX];
      const OPTION = document.createElement('option');

      OPTION.value = IDX;
      OPTION.textContent = ENCOUNTER.name;

      ENCOUNTER_DROPDOWN.append(OPTION);
    }

  }

  _drawCharacterRows() {
    for (const IDX in this.viewModel.characters) {
      const CHARACTER = this.viewModel.characters[IDX];

      this._addCharacterRow(CHARACTER, IDX);
    }
    this._toggleStyle(this.viewModel.index);
  }

  _addCharacterRow(character, index) {
    const PARENT = document.getElementById('character-grid');
    const ELEMENT = document.createElement('div');

    ELEMENT.classList.add('o-cell');
    ELEMENT.classList.add('o-cell--column-12');
    ELEMENT.classList.add('o-grid');
    ELEMENT.classList.add('o-grid--no-spacing');
    ELEMENT.classList.add('o-initiative-table__body');
    ELEMENT.id = `character-${index}`;
    ELEMENT.innerHTML = `<div class="o-cell o-cell--column-4">${character.name}</div>
            <div class="o-cell o-cell--column-1 init"><input type="number" value="${character.init}" /></div>
            <div class="o-cell o-cell--column-2 hit-points">${character.hitPoints.max} / ${character.hitPoints.current}</div>
            <div class="o-cell o-cell--column-2 stamina">${character.stamina.max} / ${character.stamina.current}</div>
            <div class="o-cell o-cell--column-1 kac">${character.kac}</div>
            <div class="o-cell o-cell--column-1 eac">${character.eac}</div>
            <div class="o-cell o-cell--column-1 quick-buttons"></div>`;
    PARENT.appendChild(ELEMENT);
  }

  _clearCharacterRows() {
    const PARENT = document.getElementById('character-grid');
    const ELEMENTS = PARENT.getElementsByClassName('o-initiative-table__body');

    while (ELEMENTS[0]) {
      ELEMENTS[0].parentNode.removeChild(ELEMENTS[0]);
    }
  }

  _addTurnRow(){
    // const PARENT = document.getElementById('character-grid');
    // const ELEMENT = document.createElement('div');
    //
    // ELEMENT.classList.add('o-cell');
    // ELEMENT.classList.add('o-cell--column-12');
    // ELEMENT.classList.add('o-grid');
    // ELEMENT.classList.add('o-grid--no-spacing');
    // ELEMENT.classList.add('o-initiative-table__body');
    // // ELEMENT.id = `character-${index}`;
    //
    // ELEMENT.innerHTML = `<div class="o-cell round"></div>
    //
    // PARENT.appendChild(ELEMENT);
    //
    // for (let idx = 0; idx < 30; idx++) {
    //   const TD = document.createElement('td');
    //
    //   TD.classList.add('round');
    //   TD.textContent = '25';
    //   TR.append(TD);
    // }
    // PARENT.append(TR);
  }

  _toggleStyle(idx) {
    if (idx >= 0) {
      console.log(this.viewModel.characters);
      const ELEMENT = document.getElementById(`character-${idx}`);

      ELEMENT.classList.toggle('active-character');
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
// export default CombatTracker;
