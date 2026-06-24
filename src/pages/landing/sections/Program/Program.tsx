import React, {useMemo, useState} from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {Card} from 'shared/ui/Card';
import {NumberBadge} from 'shared/ui/NumberBadge';
import {SectionHeader} from 'shared/ui/SectionHeader';
import {Tabs} from 'shared/ui/Tabs';

import styles from './Program.module.scss';

type DayTab = 'day1' | 'day2';

export const Program: React.FC = () => {
	const {program, ui} = useLandingContent();
	const [activeDay, setActiveDay] = useState<DayTab>('day1');

	const tabs = useMemo(
		() => [
			{id: 'day1' as const, label: ui.day1},
			{id: 'day2' as const, label: ui.day2},
		],
		[ui.day1, ui.day2],
	);

	const steps = activeDay === 'day1' ? program.day1 : program.day2;

	return (
		<Section id="program">
			<Container>
				<SectionHeader
					label={program.label}
					labelVariant="accent"
					titleParts={program.titleParts}
					titleSize="xl"
					width="program"
				/>

				<Tabs
					activeId={activeDay}
					className={styles.tabs}
					items={tabs}
					onChange={setActiveDay}
				/>

				<div className={styles.grid}>
					{steps.map((step) => (
						<Card
							className={styles.stepCard}
							key={step.num}
							variant="soft"
						>
							<div className={styles.stepHeader}>
								<NumberBadge
									className={styles.num}
									value={step.num}
									variant="index"
								/>
								<h3 className={styles.stepTitle}>{step.title}</h3>
							</div>
							<p className={styles.stepText}>{step.text}</p>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
};
