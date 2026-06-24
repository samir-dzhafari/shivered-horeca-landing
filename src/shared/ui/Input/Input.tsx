import React from 'react';

import styles from './Input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({className, error, ...props}, ref) => {
	return (
		<>
			<input
				className={[styles.input, error ? styles.error : '', className].filter(Boolean).join(' ')}
				ref={ref}
				{...props}
			/>
			{error && <span className={styles.errorText}>{error}</span>}
		</>
	);
});

Input.displayName = 'Input';
