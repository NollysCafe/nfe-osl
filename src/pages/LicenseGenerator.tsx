import React from 'react'
import * as ReactHookForm from 'react-hook-form'
import { toast } from 'react-toastify'
import { saveAs } from 'file-saver'
import generateLicense from '../api/generateLicense'

import '../styles/pages/license-generator.scss'

export interface LicenseForm {
	name: string
	project: string
	year: string
	commercial: boolean
	aiUsage: boolean
}

export default function LicenseGenerator(): React.ReactElement {
	const { register, handleSubmit, watch, formState: { errors }, reset } = ReactHookForm.useForm<LicenseForm>({ defaultValues: { year: new Date().getFullYear().toString(), commercial: false, aiUsage: false } })

	const licensePreview = generateLicense(watch())

	const onSubmit = async (data: LicenseForm) => {
		try {
			const licenseText = generateLicense(data)
			const blob = new Blob([licenseText], { type: 'text/plain' })
			saveAs(blob, `NFE-OSL_${data.project || 'license'}.txt`)
			toast.success('License downloaded successfully.')
			reset()
		} catch (error) {
			toast.error('Failed to generate license.')
		}
	}

	return (
		<main className='page generator' aria-labelledby='generator-heading'>
			<div className='content'>
				<h1 id='generator-heading'>NFE-OSL License Generator</h1>
				<p className='generator-description'>Customize your license and download it instantly.</p>

				<form className='generator-form' onSubmit={handleSubmit(onSubmit)} aria-label='License Generator Form'>
					<label htmlFor='name'>Your Name / Organization</label>
					<input type='text' id='name' {...register('name', { required: 'Name is required' })} aria-invalid={errors.name ? 'true' : 'false'} />
					{errors.name && <span className='error-message'>{errors.name.message}</span>}

					<label htmlFor='project'>Project Name</label>
					<input type='text' id='project' {...register('project', { required: 'Project name is required' })} aria-invalid={errors.project ? 'true' : 'false'} />
					{errors.project && <span className='error-message'>{errors.project.message}</span>}

					<label htmlFor='year'>Year</label>
					<input type='text' id='year' {...register('year', { required: 'Year is required', pattern: { value: /^\d{4}$/, message: 'Enter a valid year' } })} aria-invalid={errors.year ? 'true' : 'false'} />
					{errors.year && <span className='error-message'>{errors.year.message}</span>}

					<label className='checkbox'>
						<input type='checkbox' {...register('commercial')} /> Allow commercial use with permission
					</label>

					<label className='checkbox'>
						<input type='checkbox' {...register('aiUsage')} /> Allow AI training under open-source terms
					</label>

					<button type='submit' className='button primary'>Download License</button>
				</form>

				<section className='preview'>
					<h2>Live Preview</h2>
					<pre className='license-preview'>{licensePreview}</pre>
				</section>
			</div>
		</main>
	)
}
