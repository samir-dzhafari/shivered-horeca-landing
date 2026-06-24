import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv} from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default ({mode}: {mode: string}) => {
	const env = loadEnv(mode, process.cwd()) as unknown as Env;

	return defineConfig({
		server: {
			port: env.VITE_PORT ? parseInt(env.VITE_PORT) : 3000,
		},
		plugins: [
			react(),
			viteTsconfigPaths(),
			svgr({
				svgrOptions: {
					exportType: 'default',
				},
				include: '**/*.svg',
			}),
		],
		build: {
			rollupOptions: {
				output: {
					manualChunks(id: string) {
						if (id.includes('react-router-dom') || id.includes('react-router')) {
							return '@react-router';
						}
					},
				},
			},
		},
	});
};
