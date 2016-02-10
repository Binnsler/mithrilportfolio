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
	return {
		getBlog: m.request({
			method: 'GET',
			url: 'https://www.googleapis.com/blogger/v3/blogs/3384415684375276673/posts?key=AIzaSyDfrFDgB5TQlH5WwlMPdpIFAXvXBCd1NEk'
		})
	}
}

Blog.view = function(controller){
	return[
		mixLayout(nav, function(){
			return [
				m('h1.blog-title', 'On The Mark Blog'),
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



// Portfolio component
var Contact = {}

Contact.controller = function(){
	return {
		sendEmail: function(messageData){
			m.request({
				url: 'https://www.formspree.io/jamie.m.binns@gmail.com',
				method: 'POST',
				dataType: 'jsonp',
				data: {
					message: "Instant success."
				}
			}).then(console.log(res));
		},

		getData: function(){
			return {
				name: m.prop([]),
				email: m.prop([]),
				message: m.prop([])
			}
		}
	}
}

Contact.view = function(controller){
	return [
		mixLayout(nav, function(){
			return [
				// m('p', 'This is the homepage.')
				m('.six-columns', [
					m('img.splash-portrait', {src: '/images/abbiePic2.jpg'})
				]),
				m('.six-columns', [
					m('.splash-text', 'Please leave me a quick message about how you would like to connect and I will reach out!'),
					m('form', [
						m('.input-container', [
							m('label', 'Name'),
							m('input.contact-input[placeholder=Name]', {oninput: m.withAttr('value', controller.getData().name)}, controller.getData().name())
						]),
						m('.input-container', [
							m('label', 'Email'),
							m('input.contact-input[placeholder=Email]', {oninput: m.withAttr('value', controller.getData().email)}, controller.getData().email())
						]),
						m('.input-container', [
							m('label', 'Message'),
							m('input.contact-input[placeholder=Message]', {oninput: m.withAttr('value', controller.getData().message)}, controller.getData().message())
						]),
						m('.splash-buttons', [
							m("button.green-button", {onclick: controller.sendEmail(controller.getData())}, 'Submit')
						])
					])
				])
			];
		}, footer)
	]
}

// Hook up our components to routes
m.route(document.body, "/", {
    "/": Homepage,
    "/portfolio": Portfolio,
    "/blog": Blog,
    "/contact": Contact
});
