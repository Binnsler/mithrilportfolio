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
