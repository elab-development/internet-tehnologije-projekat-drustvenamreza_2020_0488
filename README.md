Projekat sadrži dve aplikacije radjene u Node.js-u i Reac-u. Sledi detaljan opis i redosled izvršavanja naredbi za uspešno pokretanje projekta.
Koraci za pokretanje:
1. Preuzeti projekat(u ZIP ili nekom drugom formatu), otpakovati ga i otvoriti u nekom podržanom okruženju(npr VS Code)
2. Pokretanje backend Node.js aplikacije
  2.1 Otvoriti novi terminal, uneti i izvršiti sledeće naredbe:
   cd Backend
   npm install
   npm start
3. Kreirati online MongoDb bazu, izvršiti izmene za putanju ka sopstvenoj bazi u .env fajlu, kao i JSON fajlu za migracije
   3.1 Za izvršavanje migracija ka bazi otvoriti novi terminal, uneti i izvršiti sledeće naredbe:
     3.1.1 za izvrsavanje efekta migracije:
      migrate-mongo up
     3.1.2 za poništavanje efekta migracije (rollback):
     migrate-mongo down
  
4. Pokretanje frontend React aplikacije
   4.1 Otvoriti novi terminal, uneti i izvršiti sledeće naredbe:
   cd Frontend
   cd myapp
   npm install
   npm start
