module.exports = function(){
	return [
		// m('p', 'This is the homepage.')
		m('.six-columns', [
			m('img.splash-portrait', {src: '/images/abbie_contact.jpg'})
		]),
		m('.six-columns', [
			m('.contact-text', 'Please leave me a quick message about how you would like to connect and I will reach out!'),
			m('form', [
				m('.input-container', [
					m('label', 'Name'),
					m('input.contact-input[placeholder=Name]', {oninput: m.withAttr('value', controller.data.name)}, controller.data.name())
				]),
				m('.input-container', [
					m('label', 'Email'),
					m('input.contact-input[placeholder=Email]', {oninput: m.withAttr('value', controller.data.email)}, controller.data.email())
				]),
				m('.input-container', [
					m('label', 'Message'),
					m('input.contact-input[placeholder=Message]', {oninput: m.withAttr('value', controller.data.message)}, controller.data.message()))
				]),
				m('.splash-buttons', [
					m("button.green-button", {onclick: controller.sendEmail(controller.data)}, 'Submit')
				])
			])
		])
	];
};
