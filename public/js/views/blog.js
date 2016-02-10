module.exports = function(){

	return [
		m('p', 'This is the blog.'),
		m('p', 'This is the blog (again(.'),
		Blog.blogModel.map(function(post){
			return [
				m('p', 'This is a blog post.')
			];
		})
	]
};