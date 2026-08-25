# 10. Baza atrakcji i obiektów TurystaGo

## 1. Cel bazy

Baza atrakcji i obiektów będzie jednym z najważniejszych elementów systemu TurystaGo.

To właśnie z niej aplikacja będzie pobierała informacje potrzebne do:

* wyświetlania atrakcji na mapie,
* wyszukiwania miejsc,
* automatycznego oprowadzania,
* działania GPS,
* przewodnika audio,
* planowania zwiedzania,
* tworzenia tras,
* rekomendowania ciekawych miejsc.

Baza powinna być przygotowana tak, aby można ją było stale rozbudowywać.

---

## 2. Rodzaje obiektów

TurystaGo powinien posiadać wiele kategorii obiektów.

### Zabytki

* zamki,
* pałace,
* dwory,
* kamienice,
* wieże,
* mury miejskie,
* bramy,
* zabytkowe mosty,
* zabytkowe dworce.

### Obiekty sakralne

* kościoły,
* katedry,
* bazyliki,
* kaplice,
* klasztory,
* sanktuaria,
* synagogi,
* cerkwie.

### Historia i kultura

* muzea,
* skanseny,
* miejsca pamięci,
* pola bitew,
* miejsca związane z ważnymi wydarzeniami,
* miejsca związane ze znanymi osobami.

### Przyroda

* parki,
* rezerwaty,
* jeziora,
* rzeki,
* wodospady,
* jaskinie,
* punkty widokowe,
* ogrody.

### Atrakcje

* parki rozrywki,
* atrakcje rodzinne,
* obiekty sportowe,
* wydarzenia,
* festiwale,
* koncerty.

---

## 3. Karta każdego obiektu

Każdy obiekt powinien posiadać własną kartę.

Podstawowe informacje:

**Nazwa obiektu**

**Kategoria**

**Zdjęcie główne**

**Galeria zdjęć**

**Lokalizacja GPS**

**Adres**

**Krótki opis**

**Historia**

**Ciekawostki**

**Przewodnik audio**

**Godziny otwarcia**

**Informacje dotyczące biletów**

**Dostępność dla zwiedzających**

**Czas potrzebny na zwiedzanie**

**Powiązane obiekty**

---

## 4. Lokalizacja GPS obiektu

Każdy obiekt powinien posiadać współrzędne geograficzne.

Pozwoli to systemowi:

* umieścić obiekt na mapie,
* obliczyć odległość,
* wykryć zbliżanie się użytkownika,
* uruchomić odpowiedni przewodnik,
* wyznaczyć trasę.

Dokładność danych lokalizacyjnych będzie szczególnie ważna w przypadku automatycznego oprowadzania.

---

## 5. Strefa obiektu

Oprócz współrzędnych obiekt może posiadać określoną strefę GPS.

Strefa określa obszar, w którym TurystaGo może uznać, że użytkownik dotarł do danego miejsca.

Przykładowo:

**Pomnik – 30 m**

**Kościół – 80 m**

**Zamek – 150 m**

**Skansen – obszar obejmujący cały teren.**

Wartości te powinny być ustalane indywidualnie.

---

## 6. Historia obiektu

Każdy ważniejszy obiekt powinien posiadać rozbudowaną historię.

Może ona obejmować:

* datę powstania,
* fundatora,
* właścicieli,
* architekta,
* najważniejsze wydarzenia,
* przebudowy,
* zniszczenia,
* odbudowy,
* obecne przeznaczenie.

Historia powinna być przedstawiona w sposób zrozumiały dla turysty.

---

## 7. Osoby związane z obiektem

Baza powinna umożliwiać przypisywanie osób związanych z danym miejscem.

Przykładowo:

**Właściciele**

**Fundatorzy**

**Budowniczowie**

**Artyści**

**Pisarze**

**Władcy**

**Duchowni**

**Znani goście**

Dzięki temu użytkownik może przejść od obiektu do informacji o konkretnej osobie.

---

## 8. „Sławni mieszkańcy”

Jedną z kategorii TurystaGo może być:

### „Sławni mieszkańcy”

Funkcja może prezentować osoby związane z daną miejscowością.

Przy osobie można pokazać:

* imię i nazwisko,
* zdjęcie,
* zawód lub działalność,
* miejsce urodzenia,
* miejsce zamieszkania,
* najważniejsze osiągnięcia,
* obiekty związane z daną osobą.

---

## 9. Ciekawostki

Każdy obiekt może posiadać oddzielną sekcję:

### „Czy wiesz, że...?”

W tej części mogą znajdować się krótkie, interesujące informacje.

Przykład:

> „W tym miejscu w XIX wieku odbywały się wydarzenia, które przyciągały mieszkańców z okolicznych miejscowości.”

Ciekawostki mogą być również wykorzystywane w przewodniku audio.

---

## 10. Legendy

Dla wybranych miejsc można stworzyć sekcję:

### „Legenda tego miejsca”

Pozwoli to prezentować lokalne opowieści i przekazy.

Ważne jest jednak wyraźne rozróżnienie pomiędzy:

**faktem historycznym**

a

**legendą lub tradycją lokalną.**

---

## 11. Materiały historyczne

Baza może być rozszerzana o materiały archiwalne.

Przy obiekcie można umieścić:

* stare fotografie,
* pocztówki,
* mapy,
* ryciny,
* dokumenty,
* historyczne plany,
* fotografie porównawcze.

Dzięki temu użytkownik będzie mógł zobaczyć, jak dane miejsce wyglądało dawniej.

---

## 12. Zdjęcia użytkowników

W przyszłości użytkownicy mogą mieć możliwość dodawania własnych zdjęć.

Zdjęcia mogą być przypisywane do konkretnego obiektu.

Przed publikacją powinny jednak podlegać odpowiednim zasadom moderacji.

---

## 13. Oceny i opinie

Użytkownik może w przyszłości ocenić odwiedzony obiekt.

Możliwe jest zastosowanie:

* oceny gwiazdkowej,
* krótkiej opinii,
* rekomendacji,
* oceny przewodnika audio,
* oceny atrakcyjności miejsca.

Opinie powinny być oddzielone od oficjalnego opisu obiektu.

---

## 14. Czas zwiedzania

Każdy obiekt może posiadać orientacyjny czas zwiedzania.

Przykładowo:

**Pomnik – 5 minut**

**Kościół – 20 minut**

**Muzeum – 60 minut**

**Zamek – 90 minut**

**Skansen – 2 godziny**

Informacja ta będzie wykorzystywana podczas planowania tras.

---

## 15. Godziny otwarcia

Jeżeli obiekt jest dostępny dla zwiedzających, baza powinna umożliwiać zapisanie:

* dni otwarcia,
* godzin otwarcia,
* dni zamknięcia,
* sezonowych zmian godzin.

Informacje te powinny być możliwie aktualne.

TurystaGo może dzięki nim ostrzegać użytkownika, jeżeli planowana wizyta może być niemożliwa.

---

## 16. Bilety

Dla obiektów biletowanych można przechowywać informacje dotyczące:

* ceny,
* biletów ulgowych,
* biletów rodzinnych,
* bezpłatnego wstępu,
* możliwości zakupu biletu.

Dane powinny być aktualizowane, ponieważ ceny i zasady wejścia mogą się zmieniać.

---

## 17. Powiązane obiekty

Każdy obiekt może posiadać listę innych miejsc znajdujących się w pobliżu.

Przykład:

**Katedra**

→ muzeum

→ rynek

→ pomnik

→ zabytkowa kamienica

→ pałac

TurystaGo może dzięki temu proponować użytkownikowi kolejne miejsca do odwiedzenia.

---

## 18. Baza wydarzeń

W przyszłości baza może zostać rozszerzona o wydarzenia:

* koncerty,
* wystawy,
* festiwale,
* jarmarki,
* rekonstrukcje historyczne,
* imprezy rodzinne,
* wydarzenia kulturalne.

Wydarzenia powinny posiadać datę, godzinę i lokalizację.

---

## 19. Źródła informacji

Informacje historyczne powinny być przygotowywane na podstawie wiarygodnych źródeł.

W dokumentacji obiektu warto przechowywać również informacje o źródłach, na podstawie których przygotowano opis.

Pozwoli to później łatwiej:

* sprawdzać informacje,
* poprawiać błędy,
* aktualizować dane,
* rozbudowywać opisy.

---

## 20. Weryfikacja danych

Baza powinna posiadać system kontroli jakości.

Informacje mogą być:

**niezweryfikowane**

**w trakcie weryfikacji**

**zweryfikowane**

**wymagające aktualizacji**

Dzięki temu użytkownik otrzymuje możliwie wiarygodne informacje.

---

## 21. Dodawanie nowych obiektów

W przyszłości nowy obiekt może zostać dodany przez administratora lub uprawnionego użytkownika.

Proces powinien obejmować:

**Dodaj obiekt → podaj lokalizację → wybierz kategorię → dodaj informacje → dodaj zdjęcia → weryfikacja → publikacja.**

---

## 22. Rozbudowa bazy przez społeczność

Docelowo TurystaGo może umożliwiać użytkownikom zgłaszanie:

* nowych atrakcji,
* brakujących obiektów,
* błędnych informacji,
* nieaktualnych godzin otwarcia,
* nowych zdjęć.

Nie oznacza to automatycznej publikacji.

Zgłoszenia powinny być odpowiednio weryfikowane.

---

## 23. Baza jako fundament TurystaGo

Baza obiektów będzie łączyć wszystkie najważniejsze funkcje aplikacji:

**BAZA → GPS → MAPA → NAWIGACJA → AUDIO → PLANOWANIE → GRUPA → ALBUM.**

Im lepiej przygotowana będzie baza, tym bardziej wartościowy będzie cały TurystaGo.

---

## 24. Cel docelowy

Docelowo TurystaGo powinien posiadać rozbudowaną, uporządkowaną i stale aktualizowaną bazę miejsc.

Nie chodzi jednak wyłącznie o liczbę obiektów.

Najważniejsza jest **jakość informacji**.

Każde miejsce powinno mieć swoją historię, lokalizację, zdjęcia i – tam, gdzie jest to możliwe – profesjonalnie przygotowany przewodnik audio.

**TurystaGo ma nie tylko wiedzieć, gdzie znajduje się obiekt. Ma wiedzieć, dlaczego warto go zobaczyć.**
