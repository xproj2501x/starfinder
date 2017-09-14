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
const CHARACTERS = [
  {
  init: 0,
  name: 'Player 1',
  stamina: {
    max: 25,
    current: 25,
  },
  hitPoints: {
    max: 25,
    current: 25,
  },
  kac: 17,
  eac: 17
},
{
  init: 0,
  name: 'Player 2',
  stamina: {
    max: 21,
    current: 2,
  },
  hitPoints: {
    max: 21,
    current: 21,
  },
  kac: 12,
  eac: 12
},
{
  init: 0,
  name: 'Player 3',
  stamina: {
    max: 30,
    current: 30,
  },
  hitPoints: {
    max: 30,
    current: 30,
  },
  kac: 20,
  eac: 18
},
  {
    init: 0,
    name: 'Player 4',
    stamina: {
      max: 30,
      current: 30,
    },
    hitPoints: {
      max: 30,
      current: 30,
    },
    kac: 20,
    eac: 18
  },
  {
    init: 0,
    name: 'Player 5',
    stamina: {
      max: 21,
      current: 2,
    },
    hitPoints: {
      max: 21,
      current: 21,
    },
    kac: 12,
    eac: 12
  },
  {
    init: 0,
    name: 'Player 6',
    stamina: {
      max: 21,
      current: 2,
    },
    hitPoints: {
      max: 21,
      current: 21,
    },
    kac: 12,
    eac: 12
  }
];
////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * CombatTracker
 * @class
 */
class CombatTracker {
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _round;
  _startButton;

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

    const ROUND = document.getElementById('round');

    if (!this.viewModel.isRunning) {
      START_BUTTON.textContent = 'Pause';
      NEXT_BUTTON.disabled = false;
      PREVIOUS_BUTTON.disabled = false;
      this.viewModel.isRunning = true;
      this.viewModel.round = 0;
      this.viewModel.index = 0;

    } else {
      START_BUTTON.textContent = 'Start';
      this.viewModel.isRunning = false;
      NEXT_BUTTON.disabled = true;
      PREVIOUS_BUTTON.disabled = true;
    }
    ROUND.textContent = this.viewModel.round;
  }

  next() {
    const NEXT = this.viewModel.index + 1;
    const ROUND = document.getElementById('round');

    if (NEXT === this.viewModel.characters.length) {
      this.viewModel.round += 1;
      this.viewModel.index = 0;
    } else {
      this.viewModel.index = NEXT;
    }
    ROUND.textContent = this.viewModel.round;
  }

  previous() {
    const NEXT = this.viewModel.index - 1;
    const ROUND = document.getElementById('round');

    if (NEXT === -1) {
      this.viewModel.round -= 1;
      this.viewModel.index = this.viewModel.characters.length - 1;
    } else {
      this.viewModel.index = NEXT;
    }
    ROUND.textContent = this.viewModel.round;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init() {
    const START_BUTTON = document.getElementById('start-button');
    const NEXT_BUTTON = document.getElementById('next-button');
    const PREVIOUS_BUTTON = document.getElementById('previous-button');

    START_BUTTON.addEventListener('click', (event) => this.toggle(event));
    NEXT_BUTTON.addEventListener('click', (event) => this.next(event));
    PREVIOUS_BUTTON.addEventListener('click', (event) => this.previous(event));
    this.viewModel.characters = CHARACTERS;
    this.viewModel.characters.forEach((character) => {
      this._addCharacterRow(character);
      this._addTurnRow();
    });

  }

  _addCharacterRow(character) {
    const PARENT = document.getElementById('characters');
    const ELEMENT = document.createElement('tr');

    ELEMENT.classList.add('character');

    const INITIATIVE = document.createElement('td');

    INITIATIVE.classList.add('initiative');

    const INPUT = document.createElement('input');

    INPUT.type = 'text';
    INPUT.value = character.init;
    INITIATIVE.append(INPUT);
    ELEMENT.append(INITIATIVE);

    const NAME = document.createElement('td');

    NAME.classList.add('name');
    NAME.textContent = character.name;
    ELEMENT.append(NAME);

    const STAMINA = document.createElement('td');

    STAMINA.classList.add('stamina');
    STAMINA.textContent = `${character.stamina.max} / ${character.stamina.current}`;
    ELEMENT.append(STAMINA);

    const HIT_POINTS = document.createElement('td');

    HIT_POINTS.classList.add('hit-points');
    HIT_POINTS.textContent = `${character.hitPoints.max} / ${character.hitPoints.current}`;
    ELEMENT.append(HIT_POINTS);

    const KAC = document.createElement('td');

    KAC.classList.add('kinetic-armor-class');
    KAC.textContent = character.kac;
    ELEMENT.append(KAC);

    const EAC = document.createElement('td');

    EAC.classList.add('energy-armor-class');
    EAC.textContent = character.eac;
    ELEMENT.append(EAC);

    const QUICK = document.createElement('td');

    QUICK.classList.add('quick-actions');
    QUICK.textContent = '. . .';
    ELEMENT.append(QUICK);
    PARENT.appendChild(ELEMENT);
  }

  _addTurnRow(){
    const PARENT = document.getElementById('rounds');
    const TR = document.createElement('tr');

    for (let idx = 0; idx < 30; idx++) {
      const TD = document.createElement('td');

      TD.classList.add('round');
      TD.textContent = '25';
      TR.append(TD);
    }
    PARENT.append(TR);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default CombatTracker;
