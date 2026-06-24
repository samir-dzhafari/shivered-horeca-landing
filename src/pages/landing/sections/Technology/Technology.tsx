import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {ComparisonTable} from 'shared/ui/ComparisonTable';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './Technology.module.scss';

export const Technology: React.FC = () => {
	const {technology} = useLandingContent();

	return (
		<Section>
			<Container className={styles.inner}>
				<SectionHeader
					align="center"
					label={technology.label}
					labelVariant="accent"
					titleParts={technology.titleParts}
					titleSize="xl"
					width="technology"
				/>

				<ComparisonTable
					className={styles.table}
					columns={[
						{key: 'chat', header: technology.chatHeader, variant: 'cross'},
						{key: 'agent', header: technology.agentHeader, variant: 'check'},
					]}
					rows={technology.rows.map((row) => ({
						label: row.feature,
						cells: {
							chat: '✗',
							agent: '✓',
						},
					}))}
				/>
			</Container>
		</Section>
	);
};
