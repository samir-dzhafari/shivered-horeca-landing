import React from 'react';

import styles from './FormField.module.scss';

type FormFieldProps = {
	label: string;
	children: React.ReactNode;
	className?: string;
};

export const FormField: React.FC<FormFieldProps> = ({label, children, className}) => {
	return (
		<label className={[styles.field, className].filter(Boolean).join(' ')}>
			<span className={styles.label}>{label}</span>
			{children}
		</label>
	);
};
