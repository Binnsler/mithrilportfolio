(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var nav = require('./views/nav.js');
var home = require('./views/home.js');
var portfolio = require('./views/portfolio.js');
// var contact = require('./views/contact.js');
var footer = require('./views/footer.js');
// var blog = require('./views/blog.js');

// Layout Mixin
var mixLayout = function(navTemplate, sectionTemplate, footerTemplate){

		return [
			m('header#header', navTemplate()),
			m('section#body', sectionTemplate()),
			m('footer#footer', footerTemplate())
		];

};

// Homepage component
var Homepage = {}

Homepage.controller = function(){}

Homepage.view = function(controller){
	return [
		mixLayout(nav, home, footer)
	]
}



// Portfolio component
var Portfolio = {}

Portfolio.controller = function(){}

Portfolio.view = function(controller){
	return [
		mixLayout(nav, portfolio, footer)
	]
}


// Blog component
var Blog = {}

Blog.blogModel = function(){
}

Blog.controller = function(){
		this.getBlog = m.request({
			method: 'GET',
			url: 'https://www.googleapis.com/blogger/v3/blogs/72041621138645005/posts?key=AIzaSyCK_aG7n7mPUG_srfuLK2PEvdPpHzkFH58'
		})
}

Blog.view = function(controller){
	return[
		mixLayout(nav, function(){
			return [
				m('div.blog-header.absolute-center-children', [
					m('h1.blog-title', 'On The Mark Blog')
				]),
				m('div.all-posts', [
					controller.getBlog().items.map(function(post){
						return [
							m('div.post-container', [
								m('h3.post-title', post.title),
								m('p.post-content', m.trust(post.content))
							]),
						];
					})
				])
			]

		}, footer)
	]
}

// Form Component
var Form = function(formData){
	formData = formData || {}
	this.name = m.prop(formData.name || "")
	this.email = m.prop(formData.email || "")
	this.message = m.prop(formData.message || "")

}

Form.email = function(formData){
		m.request({
			url: '//formspree.io/jamie.m.binns@gmail.com',
			method: 'POST',
			dataType: 'json',
			data: {
				name: formData.name(),
				email: formData.email(),
				message: formData.message()
				// message: 'Second time around.'
			},
			unwrapSuccess: function(response){
				return response.responseData;
			},
			unwrapError: function(response){
				return response.error;
			}
		})
}

// Portfolio component
var Contact = {}

Contact.controller = function(args){
	this.error = m.prop('')

	this.getForm = m.prop(new Form());

	this.sendEmail = function(formData){
			Form.email(formData)
	}.bind(this);
}

Contact.view = function(controller){
	return [
		mixLayout(nav, function(){
			return [
				// m('p', 'This is the homepage.')
				m('.six-columns', [
					m('#contact-portrait', [
						m('#contact-portrait-container.absolute-center-children',[
							m('h1#contact-callout-text', 'Making media that matters.')
						])
					])
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
				// 	m('form', [
				// 		m('.input-container', [
				// 			m('label', 'Name'),
				// 			m('input.contact-input[placeholder=Name]', {keyup: m.withAttr('value', controller.getForm().name), value: controller.getForm().name()})
				// 		]),
				// 		m('.input-container', [
				// 			m('label', 'Email'),
				// 			m('input.contact-input[placeholder=Email]', {keyup: m.withAttr('value', controller.getForm().email), value: controller.getForm().email()})
				// 		]),
				// 		m('.input-container', [
				// 			m('label', 'Message'),
				// 			m('input.contact-input[placeholder=Message]', {keyup: m.withAttr('value', controller.getForm().message), value: controller.getForm().message()})
				// 		]),
				// 		m('.splash-buttons', [
				// 			m("button.green-button", {onclick: controller.sendEmail(controller.getForm())}, 'Submit')
				// 		])
				// 	])
				])

			];
		}, footer),
	]
}

// Hook up our components to routes
m.route(document.body, "/", {
    "/": Homepage,
    "/portfolio": Portfolio,
    "/blog": Blog,
    "/contact": Contact
});

},{"./views/footer.js":2,"./views/home.js":3,"./views/nav.js":4,"./views/portfolio.js":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
module.exports = function(){
	return [
		m("a[href='/']", {class:'footer-nav-link', config: m.route}, "Home"),
		m("a[href='/portfolio']", {class:'footer-nav-link', config: m.route}, "Portfolio"),
		m("a[href='http://onthemarkprservice.blogspot.com']", {class:'footer-nav-link'}, "Blog"),
		m("a[href='/contact']", {class:'footer-nav-link', config: m.route}, "Let's Collaborate")

	];
};

},{}],5:[function(require,module,exports){
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

},{"../../json/portfolio.json":6}],6:[function(require,module,exports){
module.exports=module.exports = {
	"portfolio": [
		{
			"title": "NoCo Hemp Expo 2016 P.R Campaign",
			"description": "Abbie has recently taken the role as publicist for the Third Annual NoCo Hemp Expo 2016. Working in collaboration with Colorado Hemp Company and the NoCo3 Team on all Press and P.R related matters, Abbie designed the P.R timeline for this year's campaign and produced the content needed for maximum attendance and media coverage.",
			"pic": "/images/noco_hemp_expo.png",
			"link":"http://nocohempexpo.com"
		},
		{
			"title": "E-book for American Gut Project Film Series Redefining Human",
			"description": "Befriending Your Invisible Bacterial Organ is an e-book on the human micro biome that sheds light on these obscure microorganisms and the microbial scientists who are discovering some of the most ground-breaking technological advances in medicine.",
			"pic": "/images/redefining-human.jpg",
			"link":"http://www.redefininghuman.com"
		},
		{
			"title": "Blogs and Articles",
			"description": "Abbie works with companies like Colorado Hemp Project to publish compelling and educational features on the emerging hemp industry and the individuals who are making it happen today. As a Guest Writer at National Hemp Association, Abbie presents compelling facts in the form of short blogs and articles about local and national trends in the hemp industry.",
			"pic": "/images/co_hemp_project.jpg",
			"link":"http://www.coloradohempproject.com"
		},
		{
			"title": "ALOC Media",
			"description": "As a contributing writer, Abbie's 'Progression' pieces bring light to a memorable time in politics when the law of man once required a return to nature. As a poet herself, she is interested in the socio-emotional and idealistic spectrum of life often conceptualized and portrayed in Ralph Waldo Emerson's essays and poetry.",
			"pic": "/images/aloc.jpg",
			"link":"https://alocmedia.com/"
		},
		{
			"title": "Interviews and Profiles",
			"description": "Abbie has written interviews and profiles on companies like Hempitecture, GoodSeed, and Pure Hemp Technology whose sustainability-based businesses have rapidly grown over the years.",
			"pic": "/images/eat_hemp.png",
			"link":"http://goodseedburger.com"
		}
	]
}

},{}]},{},[1]);