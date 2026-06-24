import React from 'react';

import styles from './LandingPage.module.scss';
import {Audience} from './sections/Audience';
import {Competitors} from './sections/Competitors';
import {CourseComparison} from './sections/CourseComparison';
import {Cta} from './sections/Cta';
import {Deliverables} from './sections/Deliverables';
import {Experts} from './sections/Experts';
import {Faq} from './sections/Faq';
import {Fit} from './sections/Fit';
import {Footer} from './sections/Footer';
import {Format} from './sections/Format';
import {Header} from './sections/Header';
import {Hero} from './sections/Hero';
import {HowItWorks} from './sections/HowItWorks';
import {Outcomes} from './sections/Outcomes';
import {Program} from './sections/Program';
import {Technology} from './sections/Technology';

export const LandingPage: React.FC = () => {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<Hero />
				<Audience />
				<Competitors />
				<Deliverables />
				<HowItWorks />
				<Technology />
				<Experts />
				<Outcomes />
				<Fit />
				<Program />
				<Format />
				<CourseComparison />
				<Faq />
			</main>
			<Cta />
			<Footer />
		</div>
	);
};
