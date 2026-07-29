/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                "bg-elev": "var(--bg-elev)",
                card: "var(--card)",
                border: "var(--border)",
                text: "var(--text)",
                muted: "var(--muted)",
                accent: "var(--accent)",
                "accent-dim": "var(--accent-dim)",
                mint: "var(--mint)",
            },
        },
    },
    plugins: [],
}