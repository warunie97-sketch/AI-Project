export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body className="min-h-screen bg-slate-50">
        {children}
      </body>
    </html>
  );
}
