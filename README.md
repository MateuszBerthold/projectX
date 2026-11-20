# brandscale – strona usług

Statyczna strona (HTML + CSS + odrobina JS, bez frameworków i bez budowania) prezentująca usługi brandscale dla marek.

Adres po włączeniu GitHub Pages: https://mateuszberthold.github.io/projectX/

## Strony

- `index.html` – strona główna: ruchome kafelki platform, karuzela „Zaufały nam”, usługi, interaktywny przepływ zamówienia, jak zaczynamy, kontakt
- `sprzedaz.html` – usługa „Sprzedaż za Ciebie” (model depozytowy)
- `test-rynku.html` – usługa „Test nowego rynku”
- `certyfikacja.html` – usługa „Certyfikat produktu”

Wspólne pliki: `styles.css` (wygląd, kolory z księgi znaku), `script.js` (interakcje), `favicon.svg`, folder `assets/`.

## Publikacja na GitHub Pages

1. Wrzuć wszystkie pliki i folder `assets` do głównego katalogu repozytorium.
2. **Settings → Pages → Deploy from a branch**, gałąź `main`, katalog `/ (root)`.

## Do uzupełnienia przed publikacją

1. **Logotypy marek w karuzeli „Zaufały nam”** (`index.html`, sekcja `#brands`):
   - podmień pliki `assets/brands/marka-1.svg` … `marka-6.svg` na logotypy marek (SVG lub PNG; jeśli zmienisz rozszerzenie, popraw też `src`),
   - w atrybucie `alt` wpisz nazwę marki zamiast `[Nazwa marki 1]`,
   - żeby dodać kolejną markę, skopiuj jedną linię `<li class="brand">…</li>`. Karuzela sama zrobi z nich niekończącą się pętlę.
   - Pokazuj tylko marki, które wyraziły zgodę na użycie ich logotypu.
2. **Dane kontaktowe**: zamień `kontakt@example.com` i `+48 000 000 000` we wszystkich czterech plikach HTML (w `href` i w tekście).

## Źródła grafik

- Ikony: [Lucide](https://lucide.dev) (licencja ISC, treść w `LICENSE-lucide.txt`), wklejone bezpośrednio w HTML.
- Logotypy Allegro i Kaufland: [Simple Icons](https://simpleicons.org) (pliki CC0). To znaki towarowe ich właścicieli – sprawdź zasady używania znaków danej platformy.
- Amazon jest pokazany jako nazwa tekstowa: Simple Icons nie udostępnia jego logotypu.
