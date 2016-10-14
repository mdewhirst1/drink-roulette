// INDEX - GET /
function indexRoulette(req , res) {
	res.status(200).render('roulette/index');
}

module.exports = {
	index: indexRoulette
}