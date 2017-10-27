/**
 * Starfinder - AbilityScores
 * ===
 *
 * @module abilityScores
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Card from '../../elements/card';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * AbilityScores
 * @class
 * @extends React.Component
 */
class AbilityScores extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _messageService;
  _charactersService;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * AbilityScores
   * @constructor
   */
  constructor(props) {
    super(props);

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  render() {
    const LOWERCASE = name.toLowerCase();

    return (
      <Card title="Ability Scores">
        {this.props.abilities.map((name, key) => {
          return [
            <div className="o-cell o-cell--column-3" key={key}>
              <input type="number"
                className="c-form__control"
                id={LOWERCASE}
                onChange={(event) => this.props.onChange(event)} />
              <label htmlFor={LOWERCASE} className="c-form__control__label">{name}</label>
            </div>,
            <div className="o-cell o-cell--column-3" key={`${key}-modifier`}>
              <input type="text" className="c-form__control" id={`${LOWERCASE}-modifer`} disabled />
              <label htmlFor={`${LOWERCASE}-modifer`} className="c-form__control__label">Modifier</label>
            </div>,
            <div className="o-cell o-cell--column-3" key={`${key}-adjusted`}>
              <input type="text" className="c-form__control" id={`${LOWERCASE}-adjusted`} disabled />
              <label htmlFor={`${LOWERCASE}-adjusted`} className="c-form__control__label">Adj Score</label>
            </div>,
            <div className="o-cell o-cell--column-3" key={`${key}-adjusted-modifier`}>
              <input type="text" className="c-form__control" id={`${LOWERCASE}-adjusted-modifer`} disabled />
              <label htmlFor={`${LOWERCASE}-adjusted-modifer`} className="c-form__control__label">Adj Mod</label>
            </div>
          ];
        })}
      </Card>
    );
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AbilityScores;
