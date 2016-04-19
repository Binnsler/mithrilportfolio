module.exports = function(){
	return [
		m('.six-columns', [
			m('#contact-portrait')
		]),
		m('.six-columns', [
			m('.contact-text', 'If you are interested in reaching out, please send me an email at onthemarkprservice@gmail.com.'),
			m('div.center-me', [
				m("a.twitter-timeline[href='https://twitter.com/onthemark_pr'][data-widget-id='701794881178456064']", {config: function(el, isInit) {
						if (!isInit) {
								var script = document.createElement("script")
								script.id = "twitter-wjs"
								script.src = "https://platform.twitter.com/widgets.js"
								document.body.appendChild(script)
						}
				}}, "Tweets by @onthemark_pr")
			])
	])
];
};
