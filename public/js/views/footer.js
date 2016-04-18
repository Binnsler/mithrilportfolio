module.exports = function(){
	return [
		m('.footer-block'), [
			m("a[href='/']", {class:'footer-nav-link', config: m.route}, "Home"),
			m("a[href='/portfolio']", {class:'footer-nav-link', config: m.route}, "Portfolio"),
			m("a[href='/blog']", {class:'footer-nav-link', config: m.route}, "Blog Posts"),
			m("a[href='/contact']", {class:'footer-nav-link', config: m.route}, "Contact")
		],
		m('.footer-social-container', [
			m("a[target='_blank']", {href:'https://twitter.com/onthemark_pr'},
				m('img.footer-social', {src: '/images/twitter_icon.svg'})
			),
			m("a[target='_blank']", {href:'https://www.facebook.com/onthemarkpr.org'},
				m('img.footer-social', {src: '/images/facebook_icon.svg'})
			),
			m("a[target='_blank']", {href:'https://plus.google.com/u/0/112890351802641518428/posts'},
				m('img.footer-social', {src: '/images/google_icon.svg'})
			)
		])
	];
};
