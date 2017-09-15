// DATA STRUCTURES

const CHARACTER = {
  NAME:       0x00000000, // STRING - 16 BYTES
  CLASS:      0x00000011, // INT - 4 BYTES
                          // 0x00000011 CLASS1 - INT - 2 BITS - Pointer to class table
                          // 0x00000013 LEVEL1 - INT - 3 BITS
                          // 0x00000016 CLASS2 - INT - 2 BITS
                          // 0x00000018 LEVEL2 - INT - 3 BITS
                          // 0x0000001B CLASS3 - INT - 2 BITS
                          // 0x0000001D LEVEL3 - INT - 3 BITS
                          // 0x00000020 CLASS4 - INT - 2 BITS
                          // 0x00000022 LEVEL4 - INT - 3 BITS
                          // 0x00000025 EXPERIENCE - INT - 2 BYTES
  ABILITIES:  0x00000035, // INT -
                          // 0x00000035 STRENGTH - INT - 4 BITS
                          // 0x000000 DEXTERITY - INT - 4 BITS
                          // 0x000000 CONSTITUTION - INT - 4 BITS
                          // 0x000000 INTELLIGENCE - INT - 4 BITS
                          // 0x000000 WISDOM - INT - 4 BITS
                          // 0x000000 CHARIMSA - INT - 4 BITS
};

const ITEM = {
  NAME: 0x00000000, // STRING - 16 BYTES
};

const FEAT = {
  NAME: 0x00000000, // STRING - 16 BYTES
};

const SKILL = {
  NAME: 0x00000000, // STRING - 16 BYTES
};

const FEAT = {
  NAME: 0x00000000, // STRING - 16 BYTES
};

const SPELL = {
  NAME: 0x00000000, // STRING - 16 BYTES
};