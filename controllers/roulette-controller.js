function indexRoulette(req , res) {
	res.status(200).render('roulette/index');
}

function setupGame(req , res) {
	res.status(200).render('roulette/setup');
}

function playGame(req , res) {
	res.status(200).render('roulette/play');
}

module.exports = {
	index: indexRoulette,
	setup: setupGame,
	play: playGame
}