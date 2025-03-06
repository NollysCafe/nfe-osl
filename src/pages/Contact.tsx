import React from 'react'
import * as ReactHookForm from 'react-hook-form'
import { toast } from 'react-toastify'
import sendContatForm from '../api/contact'

import '../styles/pages/contact.scss'

// Components
import Header from '../components/Header'

export interface ContactForm {
	name: string
	email: string
	message: string
}

export default function Contact(): React.ReactElement {
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = ReactHookForm.useForm<ContactForm>()

	const onSubmit: ReactHookForm.SubmitHandler<ContactForm> = async (data) => {
		try {
			await sendContatForm(data)
			toast.success('Message sent successfully.')
			reset()
		} catch (error) {
			toast.error('Failed to send message. Please try again later.')
		}
	}

	return (
		<>
			<Header />

			<main className='page contact' aria-labelledby='contact-heading'>
				<h1 id='contact-heading'>Get in Touch</h1>
				<p className='contact-description'>Have questions about NFE-OSL? Send us a message!</p>

				<form className='contact-form' onSubmit={handleSubmit(onSubmit)} aria-label='Contact Form'>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' {...register('name', { required: 'Name is required' })} aria-invalid={errors.name ? 'true' : 'false'} />
					{errors.name && <span className='error-message'>{errors.name.message}</span>}

					<label htmlFor='email'>Email</label>
					<input type='email' id='email' {...register('email', { required: 'Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email address' } })} aria-invalid={errors.email ? 'true' : 'false'} />
					{errors.email && <span className='error-message'>{errors.email.message}</span>}

					<label htmlFor='message'>Message</label>
					<textarea id='message' rows={5} {...register('message', { required: 'Message is required' })} aria-invalid={errors.message ? 'true' : 'false'}></textarea>
					{errors.message && <span className='error-message'>{errors.message.message}</span>}

					<button type='submit' className='button primary' disabled={isSubmitting}>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</main>
		</>
	)
}
