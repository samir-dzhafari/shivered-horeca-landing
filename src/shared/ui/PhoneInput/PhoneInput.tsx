import React from 'react';

import {useI18n} from 'shared/i18n';
import {formatPhone, getPhonePrefix} from 'shared/lib/phoneMask';
import {Input} from 'shared/ui/Input';

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'inputMode' | 'onChange'> & {
	error?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
	({className, error, value = '', onChange, onFocus, ...props}, ref) => {
		const {locale} = useI18n();
		const stringValue = String(value);

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const formatted = formatPhone(event.target.value, locale);

			onChange?.({
				...event,
				target: {...event.target, value: formatted},
				currentTarget: {...event.currentTarget, value: formatted},
			});
		};

		const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
			if (!stringValue.trim()) {
				const prefix = getPhonePrefix(locale);

				onChange?.({
					...event,
					target: {...event.target, value: prefix},
					currentTarget: {...event.currentTarget, value: prefix},
				} as React.ChangeEvent<HTMLInputElement>);
			}

			onFocus?.(event);
		};

		return (
			<Input
				autoComplete="tel"
				className={className}
				error={error}
				inputMode="tel"
				ref={ref}
				type="tel"
				value={stringValue}
				onChange={handleChange}
				onFocus={handleFocus}
				{...props}
			/>
		);
	},
);

PhoneInput.displayName = 'PhoneInput';
