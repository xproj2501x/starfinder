/**
 * Starfinder - Skills
 * ===
 *
 * @module skills
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Skills
 * @class
 * @extends React.Component
 */
class Skills extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Skills
   * @constructor
   */
  constructor(props) {
    super(props);

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  render() {
    return this.props.skills.map((name, key) => {
      const LOWERCASE = name.toLowerCase();

      return [
        <div className="o-cell o-cell--column-4" key={key}>
          <input type="text" className="c-form__control" id={LOWERCASE} disabled />
          <label htmlFor={LOWERCASE} className="c-form__control__label">{name}</label>
        </div>,
        <div className="o-cell o-cell--column-2" key={`${key}-ranks`}>
          <input type="number"
                 className="c-form__control"
                 id={`${LOWERCASE}-ranks`}
                 onChange={(event) => this.props.onChange(event)}/>
          <label htmlFor={`${LOWERCASE}-ranks`} className="c-form__control__label">Ranks</label>
        </div>,
        <div className="o-cell o-cell--column-2" key={`${key}-class-bonus`}>
          <input type="text" className="c-form__control" id={`${name}-class-bonus`} disabled />
          <label htmlFor={`${LOWERCASE}-class-bonus`} className="c-form__control__label">Class</label>
        </div>,
        <div className="o-cell o-cell--column-2" key={`${key}-ability-modifier`}>
          <input type="text" className="c-form__control" id={`${LOWERCASE}-ability-modifier`} disabled />
          <label htmlFor={`${LOWERCASE}-ability-modifier`} className="c-form__control__label">Ability</label>
        </div>,
        <div className="o-cell o-cell--column-2" key={`${key}-misc-modifier`}>
          <input type="text" className="c-form__control" id={`${LOWERCASE}-misc-modifier`} disabled />
          <label htmlFor={`${LOWERCASE}-misc-modifier`} className="c-form__control__label">Misc</label>
        </div>
      ]});
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Skills;
