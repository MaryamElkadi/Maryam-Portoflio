import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	 base: '/Maryam-Portoflio/',
	server: {
		host: true,
		open: true,
	},
});
