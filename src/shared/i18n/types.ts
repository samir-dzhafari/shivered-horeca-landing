export type AccentTitlePart = {
	text: string;
	accent?: boolean;
	breakBefore?: boolean;
};

export type Locale = 'ru' | 'en';

export type FaqItem = {
	question: string;
	answer: string;
};

export type AudienceTag = {
	label: string;
	dotColor: string;
};

export type PainPoint = {
	num: string;
	title: string;
	description: string;
};

export type CompetitorItem = {
	title: string;
	description: string;
	firedLabel: string;
};

export type DeliverableItem = {
	day: string;
	title: string;
	items: string[];
};

export type ExpertItem = {
	role: string;
	subtitle: string;
	name: string;
	description: string;
	quote: string;
	companies: string[];
	initials: string;
};

export type OutcomeItem = {
	title: string;
	text: string;
};

export type FitCard = {
	emoji: string;
	title: string;
	text: string;
};

export type ProgramStep = {
	num: string;
	title: string;
	text: string;
};

export type FormatDifference = {
	num: string;
	title: string;
	text: string;
};

export type ComparisonRow = {
	label: string;
	other: string;
	ours: string;
};

export type TechComparisonRow = {
	feature: string;
};

export type PaymentOption = {
	value: string;
	label: string;
};

export type PartnerLogo = {
	src: string;
	alt: string;
};

export type StatItem = {
	value: string;
	label: string;
};

export type LandingContent = {
	ui: {
		bookSeat: string;
		bookSeatShort: string;
		program: string;
		bookWorkshop: string;
		registerWorkshop: string;
		footer: string;
		fired: string;
		day1: string;
		day2: string;
	};
	hero: {
		badge: string;
		titleBefore: string;
		titleAccent: string;
		titleAfter: string;
		subtitle: string;
		tags: string[];
		stats: StatItem[];
	};
	audience: {
		label: string;
		title: string;
		quote: string;
		quoteAuthor: string;
		painPoints: PainPoint[];
		tags: AudienceTag[];
	};
	competitors: {
		label: string;
		title: string;
		subtitle: string;
		items: CompetitorItem[];
	};
	deliverables: {
		label: string;
		titleParts: AccentTitlePart[];
		items: DeliverableItem[];
	};
	howItWorks: {
		label: string;
		titleParts: AccentTitlePart[];
		time: string;
		highlightBefore: string;
		highlightLink: string;
		highlightAfterLink: string;
		highlightLine2: string;
		highlightAccent: string;
		description: string;
		emphasis: string;
		calloutLead: string;
		calloutAccent: string;
		botName: string;
		botStatus: string;
		messageGuest: string;
		messageBot: string;
		messageTime: string;
		notification: string;
	};
	technology: {
		label: string;
		titleParts: AccentTitlePart[];
		chatHeader: string;
		agentHeader: string;
		rows: TechComparisonRow[];
	};
	experts: {
		label: string;
		titleParts: AccentTitlePart[];
		items: ExpertItem[];
	};
	outcomes: {
		label: string;
		titleParts: AccentTitlePart[];
		feelTitle: string;
		achieveTitle: string;
		feel: OutcomeItem[];
		achieve: OutcomeItem[];
	};
	fit: {
		label: string;
		titleParts: AccentTitlePart[];
		cards: FitCard[];
		noteLead: string;
		noteRest: string;
	};
	program: {
		label: string;
		titleParts: AccentTitlePart[];
		day1: ProgramStep[];
		day2: ProgramStep[];
	};
	format: {
		label: string;
		titleBefore: string;
		titleAccent: string;
		items: FormatDifference[];
	};
	courseComparison: {
		label: string;
		titleParts: AccentTitlePart[];
		otherHeader: string;
		oursHeader: string;
		rows: ComparisonRow[];
	};
	faq: {
		label: string;
		titleParts: AccentTitlePart[];
		items: FaqItem[];
	};
	cta: {
		badge: string;
		titleLine1: string;
		titleLine2Before: string;
		titleLine2Accent: string;
		titleLine2After: string;
		subtitle: string;
		form: {
			name: string;
			namePlaceholder: string;
			phone: string;
			phonePlaceholder: string;
			venue: string;
			venuePlaceholder: string;
			payment: string;
			submit: string;
			submitting: string;
			note: string;
			successTitle: string;
			successText: string;
			errors: {
				name: string;
				phone: string;
				phoneShort: string;
				venue: string;
				submit: string;
			};
		};
		telegram: string;
	};
	partners: PartnerLogo[];
	paymentOptions: PaymentOption[];
};
