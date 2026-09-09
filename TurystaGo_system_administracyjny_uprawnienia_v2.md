# TurystaGo – System administracyjny i uprawnienia
## Aktualizacja punktów 55, 57 i 63 – wersja 2.0

**Projekt:** TurystaGo  
**Dokument:** System administracyjny, typy kont i struktura uprawnień  
**Wersja:** 2.0  
**Data:** 09.09.2026  
**Status:** do zatwierdzenia

---

## 1. Cel dokumentu

Dokument określa sposób zarządzania użytkownikami, administratorami, rolami i uprawnieniami w aplikacji TurystaGo.

System ma umożliwiać:

- obsługę różnych typów kont użytkowników,
- obsługę kont PODRÓŻNIK i ORGANIZATOR,
- tworzenie administratorów,
- nadawanie administratorowi pełnego dostępu,
- nadawanie administratorowi dostępu tylko do wybranych funkcji,
- tworzenie ról administracyjnych,
- indywidualne ograniczanie uprawnień,
- rejestrowanie działań administratorów w logach,
- bezpieczne oddzielenie funkcji użytkownika od funkcji administracyjnych.

---

# 2. Typy kont użytkowników

## 2.1. PODRÓŻNIK

Podróżnik korzysta z podstawowych funkcji TurystaGo związanych z planowaniem i realizacją podróży.

Przykładowe funkcje:

- wybór kraju i miasta,
- wyszukiwanie atrakcji,
- Zaplanuj zwiedzanie,
- Mój plan,
- Moje plany,
- Odkryj po drodze,
- Bliskie atrakcje,
- przewodnik podczas przejazdu,
- mapa i GPS,
- audio przewodnik,
- zapisywanie podróży,
- korzystanie z bonusów,
- album podróży,
- zgłaszanie ciekawych miejsc,
- ocenianie i opiniowanie atrakcji,
- korzystanie z funkcji społecznościowych.

---

# 3. ORGANIZATOR

## 3.1. Charakter konta

ORGANIZATOR jest użytkownikiem TurystaGo posiadającym dodatkowe funkcje przeznaczone do organizowania i obsługi grup.

TurystaGo nie staje się przez to organizatorem wycieczki ani sprzedawcą imprez turystycznych.

## 3.2. Przykładowe funkcje ORGANIZATORA

- tworzenie grup,
- zarządzanie uczestnikami,
- przekazywanie informacji uczestnikom,
- ustalanie miejsca zbiórki,
- ustalanie godziny zbiórki,
- obsługa funkcji „Zbiórka”,
- przekazywanie trasy,
- udostępnianie planu podróży grupie,
- komunikacja z uczestnikami,
- informacje dotyczące aktualnego miejsca grupy,
- korzystanie z funkcji przewodnika TurystaGo.

---

# 4. ADMINISTRATOR

Administrator nie jest zwykłym użytkownikiem aplikacji.

Konto administratora służy do zarządzania systemem TurystaGo.

System powinien umożliwiać dwa podstawowe modele:

1. **Administrator – pełny dostęp**
2. **Administrator – dostęp ograniczony**

---

# 5. Administrator z pełnym dostępem

Administrator główny może posiadać uprawnienie:

> **CAŁOŚĆ – PEŁNY DOSTĘP**

Po włączeniu tego uprawnienia administrator otrzymuje dostęp do wszystkich funkcji administracyjnych.

Pełny administrator może między innymi:

- zarządzać użytkownikami,
- zarządzać podróżnikami,
- zarządzać organizatorami,
- zarządzać administratorami,
- zarządzać atrakcjami,
- zarządzać kategoriami,
- zarządzać krajami,
- zarządzać miastami,
- zarządzać zgłoszeniami,
- moderować opinie,
- zarządzać zdjęciami,
- zarządzać materiałami audio,
- zarządzać treściami,
- zarządzać planami,
- zarządzać abonamentami,
- przeglądać statystyki,
- zarządzać powiadomieniami,
- zarządzać językami,
- zarządzać ustawieniami systemu,
- przeglądać logi systemowe.

---

# 6. Administrator z ograniczonym dostępem

Administrator może otrzymać tylko wybrane funkcje.

Przykład:

**Administrator atrakcji**

- ☑ Atrakcje – podgląd
- ☑ Atrakcje – dodawanie
- ☑ Atrakcje – edycja
- ☐ Atrakcje – usuwanie
- ☑ Zgłoszenia – podgląd
- ☑ Zgłoszenia – zatwierdzanie
- ☐ Użytkownicy
- ☐ Abonamenty
- ☐ Ustawienia systemu

Administrator nie może korzystać z funkcji, których nie otrzymał.

---

# 7. Moduły administracyjne

System uprawnień powinien obsługiwać co najmniej następujące moduły:

## 7.1. Użytkownicy

- PODRÓŻNICY
- ORGANIZATORZY
- ADMINISTRATORZY
- aktywacja/dezaktywacja kont
- blokowanie kont
- podgląd danych konta
- zarządzanie rolami

## 7.2. Atrakcje

- dodawanie,
- edycja,
- usuwanie,
- zatwierdzanie,
- zdjęcia,
- opis,
- współrzędne GPS,
- audio,
- oceny,
- kategorie.

## 7.3. Kraje i miasta

- dodawanie,
- edycja,
- aktywacja/dezaktywacja,
- przypisywanie atrakcji.

## 7.4. Kategorie

- kategorie główne,
- podkategorie,
- kolejność wyświetlania,
- aktywacja/dezaktywacja.

## 7.5. Zgłoszenia

Administrator może:

- przeglądać zgłoszenia,
- zatwierdzać miejsca,
- odrzucać zgłoszenia,
- wykrywać duplikaty,
- poprawiać dane przed publikacją.

## 7.6. Opinie i oceny

- moderacja,
- ukrywanie nieprawidłowych opinii,
- obsługa zgłoszeń,
- kontrola ocen.

## 7.7. Multimedia

- zdjęcia,
- grafiki,
- materiały audio,
- inne materiały przewodnika.

## 7.8. Abonamenty

- podgląd abonamentów,
- zarządzanie planami,
- kontrola statusów,
- bonusy,
- statystyki płatności.

## 7.9. Statystyki

- liczba użytkowników,
- liczba podróżników,
- liczba organizatorów,
- liczba aktywnych planów,
- popularne atrakcje,
- wykorzystanie funkcji,
- zgłoszenia.

## 7.10. System

- konfiguracja,
- języki,
- powiadomienia,
- logi,
- ustawienia techniczne.

---

# 8. Role administracyjne

System może posiadać gotowe role:

### ADMINISTRATOR GŁÓWNY

Pełny dostęp.

### ADMINISTRATOR ATRAKCJI

Dostęp do:

- atrakcji,
- kategorii,
- krajów,
- miast,
- zgłoszeń.

### MODERATOR

Dostęp do:

- zgłoszeń,
- opinii,
- moderacji użytkowników.

### ADMINISTRATOR TREŚCI

Dostęp do:

- opisów,
- zdjęć,
- audio,
- multimediów.

### ADMINISTRATOR FINANSOWY

Dostęp do:

- abonamentów,
- płatności,
- statystyk finansowych.

### ADMINISTRATOR TECHNICZNY

Dostęp do:

- konfiguracji,
- systemu,
- logów,
- funkcji technicznych.

---

# 9. Indywidualne uprawnienia

Oprócz gotowych ról system powinien pozwalać administratorowi głównemu na tworzenie własnych zestawów uprawnień.

Przykładowe poziomy:

- PODGLĄD,
- DODAWANIE,
- EDYCJA,
- USUWANIE,
- ZATWIERDZANIE,
- MODERACJA,
- ZARZĄDZANIE.

Przykład:

```text
Administrator: Jan Kowalski

Rola:
Administrator atrakcji

Uprawnienia:

☑ Atrakcje
    ☑ podgląd
    ☑ dodawanie
    ☑ edycja
    ☐ usuwanie

☑ Zgłoszenia
    ☑ podgląd
    ☑ zatwierdzanie

☐ Użytkownicy
☐ Abonamenty
☐ Ustawienia systemu
```

---

# 10. Zarządzanie administratorami

Administrator główny może:

- utworzyć konto administratora,
- przypisać rolę,
- nadać indywidualne uprawnienia,
- zmienić uprawnienia,
- odebrać uprawnienia,
- zablokować konto,
- dezaktywować konto,
- przeglądać historię działań administratora.

Nie każdy administrator może zarządzać innymi administratorami.

Uprawnienie do zarządzania administratorami powinno być zarezerwowane dla odpowiednio uprawnionego administratora głównego.

---

# 11. Logi administracyjne

Każda ważna operacja administratora powinna być zapisywana.

Przykład:

```text
Data: 09.09.2026 14:32
Administrator: Jan Kowalski
Moduł: Atrakcje
Akcja: EDYCJA
Obiekt: Zamek Królewski
Zmiana: opis atrakcji
```

Logi powinny umożliwiać ustalenie:

- kto wykonał operację,
- kiedy,
- czego dotyczyła,
- jaki typ operacji wykonano.

---

# 12. Bezpieczeństwo

Panel administratora powinien być oddzielony od części użytkownika.

Schemat:

```text
UŻYTKOWNIK
    ↓
Konto PODRÓŻNIK / ORGANIZATOR
    ↓
Funkcje aplikacji


ADMINISTRATOR
    ↓
Logowanie administracyjne
    ↓
System uprawnień
    ↓
Panel administratora
    ↓
Centralna baza danych
```

Samo posiadanie konta użytkownika nie może dawać dostępu do panelu administratora.

---

# 13. Powiązanie z punktem 57

Punkt 57 – System kont użytkowników i logowania powinien uwzględniać:

```text
KONTO
│
├── PODRÓŻNIK
│
├── ORGANIZATOR
│
└── ADMINISTRATOR
      │
      ├── pełny dostęp
      │
      └── ograniczone uprawnienia
```

Typ konta i uprawnienia powinny być przechowywane w systemie kont użytkowników.

---

# 14. Powiązanie z punktem 63

Struktura aplikacji powinna uwzględniać oddzielny moduł administracyjny:

```text
TurystaGo/
│
├── index.html
│
├── admin/
│   ├── index.html
│   ├── dashboard.html
│   ├── users.html
│   ├── attractions.html
│   ├── categories.html
│   ├── countries.html
│   ├── cities.html
│   ├── reports.html
│   ├── reviews.html
│   ├── subscriptions.html
│   ├── statistics.html
│   ├── notifications.html
│   ├── languages.html
│   ├── settings.html
│   └── logs.html
│
├── admin/
│   ├── css/
│   │   └── admin.css
│   │
│   └── js/
│       ├── admin.js
│       ├── auth.js
│       ├── users.js
│       ├── attractions.js
│       ├── reports.js
│       ├── reviews.js
│       └── statistics.js
│
├── src/
├── components/
├── screens/
├── services/
├── data/
├── assets/
├── audio/
├── css/
├── tests/
└── docs/
```

Docelowa struktura może zostać jeszcze doprecyzowana podczas projektowania backendu i bazy danych.

---

# 15. Zasada projektowa

Najważniejsza zasada systemu:

> **Administrator otrzymuje tylko takie uprawnienia, jakie zostały mu nadane.**

Wyjątek:

> **Administrator główny z uprawnieniem „CAŁOŚĆ” posiada pełny dostęp administracyjny.**

System powinien być przygotowany tak, aby w przyszłości można było dodawać nowe moduły i nowe uprawnienia bez przebudowy całej aplikacji.

---

# 16. Status dokumentu

Dokument stanowi propozycję aktualizacji:

- **punktu 55 – System administracyjny,**
- **punktu 57 – System kont użytkowników i logowania,**
- **punktu 63 – Struktura aplikacji – pliki, foldery i moduły.**

**Wersja 2.0 – do zatwierdzenia przed implementacją.**

Po zatwierdzeniu należy odpowiednio zaktualizować dokumentację w GitHubie, a następnie rozpocząć implementację zgodnie z zatwierdzoną strukturą.
