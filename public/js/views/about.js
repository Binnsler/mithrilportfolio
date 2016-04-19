module.exports = function(){
	return [
		m('.six-columns', [
			m('#about-portrait', [
				m('#splash-portrait-container.absolute-center-children',[
					m('h1#callout-text', 'Making media that matters.')
				])
			])
		]),
		m('.six-columns', [
			m('.splash-text', [
				m('h3.main-title', 'ABOUT ME'),
				m('p.main-text', "Abbie Marks, Owner and Founder of On The Mark PR established the company in April to solidify a voice for hemp-related cannabis companies in the support of public awareness and sustainable, local agriculture"),
				m('p.main-text', "Working in Print, TV, Radio, and Web, Abbie has collaborated with companies and media collectives in the Colorado region including RootHouse Studio, ALOC Media, and After Midnite Media. As publicist for NoCo Hemp Expo 2016, she assists in the media marketing production of what has become the largest international hub in the U.S. for hemp-integration within the natural foods and natural products market."),
				m('p.main-text', "Her work can be found at ", m('a[href="http://www.nocohempexpo.com/"]', {class:'page-link'}, 'NoCo Hemp Expo'), ", " , m('a[href="http://nationalhempassociation.org/"]', {class:'page-link'}, 'National Hemp Association'), ", and " , m('a[href="https://alocmedia.com/"]', {class:'page-link'}, 'ALOC Media'), " where she frequently appears as a Guest Writer."),
			]),
		])
	];
};
