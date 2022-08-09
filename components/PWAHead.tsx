import React from "react";

export default function PWAHead() {
  return (
    <>
      <meta name="application-name" content="Menger Intézet" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Menger Intézet" />
      <meta name="description" content="Menger Intézet" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Oswald:wght@200;300;400;500;600;700&display=swap"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://yourdomain.com" />
      <meta name="twitter:title" content="Menger Intézet" />
      <meta name="twitter:description" content="Menger Intézet" />
      <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
      <meta name="twitter:creator" content="@ValPasch" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Menger Intézet" />
      <meta property="og:description" content="Menger Intézet" />
      <meta property="og:site_name" content="Menger Intézet" />
      <meta property="og:url" content="https://yourdomain.com" />

      <link rel="apple-touch-startup-image" href="/images/apple_splash_2048.png" sizes="2048x2732" />
      <link rel="apple-touch-startup-image" href="/images/apple_splash_1668.png" sizes="1668x2224" />
      <link rel="apple-touch-startup-image" href="/images/apple_splash_1536.png" sizes="1536x2048" />
      <link rel="apple-touch-startup-image" href="/images/apple_splash_1125.png" sizes="1125x2436" />
      <link rel="apple-touch-startup-image" href="/images/apple_splash_1242.png" sizes="1242x2208" />
      <link rel="apple-touch-startup-image" href="/images/apple_splash_750.png" sizes="750x1334" />
      <link rel="apple-touch-startup-image" href="/images/apple_splash_640.png" sizes="640x1136" />
    </>
  );
}
