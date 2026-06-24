import type {LandingContent} from '../types';

export const en: LandingContent = {
	ui: {
		bookSeat: 'Book a seat',
		bookSeatShort: 'Book',
		program: 'Program',
		bookWorkshop: 'Book your workshop seat',
		registerWorkshop: 'Register for the workshop',
		footer: 'First AI workshop for HoReCa in Rostov-on-Don · 2026',
		fired: 'fired',
		day1: 'Day 1 - Bot',
		day2: 'Day 2 - Hackathon',
	},
	hero: {
		badge: 'Offline workshop · Rostov-on-Don · Late July',
		titleBefore: 'Build an AI booking system ',
		titleAccent: 'in two days',
		titleAfter: '. No developer needed.',
		subtitle:
			'Two days — two working products. A Telegram booking bot and your own AI tool for your business. No code, no developer.',
		tags: [
			'Telegram bot by end of day 1',
			'Your own AI product by day 2',
			'No code or technical background required',
		],
		stats: [
			{value: '2 days', label: 'from idea to product'},
			{value: '≤30', label: 'participants'},
			{value: '0', label: 'lines of code'},
			{value: '1st', label: 'workshop in Rostov'},
		],
	},
	audience: {
		label: 'Who is this workshop for?',
		title: 'Does this sound familiar?',
		quote: '«11 PM. WhatsApp — «Table for two?». You are busy. By morning they booked somewhere else.»',
		quoteAuthor: 'This is not a one-off — it is the system.',
		painPoints: [
			{
				num: '1',
				title: 'Missed call — lost guest',
				description: 'Every day. Until you have a system that takes bookings without you — around the clock.',
			},
			{
				num: '2',
				title: 'Notebook + Excel + messengers',
				description:
					'Bookings scattered everywhere. Someone always loses track. Human error does not fix itself with pep talks.',
			},
			{
				num: '3',
				title: 'AI everywhere in talks — not in business',
				description:
					'Competitors mention AI at every meeting. You tried ChatGPT a couple of times — and forgot. Something is off.',
			},
			{
				num: '4',
				title: 'Off-the-shelf booking systems — expensive, slow, not for you',
				description:
					'You looked — not a fit. Hired a developer — a month of waiting, then another invoice for changes. You need another path.',
			},
		],
		tags: [
			{label: 'Restaurants', dotColor: '#f97316'},
			{label: 'Cafés & bars', dotColor: '#eab308'},
			{label: 'Hotels', dotColor: '#ef4444'},
			{label: 'Banquet halls', dotColor: '#22c55e'},
			{label: 'Catering', dotColor: '#1b4dff'},
		],
	},
	competitors: {
		label: 'comparison',
		titleParts: [
			{text: 'We fire '},
			{text: 'the alternatives', accent: true, breakBefore: true},
		],
		subtitle: 'How people usually solve the same problems — and why it does not work the way you need.',
		items: [
			{
				title: 'Other AI masterclasses for HoReCa',
				description:
					'You leave with prompts and assistants inside ChatGPT — skills for someone else’s tools. That is not software. That is not yours. With us you build your own Telegram bot — it is yours from day one.',
				firedLabel: 'fired',
			},
			{
				title: 'Two-month AI courses',
				description:
					'Motivation ends before the first result. The workshop is 2 days. You leave with a bot already running in your venue.',
				firedLabel: 'fired',
			},
			{
				title: 'YouTube / articles / self-study',
				description:
					'You get stuck on tooling or pick the wrong approach. At the workshop — structure, experts beside you, and no time wasted on mistakes we already made.',
				firedLabel: 'fired',
			},
			{
				title: 'ChatGPT / Claude in the browser',
				description:
					'A browser chat does not write code, deploy, or test. Claude Code is an AI agent that does all of that. The difference — between using a tool and building a product.',
				firedLabel: 'fired',
			},
			{
				title: 'Hire a developer',
				description:
					'Every change — new spec, new timeline, new invoice. After the workshop: describe the task — get the result — in minutes, no middlemen, forever.',
				firedLabel: 'fired',
			},
		],
	},
	deliverables: {
		label: 'what you get',
		titleParts: [{text: 'Not knowledge about a bot. '}, {text: 'A bot.', accent: true}],
		items: [
			{
				day: 'Day 1 — evening',
				title: 'Telegram booking bot',
				items: [
					'Takes bookings 24/7, even while you sleep',
					'Confirms to the guest, notifies you — instantly',
					'Ready to launch in your venue this weekend',
				],
			},
			{
				day: 'Day 2 — evening',
				title: 'Your own AI product',
				items: [
					'For a real task in your venue — you choose it',
					'Skill to build and change such products yourself',
					'No dependency on a developer — ever',
				],
			},
		],
	},
	howItWorks: {
		label: 'how does it work?',
		titleParts: [
			{text: 'While you slept, '},
			{text: 'the bot ', breakBefore: true},
			{text: 'took a booking', accent: true},
		],
		time: '11:47 PM · You are already home',
		highlightBefore: 'In ',
		highlightLink: 'Telegram',
		highlightAfterLink: ' — a notification.',
		highlightLine2: 'Mikhail booked a table. ',
		highlightAccent: 'The bot did everything itself.',
		description:
			'A guest messaged the bot. It checked the schedule — in 3 seconds. Confirmed the booking, set a reminder, notified you.',
		emphasis: 'You did nothing.',
		calloutLead: 'This bot — you will build it yourself. ',
		calloutAccent: 'By the end of day one of the workshop.',
		botName: 'Booking bot',
		botStatus: 'online · taking bookings',
		messageGuest: 'Good evening! I would like to book a table for two tomorrow at 7 PM',
		messageBot: '✅ Done, Mikhail! Table for two, 7 PM tomorrow — confirmed. I will remind you at 6 PM.',
		messageTime: '11:47 PM · 3 sec',
		notification: 'New booking — tomorrow, table for two, 7 PM. Mikhail confirmed.',
	},
	technology: {
		label: 'Technology',
		titleParts: [
			{text: 'You have tried '},
			{text: 'ChatGPT.', breakBefore: true},
			{text: 'This is different.', accent: true, breakBefore: true},
		],
		chatHeader: 'Browser chat',
		agentHeader: 'AI agent (what we build)',
		rows: [
			{feature: 'Writes and deploys code'},
			{feature: 'Works without you 24/7'},
			{feature: 'Remembers your business context'},
			{feature: 'Belongs to you, not a subscription'},
		],
	},
	experts: {
		label: 'experts',
		titleParts: [{text: 'We build AI products.'}, {text: 'Every day.', accent: true, breakBefore: true}],
		items: [
			{
				role: 'FOUNDER',
				subtitle: 'IT entrepreneur, Skolkovo',
				name: 'Stanislav Sheverev',
				description:
					'Founder of an AI product development company. Implemented AI in real federal projects — not classroom cases.',
				quote: '«I brought tools I use every day to the workshop. Nothing I have not tested in production myself.»',
				companies: ['Nornickel', 'SIBUR', 'MTS', 'BASF', 'FNP'],
				initials: 'SS',
			},
			{
				role: 'HEAD OF AI',
				subtitle: 'Head of AI direction',
				name: 'Nikita Pozhidaev',
				description:
					'Builds AI agents and automates business processes. Specializes in enterprise AI systems and modern language models.',
				quote: '«I will show not how AI works in theory — but how to make it work for your specific tasks.»',
				companies: ['Mos.ru', 'MTS', 'Home Credit', 'Sber', 'KODE'],
				initials: 'NP',
			},
		],
	},
	outcomes: {
		label: 'After the workshop',
		titleParts: [{text: 'Where you will '}, {text: 'be', accent: true}],
		feelTitle: 'You will feel',
		achieveTitle: 'You will achieve',
		feel: [
			{
				title: 'Independence',
				text: 'Need to change the bot — describe the task to the agent, get the result. No calls, no specs, no waiting.',
			},
			{
				title: 'Confidence',
				text: 'Technology no longer scares you — you understand how it works and know how to control it.',
			},
			{
				title: 'Pride',
				text: 'You did it yourself. Without a developer. In one day. It works right now.',
			},
		],
		achieve: [
			{
				title: 'Bookings happen automatically',
				text: '24/7, no missed calls or lost messages. No guest leaves without an answer.',
			},
			{
				title: 'Your own AI product',
				text: 'For a real task in your venue. Not someone else’s template — yours, on your data.',
			},
			{
				title: 'Skill to build, not only use',
				text: 'The next product — faster and without help. You know how it is done.',
			},
		],
	},
	fit: {
		label: 'Who fits the workshop',
		titleParts: [
			{text: 'You are in the right place, '},
			{text: 'if ', breakBefore: true},
			{text: 'at least one', accent: true},
			{text: ' is about you'},
		],
		cards: [
			{
				emoji: '🍽️',
				title: 'Restaurateur or hotelier',
				text: 'You take bookings manually — by phone, messengers, through staff. You want it to run on its own.',
			},
			{
				emoji: '📊',
				title: 'Manager or operator',
				text: 'You coordinate kitchen, floor, suppliers. You know where time is lost. You want to automate it.',
			},
			{
				emoji: '🚀',
				title: 'The one who wants to be first',
				text: 'In your city or niche nobody has seriously adopted AI in venue operations yet. You want to be first.',
			},
		],
		noteLead: 'No technical degree required.',
		noteRest: ' You need a laptop, a task from your business, and two days of hands-on work. We handle the rest.',
	},
	program: {
		label: 'program',
		titleParts: [
			{text: 'Two days.'},
			{text: 'Two products.', accent: true, breakBefore: true},
		],
		day1: [
			{num: '1', title: 'Set up the AI agent', text: 'Your tool that writes code for you'},
			{num: '2', title: 'Create guest dialogue', text: 'The bot understands booking requests in plain language'},
			{num: '3', title: 'Add booking logic', text: 'Availability check, confirmation, alternative time'},
			{num: '4', title: 'Set up notifications', text: 'You know about every new booking — instantly'},
			{num: '5', title: 'Build a booking list', text: 'Simple interface for staff'},
			{num: '6', title: 'Add guest reminder', text: 'The bot messages the guest an hour before visit'},
		],
		day2: [
			{num: '1', title: 'Choose your task', text: 'A real pain in your venue — not a classroom case'},
			{num: '2', title: 'Design the product', text: 'Describe logic in plain language — the agent builds'},
			{num: '3', title: 'Create MVP', text: 'Working prototype in a few hours'},
			{num: '4', title: 'Test on site', text: 'Experts beside you — stuck, solved in minutes'},
			{num: '5', title: 'Deploy', text: 'Product is available right after the workshop'},
			{num: '6', title: 'Plan growth', text: 'You know how to change and scale on your own'},
		],
	},
	format: {
		label: 'Why this format works',
		titleParts: [
			{text: 'Four differences '},
			{text: 'from everything else', accent: true, breakBefore: true},
		],
		items: [
			{
				num: '01',
				title: 'Your task — not a classroom case',
				text: 'Come with a real pain from your business. No made-up assignments or someone else’s examples.',
			},
			{
				num: '02',
				title: 'Describe in plain language — agent writes code',
				text: 'No syntax. You explain the task — AI writes, runs, tests.',
			},
			{
				num: '03',
				title: 'Two experts beside you all day',
				text: 'Not a recording, not a weekly chat. Two practitioners nearby — stuck, they help in minutes.',
			},
			{
				num: '04',
				title: 'You leave with a product, not a plan',
				text: 'Day 1 — bot launched. Day 2 — second product ready. Not «someday». Already.',
			},
		],
	},
	courseComparison: {
		label: 'Comparison',
		titleParts: [
			{text: 'Others teach you to use AI.'},
			{text: 'We teach you to build it.', accent: true, breakBefore: true},
		],
		otherHeader: 'Other courses',
		oursHeader: 'Our workshop',
		rows: [
			{label: 'End of day 1', other: 'Prompts and assistants in ChatGPT', ours: 'Deployed Telegram bot'},
			{label: 'Day 2', other: 'Topic blocks: marketing, HR, strategy', ours: 'Hackathon 100% for your task'},
			{
				label: 'What you create',
				other: 'Assistant in someone else’s service',
				ours: 'Your own software on your data',
			},
			{label: 'Experts', other: 'AI teachers', ours: 'IT practitioners: Nornickel, MTS, SIBUR'},
			{
				label: 'You leave',
				other: 'Knowing how to prompt — tied to ChatGPT',
				ours: 'Knowing how to build — dependent on no one',
			},
		],
	},
	faq: {
		label: 'Questions',
		titleParts: [
			{text: 'Doubts are '},
			{text: 'normal', accent: true, breakBefore: true},
		],
		items: [
			{
				question: 'I am not technical — can I handle it?',
				answer: 'Yes. The workshop is for owners and managers without a technical background. You describe the task in plain language — the AI agent writes code. Experts are beside you all day.',
			},
			{
				question: 'Will I need a developer after the workshop?',
				answer: 'No. You get the skill to change and grow products through the AI agent yourself. Complex integrations may need a developer, but basic tasks — on your own.',
			},
			{
				question: 'Why do I need a bot if I have a phone?',
				answer: 'The bot works 24/7 while you sleep or are busy. It does not miss calls, confirms bookings instantly, and notifies you — without staff on the line.',
			},
			{
				question: 'What if I have no idea for day two?',
				answer: 'We help pick a task from your business: guest reminders, review collection, procurement automation. What matters is a real pain, not a classroom case.',
			},
			{
				question: 'Can a legal entity pay?',
				answer: 'Yes. We provide full documents for legal-entity payment. Choose the format when registering.',
			},
			{
				question: 'Do I need to install anything beforehand?',
				answer: 'A laptop with internet is enough. We set up all tools on site in the first hour.',
			},
			{
				question: 'I already attended an AI masterclass. How is this different?',
				answer: 'You do not learn to prompt ChatGPT — you build your own software. You leave with a deployed bot and a second product, not notes.',
			},
			{
				question: 'What does «no developer» mean? Really none?',
				answer: 'For workshop tasks — yes. You describe logic, AI writes and deploys code. Enterprise legacy integrations may still need a developer.',
			},
		],
	},
	cta: {
		badge: 'Rostov-on-Don · Late July · Up to 30 participants',
		titleLine1: 'By the end of day one',
		titleLine2Before: 'your bot ',
		titleLine2Accent: 'is already running',
		titleLine2After: '.',
		subtitle: 'First cohort — lower price than the next one.',
		form: {
			name: 'Name',
			namePlaceholder: 'John',
			phone: 'Phone / Telegram',
			phonePlaceholder: '+1 555 000 00 00',
			venue: 'Venue',
			venuePlaceholder: 'Restaurant / hotel / café...',
			payment: 'Payment type',
			submit: 'Book your workshop seat',
			submitting: 'Sending...',
			note: 'A manager will contact you within an hour. Legal-entity payment with full documents is also available.',
			successTitle: 'Application sent!',
			successText: 'A manager will contact you within an hour.',
			errors: {
				name: 'Enter your name',
				phone: 'Enter phone or Telegram',
				phoneShort: 'Number is too short',
				venue: 'Enter your venue',
				submit: 'Could not submit. Try again or message us on Telegram.',
			},
		},
		telegram: 'Message on Telegram — we will discuss your task in 15 minutes.',
	},
	partners: [
		{src: 'assets/partners/partner-01.svg', alt: 'RG Brands'},
		{src: 'assets/partners/partner-02.svg', alt: 'VEIP'},
		{src: 'assets/partners/partner-03.svg', alt: 'Otkritie'},
		{src: 'assets/partners/partner-04.svg', alt: 'VK'},
		{src: 'assets/partners/partner-05.svg', alt: 'Home Bank'},
		{src: 'assets/partners/partner-06.svg', alt: 'MTS'},
		{src: 'assets/partners/partner-07.svg', alt: 'Red Mad Robot'},
		{src: 'assets/partners/partner-08.svg', alt: 'Yandex'},
		{src: 'assets/partners/partner-09.svg', alt: 'RusLine'},
		{src: 'assets/partners/partner-10.svg', alt: 'Pepsi'},
		{src: 'assets/partners/partner-11.svg', alt: 'Sber'},
		{src: 'assets/partners/partner-12.svg', alt: 'KODE'},
		{src: 'assets/partners/partner-13.svg', alt: 'SIBUR'},
	],
	paymentOptions: [
		{value: 'individual', label: 'Individual'},
		{value: 'legal', label: 'Legal entity'},
	],
};
