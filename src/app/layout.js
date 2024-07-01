import Script from "next/script";
import "./bootstrap-4.4.1.css";
import "./vmy-sep.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "V-Malaysia 2024",
    description: "...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
            <Script src="js/jquery-3.4.1.min.js" />
            <Script src="js/popper.min.js" />
            <Script src="js/bootstrap-4.4.1.js" />
            <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
            <Script src="js/vmy-sep.js" />
        </html>
    );
}
