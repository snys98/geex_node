const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  'ts-jest/presets/default-esm':{} // or other ESM presets
};
