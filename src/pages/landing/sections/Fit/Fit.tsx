import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {Card} from 'shared/ui/Card';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './Fit.module.scss';

export const Fit: React.FC = () => {
	const {fit} = useLandingContent();

	return (
		<Section>
			<Container>
				<SectionHeader
					label={fit.label}
					labelVariant="accent"
					titleParts={fit.titleParts}
					width="fit"
				/>

				<div className={styles.grid}>
					{fit.cards.map((card) => (
						<Card
							className={styles.card}
							key={card.title}
							variant="soft"
						>
							<span className={styles.emojiWrap}>
								<span className={styles.emoji}>{card.emoji}</span>
							</span>
							<h3 className={styles.cardTitle}>{card.title}</h3>
							<p className={styles.cardText}>{card.text}</p>
						</Card>
					))}
				</div>

				<div className={styles.note}>
					<span className={styles.noteIcon}>✦</span>
					<p>
						<strong className={styles.noteLead}>{fit.noteLead}</strong>
						{fit.noteRest}
					</p>
				</div>
			</Container>
		</Section>
	);
};
