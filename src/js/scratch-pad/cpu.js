/**
 * Starfinder - CPU
 * ===
 *
 * @module cpu
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const OPERATIONS = {
  ADD: 'ADD',       // ADD [val1] [val2] [dest] Addition - sets [dest] to [val1] + [val2]
  AND: 'AND',       // AND [val1] [val2] [dest] Bitwise AND - store [val1] & [val2] in [dest]
  ANT: 'ANT',       // ANT [val1] [val2] [dest] Bitwise AND-NOT - store [val1] & (![val2]) in [dest]
  MLZ: 'MLZ',       // MLZ [test] [val1] [dest] Move if Not Zero - sets [dest] to [value] if test is less than zero
  MNZ: 'MNZ',       // MNZ [test] [val1] [dest] Move if Not Zero - sets [dest] to [value] if test is not zero
  OR:  'OR',        // OR  [val1] [val2] [dest] Bitwise OR - store [val1} | [val2] in [dest]
  SL:  'SL',        // SL  [val1] [val2] [dest] Shift Left - store [val1] << [val2] in [dest]
  SRA: 'SRA',       // SRA [val1] [val2] [dest] Shift Right Arithmetic - store [val1] >> [val2] in [dest]
  SRL: 'SRL',       // SRL [val1] [val2] [dest] Shift Right Logical - store [val1] >>> [val2] in [dest]
  SUB: 'SUB',       // SUB [val1] [val2] [dest] Subtract - sets [dest] to [val1] - [val2]
  XOR: 'XOR'        // XOR [val1] [val2] [dest] Bitwise XOR - store [val1] ^ [val2] in [dest]
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * CPU
 * @class
 */
class CPU {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _registers;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * CPU
   * @constructor
   */
  constructor() {
    this._registers = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  execute(code) {
    const OP_CODES = code.split('\r\n');

    OP_CODES.forEach((code) => {
      const PARTS = code.split(' ');

      switch (PARTS[0]) {
        case OPERATIONS.ADD:
          this._handleADD(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.AND:
          this._handleAND(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.ANT:
          this._handleANT(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.MLZ:
          this._handleMLZ(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.MNZ:
          this._handleMNZ(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.OR:
          this._handleOR(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.SL:
          this._handleSL(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.SRA:
          this._handleSRA(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.SRL:
          this._handleSRL(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.SUB:
          this._handleSUB(PARTS[1], PARTS[2]);
          break;
        case OPERATIONS.XOR:
          this._handleXOR(PARTS[1], PARTS[2]);
          break;
        default:
          throw new Error(`Invalid OP Code: ${PARTS[0]}`);
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _handleADD(val1, val2) {
    return val1 + val2;
  }

  _handleAND(val1, val2) {
    return (val1 & val2);
  }

  _handleANT(val1, val2) {
    return (val1 & (![val2]));
  }

  _handleMLZ(test, value) {

  }

  _handleMNZ(test, value) {

  }

  _handleOR(val1, val2) {
    return (val1 | val2);
  }

  _handleSL(val1, val2) {

  }

  _handleSRA(val1, val2) {

  }

  _handleSRL(val1, val2) {

  }

  _handleSUB(val1, val2) {

  }

  _handleXOR(val1, val2) {

  }


  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {CPU}
   */
  static create() {
    return new CPU();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default CPU;
