module.exports = function(){
	return [
		m("a[href='/']", {class:'footer-nav-link', config: m.route}, "Home"),
		m("a[href='/portfolio']", {class:'footer-nav-link', config: m.route}, "Portfolio"),
		m("a[href='http://onthemarkprservice.blogspot.com']", {class:'footer-nav-link'}, "Blog"),
		m("a[href='/contact']", {class:'footer-nav-link', config: m.route}, "Let's Collaborate")

	];
};
