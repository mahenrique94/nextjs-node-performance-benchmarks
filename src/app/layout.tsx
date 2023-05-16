import "./globals.css";

export const metadata = {
  description: "Measuring Node 20/18/16 SSR performance",
  title: "Node Performance Benchmarks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 sm:px-16 lg:py-16 lg:px-32 py-8 px-8">
        {children}
      </body>
    </html>
  );
}
