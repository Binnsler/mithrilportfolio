var portfolioData = require('../../json/portfolio.json');

module.exports = function(){
	return [
		m('.main-portfolio',
			portfolioData.portfolio.map(function(portfolioItem){
				return [
					m('.portfolio-item', [
						m('.six-columns', [
							m("a[target='_blank']", {href: portfolioItem.link},
								m('img.portfolio-pic', {src: portfolioItem.pic})
							)
						]),
						m('.six-columns.portfolio-text-div', [
							m("a[target='_blank']", {href: portfolioItem.link},
								m('h2.portfolio-title', portfolioItem.title)
							),
							m('p.portfolio-text', portfolioItem.description)
						])
					])
				]
			})
		)
	];
};
