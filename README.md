# VS Helping Hands Welfare Association

Public site: [https://vshelpinghands.org](https://vshelpinghands.org)

## Accounts and consoles

Sign in with the **Google account** that owns the site. Do **not** write passwords, app passwords, or API keys in this file or commit them to git.

| Service | ID / email | Open |
| --- | --- | --- |
| Contact email | `Vshelpinghands17@gmail.com` | [Gmail](https://mail.google.com) |
| Firebase project | `vshelpinghands-4bd08` | [Firebase Console](https://console.firebase.google.com/project/vshelpinghands-4bd08/overview) |
| Firebase Hosting | same project | [Hosting](https://console.firebase.google.com/project/vshelpinghands-4bd08/hosting) |
| Firebase default URL | `https://vshelpinghands-4bd08.web.app` | [Open](https://vshelpinghands-4bd08.web.app) |
| Custom domain | `vshelpinghands.org` | [Open](https://vshelpinghands.org) |
| Google Search Console | property `https://vshelpinghands.org/` | [Search Console](https://search.google.com/search-console?resource_id=https://vshelpinghands.org/) |
| Bing Webmaster | `vshelpinghands.org` | [Bing Webmaster](https://www.bing.com/webmasters) |

CLI login (browser Google sign-in, no password in this repo):

```powershell
firebase login
```

## WhatsApp / phone (public on the site)

- WhatsApp / phone: `+91 9391303824`

## Run locally

```powershell
cd D:\Helpinghands\vshelpinghands
npm start
```

App: [http://localhost:3000](http://localhost:3000)

## Deploy (Firebase Hosting)

```powershell
cd D:\Helpinghands\vshelpinghands
npm run build
firebase deploy --only hosting
```

After deploy, hard-refresh https://vshelpinghands.org (`Ctrl+Shift+R`).

## Private passwords (do not commit)

Keep these only on paper / a password manager. If you add them below, do not push this file to GitHub.

- Google / Gmail password:
- Firebase (same Google account):
- Domain registrar login:
- Search Console / Bing: same Google account
