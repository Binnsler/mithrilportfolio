module.exports = function(){
	return [
		m("a[href='/']", {class:'footer-nav-link', config: m.route}, "Home"),
		m("a[href='/portfolio']", {class:'footer-nav-link', config: m.route}, "Portfolio"),
		m("a[href='/blog']", {class:'footer-nav-link', config: m.route}, "Blog Posts"),
		m("a[href='/contact']", {class:'footer-nav-link', config: m.route}, "Contact")

	];
};