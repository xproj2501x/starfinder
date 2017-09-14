const COMPONENT = {
  ID: 0,
  TYPE: 1,
  HAS_MODIFIERS: 2,
  STATE: 3
};

const MODIFIER = {
  ID: 0,
  TYPE: 1,
  SOURCE: 2,
  STATE: 3
};

const CHARACTER_DATA_STRUCTURE = {
  NAME: 0x0000,   // STRING - 32 BYTES
  CLASS: 0x0021,  // INT - 4 BYTES
                  // 0x0021 CLASS - INT - 2 BITS - Pointer to class table
                  // 0x0023 LEVEL - INT - 3 BITS
                  // ...026
                  // 0x0027 EXPERIENCE - INT
  ABILITIES: 0X00
};

class Entity {
  _id;
  _components;

  constructor() {
    this._components = [];
  }

  attachComponent(component) {
    const TYPE = component.type;

    if (this._components[TYPE]) {
      throw new Error(`Component type; ${TYPE} already to entity id: ${this._id}`);
    }

    this._components[TYPE] = [];
    this._components[TYPE].push();
  }

  detachComponent(type) {
    this._components[type] = 0;
  }

  unlock(key) {
    const COMPONENTS = [];

    for (let idx = 1; idx < key.length; idx++) {
      const LOCK = this._components[idx - 1];

      if ((key[idx]) && (!LOCK)) {
        throw new Error(`Invalid key: ${key} for entity id: ${this._id}`);
      }
      COMPONENTS.push(LOCK);
    }
    return COMPONENTS;
  }

}