import React from 'react';

import {TELEGRAM_URL} from 'shared/config/env';
import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './HowItWorks.module.scss';

export const HowItWorks: React.FC = () => {
	const {howItWorks} = useLandingContent();

	return (
		<Section data-testid="how-it-works-section">
			<Container className={styles.inner}>
				<div className={styles.text}>
					<SectionHeader
						label={howItWorks.label}
						labelVariant="accent"
						titleParts={howItWorks.titleParts}
						titleSize="xl"
					/>

					<div className={styles.highlight}>
						<p className={styles.time}>{howItWorks.time}</p>
						<p className={styles.highlightText}>
							{howItWorks.highlightBefore}
							<a
								className={styles.highlightLink}
								href={TELEGRAM_URL}
								rel="noopener noreferrer"
								target="_blank"
							>
								{howItWorks.highlightLink}
							</a>
							{howItWorks.highlightAfterLink}
							<br />
							{howItWorks.highlightLine2}
							<span className={styles.highlightAccent}>{howItWorks.highlightAccent}</span>
						</p>
					</div>

					<p className={styles.description}>{howItWorks.description}</p>
					<p className={styles.emphasis}>{howItWorks.emphasis}</p>

					<div className={styles.callout}>
						{howItWorks.calloutLead}
						<span className={styles.calloutAccent}>{howItWorks.calloutAccent}</span>
					</div>
				</div>

				<div className={styles.chat}>
					<div className={styles.chatHeader}>
						<div className={styles.botAvatar}>
							<span aria-hidden>🤖</span>
						</div>
						<div>
							<p className={styles.botName}>{howItWorks.botName}</p>
							<p className={styles.botStatus}>{howItWorks.botStatus}</p>
						</div>
					</div>

					<div className={styles.chatBody}>
						<div className={styles.messages}>
							<div className={styles.messageGuest}>{howItWorks.messageGuest}</div>
							<div className={styles.messageBot}>{howItWorks.messageBot}</div>
							<span className={styles.messageTime}>{howItWorks.messageTime}</span>
						</div>

						<div className={styles.notification}>
							<span
								aria-hidden
								className={styles.notificationIcon}
							>
								🔔
							</span>
							<p>{howItWorks.notification}</p>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};
