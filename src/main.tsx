import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './app/App';
import {I18nProvider} from './shared/i18n';

import './global.css';

const createApp = (node: React.ReactNode) => {
	const root = document.getElementById('root');

	if (!root) {
		throw new Error('Root element not found');
	}

	ReactDOM.createRoot(root).render(node);
};

createApp(
	<React.StrictMode>
		<I18nProvider>
			<App />
		</I18nProvider>
	</React.StrictMode>,
);
