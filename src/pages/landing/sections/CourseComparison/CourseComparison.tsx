import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {ComparisonTable} from 'shared/ui/ComparisonTable';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './CourseComparison.module.scss';

export const CourseComparison: React.FC = () => {
	const {courseComparison} = useLandingContent();

	return (
		<Section>
			<Container className={styles.inner}>
				<SectionHeader
					align="center"
					label={courseComparison.label}
					labelVariant="accent"
					titleParts={courseComparison.titleParts}
					titleSize="xl"
				/>

				<ComparisonTable
					className={styles.table}
					columns={[
						{key: 'other', header: courseComparison.otherHeader, variant: 'other'},
						{key: 'ours', header: courseComparison.oursHeader, variant: 'ours'},
					]}
					rows={courseComparison.rows.map((row) => ({
						label: row.label,
						cells: {
							other: row.other,
							ours: row.ours,
						},
					}))}
				/>
			</Container>
		</Section>
	);
};
