import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {Card} from 'shared/ui/Card';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './Outcomes.module.scss';

export const Outcomes: React.FC = () => {
	const {outcomes} = useLandingContent();

	return (
		<Section>
			<Container className={styles.inner}>
				<SectionHeader
					align="center"
					label={outcomes.label}
					labelVariant="accent"
					titleParts={outcomes.titleParts}
					titleSize="xl"
				/>

				<div className={styles.grid}>
					<Card className={styles.card}>
						<h3 className={styles.cardTitle}>{outcomes.feelTitle}</h3>
						{outcomes.feel.map((item) => (
							<div
								className={styles.item}
								key={item.title}
							>
								<p className={styles.itemTitle}>{item.title}</p>
								<p className={styles.itemText}>{item.text}</p>
							</div>
						))}
					</Card>
					<Card className={[styles.card, styles.cardAchieve].join(' ')}>
						<h3 className={[styles.cardTitle, styles.cardTitleAccent].join(' ')}>
							{outcomes.achieveTitle}
						</h3>
						{outcomes.achieve.map((item) => (
							<div
								className={styles.item}
								key={item.title}
							>
								<p className={styles.itemTitle}>{item.title}</p>
								<p className={styles.itemText}>{item.text}</p>
							</div>
						))}
					</Card>
				</div>
			</Container>
		</Section>
	);
};
