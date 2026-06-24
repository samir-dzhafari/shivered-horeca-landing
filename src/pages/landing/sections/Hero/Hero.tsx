import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {Badge} from 'shared/ui/Badge';
import {Button} from 'shared/ui/Button';
import {LogoMarquee} from 'shared/ui/LogoMarquee';
import {PillTag} from 'shared/ui/PillTag';
import {StatBlock} from 'shared/ui/StatBlock';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
	const {hero, ui, partners} = useLandingContent();

	return (
		<Section>
			<Container className={styles.content}>
				<Badge>{hero.badge}</Badge>

				<h1 className={styles.title}>
					{hero.titleBefore}
					<span className={styles.titleAccent}>{hero.titleAccent}</span>
					{hero.titleAfter}
				</h1>

				<p className={styles.subtitle}>{hero.subtitle}</p>

				<div className={styles.tags}>
					{hero.tags.map((tag) => (
						<PillTag
							key={tag}
							withDot
						>
							{tag}
						</PillTag>
					))}
				</div>

				<div className={styles.actions}>
					<Button
						href="#register"
						variant="primary"
						withArrow
					>
						{ui.bookSeat}
					</Button>
					<Button
						href="#program"
						variant="outline"
					>
						{ui.program}
					</Button>
				</div>

				<LogoMarquee logos={partners} />

				<div className={styles.stats}>
					{hero.stats.map((stat) => (
						<StatBlock
							key={stat.label}
							label={stat.label}
							value={stat.value}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
};
