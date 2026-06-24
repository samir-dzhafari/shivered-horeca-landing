import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {Accordion} from 'shared/ui/Accordion';
import {SectionHeader} from 'shared/ui/SectionHeader';

export const Faq: React.FC = () => {
	const {faq} = useLandingContent();

	const items = faq.items.map((item, index) => ({
		id: `faq-${index}`,
		question: item.question,
		answer: item.answer,
	}));

	return (
		<Section data-testid="faq-section">
			<Container>
				<SectionHeader
					label={faq.label}
					labelVariant="accent"
					titleParts={faq.titleParts}
					titleSize="xl"
				/>
				<Accordion items={items} />
			</Container>
		</Section>
	);
};
