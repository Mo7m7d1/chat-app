import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin-ext"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={poppins.className}>
			<Component {...pageProps} />
		</div>
	);
}
