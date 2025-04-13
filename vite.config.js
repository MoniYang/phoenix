import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/phoenix/",
	plugins: [react()],
	server: {
		// 👇 加這個
		historyApiFallback: true,
	},
});
