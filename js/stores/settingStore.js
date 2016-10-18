import wheelStore from './wheelStore.js';

let _settings = {
	players: [
		{
			name: "Jim",
			score: 0
		},
		{
			name: "Amy",
			score: 0
		}
	],
	endlessMode: true,
	russianMode: false,
	winScore: 10,
	wheel: wheelStore.getWheel()
};

let SettingStore =  {

  getSettings () {
    return _settings;
  },

  setSettings (key, settings) {
  	_settings[key] = settings;
  },

  resetSettings () {
  	_settings = {
			players: [
				{
					name: "Jim",
					score: 0
				},
				{
					name: "Amy",
					score: 0
				}
			],
			endlessMode: true,
			russianMode: false,
			winScore: 10,
			wheel: wheelStore.getWheel()
		};
  }

};

module.exports = SettingStore;