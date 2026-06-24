/** @type {import('stylelint').Config} */
export default {
	extends: ['@ssheverev/stylelint-config'],
	ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
};
