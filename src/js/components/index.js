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