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
	endlessMode: false,
	russianMode: false,
	winScore: 10,
	wheel: "coming soon"
};

let SettingStore =  {

  getSettings () {
    return _settings;
  },

  setSettings (key, settings) {
  	// console.log("before update");
  	// console.log(_settings);
  	_settings[key] = settings;
  	console.log("after update");
  	console.log(_settings);
  } 

};

module.exports = SettingStore;