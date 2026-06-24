import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './Format.module.scss';

export const Format: React.FC = () => {
	const {format} = useLandingContent();

	return (
		<Section data-testid="format-section">
			<Container>
				<SectionHeader
					label={format.label}
					labelVariant="accent"
					title={
						<>
							{format.titleBefore}
							<br />
							<span className={styles.titleAccent}>{format.titleAccent}</span>
						</>
					}
					width="format"
				/>

				<div className={styles.grid}>
					{format.items.map((item) => (
						<div
							className={styles.cell}
							key={item.num}
						>
							<div className={styles.cellHead}>
								<span className={styles.num}>{item.num}</span>
								<h3 className={styles.cardTitle}>{item.title}</h3>
							</div>
							<p className={styles.cardText}>{item.text}</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
};
