declare module '*.svg' {
	import * as React from 'react';

	const Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string}>;
	export default Icon;
}

declare module '*.svg?url' {
	const src: string;
	export default src;
}

declare module '*.module.css' {
	const classes: {readonly [key: string]: string};
	export default classes;
}

declare module '*.module.scss' {
	const classes: {readonly [key: string]: string};
	export default classes;
}

declare module '*.module.sass' {
	const classes: {readonly [key: string]: string};
	export default classes;
}
