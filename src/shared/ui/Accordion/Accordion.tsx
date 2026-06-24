import React, {useState} from 'react';

import {assetUrl} from 'shared/lib/assetUrl';

import styles from './Accordion.module.scss';

export type AccordionItem = {
	id: string;
	question: string;
	answer: string;
};

type AccordionProps = {
	items: AccordionItem[];
	className?: string;
};

export const Accordion: React.FC<AccordionProps> = ({items, className}) => {
	const [openId, setOpenId] = useState<string | null>(null);

	return (
		<div className={[styles.list, className].filter(Boolean).join(' ')}>
			{items.map((item) => {
				const isOpen = openId === item.id;

				return (
					<div
						className={styles.item}
						key={item.id}
					>
						<button
							aria-expanded={isOpen}
							className={styles.question}
							type="button"
							onClick={() => setOpenId(isOpen ? null : item.id)}
						>
							<span>{item.question}</span>
							<img
								alt=""
								className={styles.icon}
								height={24}
								src={assetUrl(isOpen ? 'assets/icons/faq-minus.svg' : 'assets/icons/faq-plus.svg')}
								width={24}
							/>
						</button>
						{isOpen && <p className={styles.answer}>{item.answer}</p>}
					</div>
				);
			})}
		</div>
	);
};
