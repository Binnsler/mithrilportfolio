var nav = require('./views/nav.js');
var home = require('./views/home.js');
var about = require('./views/about.js');
var portfolio = require('./views/portfolio.js');
var contact = require('./views/contact.js');
var footer = require('./views/footer.js');


// Layout Mixin - This block generates the header, body, and footer for the app
// depending on the page and which blocks are passed in.
// Note that 'nav' and 'footer' are always passed for every page
var mixLayout = function(navTemplate, sectionTemplate, footerTemplate){

		return [
			m('header#header', navTemplate()),
			m('section#body', sectionTemplate()),
			m('footer#footer', footerTemplate()),
			m("script[src='js/site.js']")
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

// About Me component
var About = {}

About.controller = function(){}

About.view = function(controller){
	return [
		mixLayout(nav, about, footer)
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


// Blog component - ***** Note that although the below code works, for this
// particular site the blog simply redirects to an outside side
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

// Portfolio component
var Contact = {}

Contact.controller = function(){}


Contact.view = function(controller){
	return [
		mixLayout(nav, contact, footer),
	]
}

// Hook up our components to routes
m.route(document.body, "/", {
    "/": Homepage,
		"/about-me": About,
    "/portfolio": Portfolio,
    "/blog": Blog,
    "/contact": Contact,
});
