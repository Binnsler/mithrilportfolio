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
			]),
			m('.splash-buttons', [
				m("a[href='/contact'].green-button", {config: m.route}, 'Contact'),
				m("a[href='/portfolio'].green-button", {config: m.route}, 'Portfolio'),
				m("a[href='http://onthemarkprservice.blogspot.com'].green-button", 'Blog')
			])
		])
	];
};
