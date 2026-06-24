import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {Button} from 'shared/ui/Button';
import {PillTag} from 'shared/ui/PillTag';
import {SectionHeader} from 'shared/ui/SectionHeader';

import {ExpertCard} from './ExpertCard';
import styles from './Experts.module.scss';

function renderExpertName(name: string) {
	const lastSpace = name.lastIndexOf(' ');

	if (lastSpace === -1) {
		return name;
	}

	return (
		<>
			{name.slice(0, lastSpace)}
			<br />
			<span className={styles.nameAccent}>{name.slice(lastSpace + 1)}</span>
		</>
	);
}

export const Experts: React.FC = () => {
	const {experts, ui} = useLandingContent();

	return (
		<Section>
			<Container>
				<div className={styles.inner}>
					<SectionHeader
						label={experts.label}
						labelVariant="accent"
						titleParts={experts.titleParts}
						titleSize="xl"
						width="experts"
					/>

					{experts.items.map((expert, index) => {
						const isReversed = index % 2 === 1;
						const card = (
							<ExpertCard
								initials={expert.initials}
								name={expert.name}
								subtitle={expert.subtitle}
							/>
						);
						const info = (
							<div className={styles.info}>
								<span className={styles.role}>{expert.role}</span>
								<h3 className={styles.name}>{renderExpertName(expert.name)}</h3>
								<p className={styles.description}>{expert.description}</p>
								<blockquote className={styles.quote}>{expert.quote}</blockquote>
								<div className={styles.companies}>
									{expert.companies.map((company) => (
										<PillTag
											key={company}
											variant="plain"
										>
											{company}
										</PillTag>
									))}
								</div>
								<Button
									className={styles.cta}
									href="#register"
									variant="primary"
									withArrow
								>
									{ui.registerWorkshop}
								</Button>
							</div>
						);

						return (
							<div
								className={[styles.row, isReversed && styles.reverse].filter(Boolean).join(' ')}
								key={expert.name}
							>
								<div className={styles.cardCol}>{card}</div>
								{info}
							</div>
						);
					})}
				</div>
			</Container>
		</Section>
	);
};
