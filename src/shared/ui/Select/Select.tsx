import React, {useCallback, useEffect, useId, useRef, useState} from 'react';

import styles from './Select.module.scss';

type SelectOption = {
	value: string;
	label: string;
};

type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children' | 'onBlur'> & {
	options: SelectOption[];
	error?: string;
	onBlur?: React.FocusEventHandler<HTMLButtonElement>;
};

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
	({className, options, error, value, onChange, onBlur, name, disabled, id}, ref) => {
		const [open, setOpen] = useState(false);
		const [activeIndex, setActiveIndex] = useState(-1);
		const wrapRef = useRef<HTMLDivElement>(null);
		const listboxId = useId();

		const selectedIndex = options.findIndex((option) => option.value === value);
		const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : options[0];

		const selectValue = useCallback(
			(nextValue: string) => {
				setOpen(false);

				if (nextValue !== value) {
					onChange?.({
						target: {value: nextValue, name},
					} as React.ChangeEvent<HTMLSelectElement>);
				}
			},
			[name, onChange, value],
		);

		useEffect(() => {
			if (!open) {
				return undefined;
			}

			const handlePointerDown = (event: MouseEvent) => {
				if (!wrapRef.current?.contains(event.target as Node)) {
					setOpen(false);
				}
			};

			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					setOpen(false);
				}
			};

			document.addEventListener('mousedown', handlePointerDown);
			document.addEventListener('keydown', handleKeyDown);

			return () => {
				document.removeEventListener('mousedown', handlePointerDown);
				document.removeEventListener('keydown', handleKeyDown);
			};
		}, [open]);

		const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
			if (disabled) {
				return;
			}

			switch (event.key) {
				case 'Enter':
				case ' ':
				case 'ArrowDown':
					event.preventDefault();
					setOpen(true);
					setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
					break;
				case 'ArrowUp':
					event.preventDefault();
					setOpen(true);
					setActiveIndex(selectedIndex >= 0 ? selectedIndex : options.length - 1);
					break;
				default:
					break;
			}
		};

		const handleListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
			switch (event.key) {
				case 'ArrowDown':
					event.preventDefault();
					setActiveIndex((index) => Math.min(index + 1, options.length - 1));
					break;
				case 'ArrowUp':
					event.preventDefault();
					setActiveIndex((index) => Math.max(index - 1, 0));
					break;
				case 'Enter':
				case ' ':
					event.preventDefault();

					if (activeIndex >= 0) {
						const option = options[activeIndex];

						if (option) {
							selectValue(option.value);
						}
					}

					break;
				case 'Escape':
					event.preventDefault();
					setOpen(false);
					break;
				default:
					break;
			}
		};

		return (
			<div
				className={styles.wrap}
				ref={wrapRef}
			>
				<button
					aria-controls={listboxId}
					aria-expanded={open}
					aria-haspopup="listbox"
					className={[styles.trigger, open && styles.triggerOpen, error && styles.error, className]
						.filter(Boolean)
						.join(' ')}
					disabled={disabled}
					id={id}
					ref={ref}
					type="button"
					onBlur={onBlur}
					onClick={() => {
						if (!disabled) {
							setOpen((isOpen) => !isOpen);
						}
					}}
					onKeyDown={handleTriggerKeyDown}
				>
					<span className={styles.value}>{selectedOption?.label}</span>
					<img
						alt=""
						className={[styles.chevron, open && styles.chevronOpen].filter(Boolean).join(' ')}
						height={12}
						src="/assets/icons/chevron-down.svg"
						width={19}
					/>
				</button>

				{open && (
					<ul
						className={styles.menu}
						id={listboxId}
						role="listbox"
						tabIndex={-1}
						onKeyDown={handleListKeyDown}
					>
						{options.map((option, index) => {
							const isSelected = option.value === value;

							return (
								<li
									aria-selected={isSelected}
									key={option.value}
									role="option"
								>
									<button
										className={[
											styles.option,
											isSelected && styles.optionSelected,
											index === activeIndex && styles.optionActive,
										]
											.filter(Boolean)
											.join(' ')}
										type="button"
										onClick={() => selectValue(option.value)}
									>
										{option.label}
									</button>
								</li>
							);
						})}
					</ul>
				)}

				{error && <span className={styles.errorText}>{error}</span>}
			</div>
		);
	},
);

Select.displayName = 'Select';
