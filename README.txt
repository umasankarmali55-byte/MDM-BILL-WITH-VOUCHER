MDM BILLING - PWA PACKAGE (Android, Windows, iPhone/iPad, any browser)
=======================================================================

WHAT IS INSIDE
 index.html            the complete app (all tabs, reports, print and PDF export)
 manifest.webmanifest  app name, icons, shortcuts, screenshots
 sw.js                 offline support and automatic updates
 icons/                app icons (all sizes, plus maskable icons for Android)
 screenshots/          pictures shown in the Android/Chrome install dialog
 _headers              Cloudflare Pages cache and security settings
 404.html, robots.txt, favicon.ico

1) PUBLISH ON CLOUDFLARE PAGES (free)
 a. Log in at https://dash.cloudflare.com  >  Workers & Pages  >  Create  >  Pages  >  Upload assets
 b. Name the project (for example  mdm-billing)  and upload this ZIP (or the unzipped folder).
    index.html must be at the top level, not inside another folder.
 c. Press Deploy. You get an address like  https://mdm-billing.pages.dev
 Command line alternative:   npx wrangler pages deploy . --project-name mdm-billing
 The app must be opened through https:// (the pages.dev address is already https).

2) INSTALL ON ANDROID (phone or tablet)
 - Open the address in Chrome.
 - Tap  "Install app"  (button on the top bar) or the Chrome menu (three dots) > Install app / Add to Home screen.
 - The app opens full screen with its own icon. Long-press the icon for shortcuts (Attendance, Settings, Report).

3) INSTALL ON WINDOWS (laptop or desktop)
 - Open the address in Microsoft Edge or Google Chrome.
 - Click the Install icon at the right end of the address bar, or the "Install app" button on the top bar,
   or Edge menu (...) > Apps > Install this site as an app.
 - Choose to pin it to the Start menu / taskbar. It opens in its own window.

4) iPHONE / iPAD
 - Open the address in Safari > Share > Add to Home Screen.

SCREEN SIZES
 The app adapts to phones, tablets, laptops and large monitors:
 - Phones: scrollable tab bar, big tap-friendly attendance cells (swipe the grid sideways), reports shrink to fit the screen.
 - Tablets / laptops: full grid, compact one-screen attendance view.
 - Large monitors: content is centred and uses the extra width.

PRINTING AND PDF
 - Each report has its own  "Print this sheet"  button; every report fits one A4 portrait page.
 - "Export PDF . Primary", "Export PDF . Secondary" and "Export PDF . Vouchers" (the receipts, last group of tabs) open the print window for all their pages in one go;
   choose  Save as PDF,  paper A4,  portrait,  scale 100%,  headers and footers off.

UPDATING THE APP
 After you publish a new version, open the app online once. A green "A new version is ready - Reload" bar appears.
 (Developers: change the version name V in sw.js when you replace index.html.)

YOUR DATA
 Everything you type is saved inside the browser on that device (local storage), separately for each web address.
 Use the same browser/app each time; clearing the site data deletes the entries.
 The Odia font loads from Google Fonts the first time you are online; after that it works offline.
 Without it, Windows uses the built-in Nirmala UI / Kalinga fonts and Android uses Noto Sans Oriya.

OPTIONAL: APK / MICROSOFT STORE PACKAGE
 Upload the published address to https://www.pwabuilder.com to create an Android package (.apk/.aab) or a Windows (.msix) package.
