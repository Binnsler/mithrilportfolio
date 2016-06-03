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
				m('h3.main-title', 'OUR FOUNDER'),
				m('p.main-text', "Working in Print, TV, Radio, and Web, Abbie Marks has collaborated with companies and media collectives in the Colorado region including RootHouse Studio, ALOC Media, and After Midnite Media."),
				m('p.main-text', "As publicist for NoCo Hemp Expo 2016, she assists in the media marketing production of what has become the largest international hub in the U.S. for hemp-integration within the natural foods and natural products market."),
				m('p.main-text', "Her work can be found at ", m('a[href="http://nationalhempassociation.org/"]', {class:'page-link'}, 'National Hemp Association'), ", " , m('a[href="https://alocmedia.com/"]', {class:'page-link'}, 'ALOC Media'), ", and " , m('a[href="http://www.huffingtonpost.com/"]', {class:'page-link'}, 'Huffington Post'), " where she frequently appears as a Guest Writer."),
				m('h3.main-title', 'OUR MISSION'),
				m('p.main-text', "On The Mark PR was founded in 2016 to solidify a voice for hemp and cannabis-related businesses in the support of public awareness and transparency. Our mission is to develop compelling, cutting-edge stories and media content that demonstrate positive social change. Committed to helping the public stay informed, On The Mark PR has expanded that focus to include issues in health and wellness, sustainability, and natural foods. "),
				m('p.main-text', "Located in Denver, Colorado, On The Mark PR works in collaboration with our clients to help create strategies that result in higher brand awareness and ROI."),
			]),
		])
	];
};
