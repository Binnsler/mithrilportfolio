module.exports = function(){
	return [
		// m('p', 'This is the homepage.')
		m('.six-columns', [
			m('#splash-portrait', [
				m('#splash-portrait-container.absolute-center-children',[
					m('h1#callout-text', 'Working closely with your business or organization to build, promote, and capture recognition of your growing public audience.'),
					m('p#callout-paragraph', 'On The Mark PR'),
					m('p#callout-credit', ''),
				])
			])
		]),
		m('.six-columns', [
			m('div.center-me', [
				m('img.splash-logo', {src: '/images/on_the_mark.png'})
			]),
			m('.splash-text', [
				m('h3.main-title', 'CONTENT WRITING - BRAND AWARENESS - COMMUNITY OUTREACH'),
				m('p.main-text', 'On The Mark PR is an independent contracting service specializing in Digital Media, PR marketing, Community Outreach, and Media Management regarding pivotal topics in health and wellness, art, education, and science, with a focus on industrial hemp and the sustainable industries.'),
				m('p.main-text', "Through engaging media stories and compelling content strategies, On The Mark provides creative concepts to advance media marketing, accelerate communications efforts, and build a budding audience around campaigns that fits your needs. "),
				m('p.main-text', "Abbie Marks, Owner and Founder of On The Mark PR established the company in April to solidify a voice for hemp-related cannabis companies in the support of public awareness and sustainable, local agriculture"),
				m('p.main-text', "Working in Print, TV, Radio, and Web, Abbie has collaborated with companies and media collectives in the Colorado region including RootHouse Studio, ALOC Media, and After Midnite Media. As publicist for NoCo Hemp Expo 2016, she assists in the media marketing production of what has become the largest international hub in the U.S. for hemp-integration within the natural foods and natural products market."),
				m('p.main-text', "Her work can be found at ", m('a[href="http://www.nocohempexpo.com/"]', {class:'page-link'}, 'NoCo Hemp Expo'), ", " , m('a[href="http://nationalhempassociation.org/"]', {class:'page-link'}, 'National Hemp Association'), ", and " , m('a[href="https://alocmedia.com/"]', {class:'page-link'}, 'ALOC Media'), " where she frequently appears as a Guest Writer."),
			]),
			m('.splash-buttons', [
				m("a[href='/contact'].green-button", {config: m.route}, 'Contact'),
				m("a[href='/portfolio'].green-button", {config: m.route}, 'Portfolio'),
				m("a[href='http://onthemarkprservice.blogspot.com'].green-button", 'Blog')
			])
		])
	];
};
