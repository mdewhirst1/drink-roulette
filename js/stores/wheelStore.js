let _wheel = {
	name: "test wheel",
	drinks: [
		{
			name: "vodka",
			score: 10,
			count: 1
		},
		{
			name: "water",
			score: 2,
			count: 1
		}
	]
};

let WheelStore =  {
  getWheel () {
    return _wheel;
  },
};

module.exports = WheelStore;