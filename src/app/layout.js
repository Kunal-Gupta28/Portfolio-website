import "../index.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Kunal Gupta — Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Kunal Gupta, Electronics & Communication Engineering Graduate from Delhi Technological University (DTU). Full-Stack Engineer specializing in React, Next.js, Node.js, WebSockets, and AI integrations.",
  keywords: [
    "Kunal Gupta",
    "Kunal Gupta DTU",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Delhi Technological University",
  ],
  authors: [{ name: "Kunal Gupta" }],
  creator: "Kunal Gupta",
  icons: {
    icon: "/images/hero.webp",
  },
  openGraph: {
    title: "Kunal Gupta — Software Engineer",
    description:
      "Full-stack MERN & Next.js Software Engineer from Delhi Technological University (DTU).",
    url: "https://kunalgupta.dev",
    siteName: "Kunal Gupta Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#f5f3ef] antialiased selection:bg-[#ff5a1f] selection:text-white font-sans overflow-x-hidden" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
