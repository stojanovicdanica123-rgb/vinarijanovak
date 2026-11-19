# Vinarija Novak — demo sajt

Statički sajt (HTML + CSS + JavaScript, bez build koraka) za Vinariju Novak iz Rogljeva kod Negotina.
Stil „crna etiketa“ (crna, bakar, kamena slova sa etikete), srpski ćirilicom i engleski.

Svi fajlovi (stranice, stilovi, skripte i slike) su namerno u **jednom folderu, bez podfoldera**,
da bi upload preko github.com radio bez obzira na to kako se fajlovi prevuku.

## Stranice

| Fajl | Sadržaj |
|---|---|
| `index.html` | Početna: tri boce, „100% strasti“, vina, Rogljevo i pimnice, galerija „Godina u Rogljevu“, Instagram |
| `vina.html` | Bagrina, Kaberne sovinjon i Crna tamjanika: opis, profil ukusa, arome, uz šta ide, serviranje; „Šta je na stolu?“ |
| `kontakt.html` | Kontakt kartice, ilustrovana mapa kraja, obrazac za upit |

Stilovi su u `style.css`, ponašanje u `app.js`, a engleski prevod u `i18n.js`. Srpski tekst je direktno u HTML-u.

## Objavljivanje na GitHub Pages

1. Na github.com napravite novi repozitorijum (npr. `vinarija-novak`), javni.
2. Kliknite **Add file → Upload files**, označite **sve fajlove** iz ovog foldera (Ctrl+A) i prevucite ih.
3. Kliknite **Commit changes**.
4. **Settings → Pages** → **Deploy from a branch**, grana `main`, folder `/ (root)` → **Save**.
5. Posle 1–2 minuta sajt je na `https://<korisničko-ime>.github.io/<ime-repozitorijuma>/`.

## Pre puštanja u rad

- **Indeksiranje:** svaka stranica ima `<meta name="robots" content="noindex, nofollow">` jer je ovo demo sa privremenim podacima. Uklonite tu liniju kada sajt postane zvaničan.
- **Privremeni podaci** su na sajtu označeni zvezdicom ✱: telefon (+381 60 000 0000), email (info@vinarijanovak.rs), alkohol i godina berbe za svako vino, stil Crne tamjanike (polusuvo/poluslatko) i vreme vožnje od Negotina. Obrazac šalje upit na privremenu email adresu.
- **Fotografije** su preuzete sa Instagrama vinarije (@vinarijanovak) u maloj rezoluciji (do 640 px). Za objavu je potrebna saglasnost vinarije, a poželjni su originali u većoj rezoluciji.
- **Tekstovi** o vinima i vinogradu su demonstrativni; treba ih proveriti sa vlasnikom. Engleski prevod treba da pregleda izvorni govornik.
