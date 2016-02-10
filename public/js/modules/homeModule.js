module.exports = function(){
	return [
		var Homepage = {}

		Homepage.controller = function(){}

		Homepage.view = mixLayout(
			nav, 

			function(){
				return [
					// m('p', 'This is the homepage.')
					m('.six-columns', [
						m('img.splash-portrait', {src: '/images/abbiePic.jpg'})
					]),
					m('.six-columns', [
						m('div.center-me', [
							m('img.splash-logo', {src: '/images/on_the_mark.png'})
						]),		
						m('.splash-text', [
							m('h2.main-title', 'DIGITAL MEDIA + CONTENT MANAGEMENT'),
							m('p.main-text', 'As a Creative Content writer, I specialize in the digital media, business writing, and P.R marketing for a variety of companies in the Denver, CO region. I have worked in association with RootHouse Studio, ALOC Media, and After Midnite Media during the Discovery Channel International series, American Car Prospector.'),
							m('p.main-text', "Features of my work can be found on various websites and organizations like Nature's Root, Good Seed, and National Hemp Association where I frequently appear as a Guest Writer."),
						]),
						m('.splash-buttons', [
							m("a[href='/contact'].green-button", {config: m.route}, 'Contact'),
							m("a[href='/portfolio'].green-button", {config: m.route}, 'Portfolio'),
							m("a[href='/blog'].green-button", {config: m.route}, 'Blog')
						])
					])
				];
			};, 

			footer)
	]
};