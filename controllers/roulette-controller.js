function indexRoulette(req , res) {
	res.status(200).render('roulette/index');
}

function setupGame(req , res) {
	res.status(200).render('roulette/setup');
}

module.exports = {
	index: indexRoulette,
	setup: setupGame
}