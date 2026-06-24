import {useCallback, useState} from 'react';

import {FORM_ENDPOINT} from 'shared/config/env';
import {useI18n, useLandingContent} from 'shared/i18n';
import {isPhoneComplete} from 'shared/lib/phoneMask';

export type PaymentType = 'individual' | 'legal';

export type RegistrationFormData = {
	name: string;
	phone: string;
	venue: string;
	paymentType: PaymentType;
};

export type FormErrors = Partial<Record<keyof RegistrationFormData, string>>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialData: RegistrationFormData = {
	name: '',
	phone: '',
	venue: '',
	paymentType: 'individual',
};

export const useRegistrationForm = () => {
	const {cta} = useLandingContent();
	const {locale} = useI18n();
	const [data, setData] = useState<RegistrationFormData>(initialData);
	const [errors, setErrors] = useState<FormErrors>({});
	const [status, setStatus] = useState<FormStatus>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const validate = useCallback(
		(formData: RegistrationFormData): FormErrors => {
			const validationErrors: FormErrors = {};
			const {errors: messages} = cta.form;

			if (!formData.name.trim()) {
				validationErrors.name = messages.name;
			}

			if (!formData.phone.trim()) {
				validationErrors.phone = messages.phone;
			} else if (!isPhoneComplete(formData.phone, locale)) {
				validationErrors.phone = messages.phoneShort;
			}

			if (!formData.venue.trim()) {
				validationErrors.venue = messages.venue;
			}

			return validationErrors;
		},
		[cta.form, locale],
	);

	const setField = useCallback(<K extends keyof RegistrationFormData>(field: K, value: RegistrationFormData[K]) => {
		setData((prev) => ({...prev, [field]: value}));
		setErrors((prev) => ({...prev, [field]: undefined}));
	}, []);

	const submit = useCallback(async () => {
		const validationErrors = validate(data);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setStatus('idle');

			return;
		}

		setStatus('submitting');
		setErrorMessage('');

		try {
			const response = await fetch(FORM_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					name: data.name.trim(),
					phone: data.phone.trim(),
					venue: data.venue.trim(),
					paymentType: data.paymentType,
				}),
			});

			if (!response.ok) {
				throw new Error(`Request failed with status ${response.status}`);
			}

			setStatus('success');
			setData(initialData);
		} catch {
			setStatus('error');
			setErrorMessage(cta.form.errors.submit);
		}
	}, [cta.form.errors.submit, data, validate]);

	return {
		data,
		errors,
		status,
		errorMessage,
		setField,
		submit,
		isSubmitting: status === 'submitting',
	};
};
