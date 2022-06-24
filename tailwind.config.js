module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{js,ts,jsx,tsx}",
		// Add more here
	],
	content: [],
	theme: {
		extend: {
			colors: {
				primary: "#345995",
				onPrimary: "#FFFFFF",
				primaryContainer: "#D6E3FF",
				onPrimaryContainer: "#001A40",
				secondary: "#348A95",
				secondaryContainer: "#8AF2FF",
				onSecondaryContainer: "#001F23",
				tertiary: "#953459",
				tertiaryContainer: "#FFD9E3",
				onTertiaryContainer: "#3E001B",
				error: "#BA1B1B",
				errorContainer: "#FFDAD4",
				onErrorContainer: "#410001",
				background: "#E1E1E1",
				onBackground: "#1A1B1F",
				surface: "#FDFBFF",
				onSurface: "#1A1B1F",
				surfaceVariant: "#FDFBFF",
				onSurfaceVariant: "#44474F",
				outline: "#74777F",
				neutral: "#44474F",
				neutralOnBackground: "#1A1B1F",
			},
		},
	},
	plugins: [],
};
