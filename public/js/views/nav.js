module.exports = function(){
	return [
		m("a[href='/']", {class:'footer-nav-link', config: m.route}, "Home"),
		m("a[href='/about-me']", {class:'footer-nav-link', config: m.route}, "About Us"),
		m("a[href='/portfolio']", {class:'footer-nav-link', config: m.route}, "Work"),
		m("a[href='http://onthemarkprservice.blogspot.com']", {class:'footer-nav-link'}, "Blogs"),
		m("a[href='/contact']", {class:'footer-nav-link', config: m.route}, "Let's Collaborate")
	];
};
