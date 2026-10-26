# Levou zadní

Statická aplikace pro procvičování češtiny a matematiky k přijímacím zkouškám.

## Spuštění

Z kořene repozitáře spusťte:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Aplikace nepotřebuje build, databázi ani přihlašovací údaje. Datové JSON soubory se načítají přes HTTP, proto nestačí otevřít index.html jako soubor. Pokrok se ukládá do localStorage konkrétního prohlížeče. Adobe Fonts vyžadují připojení k internetu a příslušnou konfiguraci fontového kitu.

## Ověření

Při běžícím serveru lze spustit `node scripts/smoke.cjs`. Vyžaduje modul Playwright a Chromium v `/usr/bin/chromium` (v připraveném cloudovém prostředí jsou dostupné). Kontrola načte oba předměty, zobrazí ukázkové úlohy, ověří bodování správné a chybné odpovědi a zachytí chyby JavaScriptu.

## Původ obnovených souborů

Soubory byly obnoveny 26. října 2026 z veřejně publikované aplikace:
https://cestina-na-tahu-javor.javurek25644.chatgpt.site/

Kopie obsahuje veřejné HTML, CSS, JavaScript, katalogy, datové soubory úloh, obrázky a lokální font. Neobsahuje původní historii Gitu, importní nástroje, původní testovací sady ani nepublikované soubory. Neobsahuje uživatelský pokrok z jiných prohlížečů.

`scripts/restore-public.py` umí z původního webu doplnit chybějící veřejné soubory. Existující soubory ponechává; jeho použití závisí na dostupnosti původního webu. Nejde o nástroj pro synchronizaci změn.

Podklady CERMAT, ilustrace a fonty si zachovávají práva a podmínky původních autorů. Tento import jim nepřiděluje novou licenci.
