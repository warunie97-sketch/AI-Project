export const metadata = {
  title: "AI Writer",
  description: "AI Writing App untuk tulis novel & skrip gaya immersive!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* ICON (boleh letak icon Sue bila dah upload) */}
        <link rel="icon" href="/icon-192.png" sizes="192x192" />
        <meta name="theme-color" content="#000000" />

        {/* For mobile support */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>

      <body>
        {children}

        {/* Register service worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ("serviceWorker" in navigator) {
                window.addEventListener("load", () => {
                  navigator.serviceWorker.register("/service-worker.js")
                    .catch(err => console.log("SW fail:", err));
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
