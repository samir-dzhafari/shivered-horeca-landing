import React from 'react';

import styles from './Tabs.module.scss';

export type TabItem<T extends string> = {
	id: T;
	label: string;
};

type TabsProps<T extends string> = {
	items: TabItem<T>[];
	activeId: T;
	onChange: (id: T) => void;
	className?: string;
};

export const Tabs = <T extends string>({items, activeId, onChange, className}: TabsProps<T>) => {
	return (
		<div
			className={[styles.tabs, className].filter(Boolean).join(' ')}
			role="tablist"
		>
			{items.map((item) => (
				<button
					aria-selected={activeId === item.id}
					className={[styles.tab, activeId === item.id ? styles.active : ''].filter(Boolean).join(' ')}
					key={item.id}
					role="tab"
					type="button"
					onClick={() => onChange(item.id)}
				>
					{item.label}
				</button>
			))}
		</div>
	);
};
