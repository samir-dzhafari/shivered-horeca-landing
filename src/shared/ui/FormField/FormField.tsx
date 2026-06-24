import React from 'react';

import styles from './FormField.module.scss';

type FormFieldProps = {
	label: string;
	children: React.ReactNode;
	className?: string;
	labelClassName?: string;
};

export const FormField: React.FC<FormFieldProps> = ({label, children, className, labelClassName}) => {
	return (
		<label className={[styles.field, className].filter(Boolean).join(' ')}>
			<span className={[styles.label, labelClassName].filter(Boolean).join(' ')}>{label}</span>
			{children}
		</label>
	);
};
