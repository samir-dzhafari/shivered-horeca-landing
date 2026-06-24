import React from 'react';

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outlineDark' | 'ghost';

type ButtonProps = {
	children: React.ReactNode;
	variant?: ButtonVariant;
	withArrow?: boolean;
	fullWidth?: boolean;
	className?: string;
	type?: 'button' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
	href?: string;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	withArrow = false,
	fullWidth = false,
	className,
	type = 'button',
	disabled = false,
	onClick,
	href,
}) => {
	const classNames = [styles.button, styles[variant], fullWidth ? styles.fullWidth : '', className]
		.filter(Boolean)
		.join(' ');

	const content = (
		<>
			<span>{children}</span>
			{withArrow && (
				<img
					alt=""
					className={styles.arrow}
					height={34}
					src="/assets/icons/arrow-right.svg"
					width={34}
				/>
			)}
		</>
	);

	if (href) {
		return (
			<a
				className={classNames}
				href={href}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			className={classNames}
			disabled={disabled}
			type={type}
			onClick={onClick}
		>
			{content}
		</button>
	);
};
