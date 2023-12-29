const nxPreset = require('@nx/jest/preset').default;
// some modules are using ES modules, so we need to transform them
const transformModules = ["hex-object-id"];
module.exports = {
  ...nxPreset,
  // testEnvironment: 'node',
  // testEnvironmentOptions: {
    
  // },
  transformIgnorePatterns: [
    `node_modules/(?!(${transformModules.join("|")})/)`, // replace 'your-module' and 'another-module' with the actual module names
  ],
};
