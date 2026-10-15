# SilentNovember Traffic Website

A lightweight static landing page designed to help visitors arriving from Pinterest, Google Search, and social posts discover the SilentNovember YouTube channel.

## Files
- `index.html` — homepage and calls to action
- `styles.css` — responsive design
- `script.js` — share button and current year
- `privacy.html` — starter privacy page that must be customized
- `.nojekyll` — GitHub Pages helper

## Publish on your existing GitHub repository
Your existing repository was previously identified as `zeehen78-debug/momentum-store`. This package is a separate SilentNovember landing page. To avoid overwriting the Momentum Store, publish it as a separate repository such as `silentnovember-site`, or decide explicitly to replace the existing site before copying these files.

1. Download and unzip the package.
2. In GitHub, create a new public repository named `silentnovember-site` (or another name you prefer).
3. Upload the contents of this folder, not the outer folder itself. Ensure `index.html` is at the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
6. Wait for GitHub Pages to publish the site. The URL will be shown under Settings → Pages.

## Pinterest traffic
- Create Pins with a clear, truthful headline and a destination URL pointing to your published homepage or a relevant video page.
- Use the Pin title and description to explain what viewers will get.
- Track outbound clicks in Pinterest Analytics. Do not buy fake clicks or use misleading promises.
- The homepage has working YouTube channel and Shorts links. The three featured cards are editorial teasers, not actual individual video embeds; replace them with specific video URLs/thumbnails for best results.

## Google AdSense: important
AdSense does **not** send traffic to YouTube. It displays ads on eligible websites and may pay publishers for valid ad activity. Pinterest and search/social links can bring visitors to this website; this site can then send interested visitors to YouTube.

- Do not paste an AdSense publisher meta tag into Pinterest. Pinterest is not your website host.
- Do not add AdSense code until the site is live, has useful original content, has the required privacy/cookie disclosures, and has been approved by Google.
- Add the AdSense script/code supplied in your own AdSense account to the `<head>` of `index.html` only after approval and only according to Google's instructions.
- Do not ask people to click ads, place ads beside deceptive buttons, or buy/automate traffic. Never use ads merely as a forced redirect.
- A thin page built only to send visitors elsewhere may not be a good AdSense candidate. Add substantial original content, such as written descriptions and context for videos, a real About page, and a contact page before applying.

## Before launch
- Customize `privacy.html` and add a real contact method.
- Replace the sample featured cards with your actual public video links, accurate titles, and thumbnails.
- Test all buttons on mobile and desktop.
- Do not claim the website is published until you see it live at your GitHub Pages URL.
