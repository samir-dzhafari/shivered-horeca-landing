import React from 'react';

import styles from './BulletList.module.scss';

type BulletListProps = {
	items: string[];
	className?: string;
};

export const BulletList: React.FC<BulletListProps> = ({items, className}) => {
	return (
		<ul className={[styles.list, className].filter(Boolean).join(' ')}>
			{items.map((item) => (
				<li
					className={styles.item}
					key={item}
				>
					<span className={styles.dot} />
					{item}
				</li>
			))}
		</ul>
	);
};
