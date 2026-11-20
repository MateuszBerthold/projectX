# brandscale – strona usług

Statyczna strona (HTML + CSS, bez frameworków i bez procesu budowania) prezentująca usługi brandscale dla marek: sprzedaż w modelu depozytowym, testowanie rynków i marketplace'ów oraz certyfikację produktów.

## Pliki

- `index.html` – treść strony
- `styles.css` – wygląd (kolory i krój zgodne z księgą znaku: grafit `#121417`, zieleń `#0F9D6B`, zieleń na ciemnym `#3DDC97`, Space Grotesk + Inter)
- `favicon.svg` – ikona karty przeglądarki

## Publikacja na GitHub Pages

1. Utwórz repozytorium i wrzuć do niego te pliki (w głównym katalogu).
2. W repozytorium: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, gałąź `main`, katalog `/ (root)`.
3. Po chwili strona będzie dostępna pod adresem `https://<twoj-login>.github.io/<nazwa-repo>/`.

## Do uzupełnienia przed publikacją

- **Kontakt** (`index.html`, sekcja `#kontakt`): zamień `kontakt@example.com` i `+48 000 000 000` na prawdziwe dane.
- **Formularz**: GitHub Pages nie obsługuje wysyłki formularzy. Załóż formularz w usłudze typu Formspree (lub podobnej) i wstaw jej adres w miejsce `https://formspree.io/f/TWOJ_ID` w atrybucie `action`. Alternatywnie usuń formularz i zostaw sam e-mail.
- **Rok w stopce** – obecnie 2026.
