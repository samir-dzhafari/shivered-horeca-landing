import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {BulletList} from 'shared/ui/BulletList';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './Deliverables.module.scss';

export const Deliverables: React.FC = () => {
	const {deliverables} = useLandingContent();

	return (
		<Section>
			<Container>
				<SectionHeader
					label={deliverables.label}
					labelVariant="accent"
					titleParts={deliverables.titleParts}
					titleSize="xl"
				/>

				<div className={styles.grid}>
					{deliverables.items.map((card) => (
						<div
							className={styles.card}
							key={card.day}
						>
							<div className={styles.cardHeader}>
								<span className={styles.day}>{card.day}</span>
								<span className={styles.line} />
							</div>
							<h3 className={styles.cardTitle}>{card.title}</h3>
							<BulletList items={[...card.items]} />
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
};
