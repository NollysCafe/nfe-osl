import { ContactForm } from '../pages/Contact'

export default function sendContactForm(data: ContactForm): Promise<void> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.1) {
				console.log('Message sent:', data)
				resolve()
			} else {
				reject(new Error('Failed to send message'))
			}
		}, 1000)
	})
}
