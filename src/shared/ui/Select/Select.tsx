import React from 'react';

import styles from './Select.module.scss';

type SelectOption = {
	value: string;
	label: string;
};

type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
	options: SelectOption[];
	error?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({className, options, error, ...props}, ref) => {
	return (
		<div className={styles.wrap}>
			<select
				className={[styles.select, error ? styles.error : '', className].filter(Boolean).join(' ')}
				ref={ref}
				{...props}
			>
				{options.map((opt) => (
					<option
						key={opt.value}
						value={opt.value}
					>
						{opt.label}
					</option>
				))}
			</select>
			<img
				alt=""
				className={styles.chevron}
				height={12}
				src="/assets/icons/chevron-down.svg"
				width={19}
			/>
			{error && <span className={styles.errorText}>{error}</span>}
		</div>
	);
});

Select.displayName = 'Select';
