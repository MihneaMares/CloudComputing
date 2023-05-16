Wish Book Hub

Link prezentare -> 
Link publicare -> https://cloud-computing-qono0jifs-mihneamares.vercel.app/

1. Introducere
Aplicatia prezenta in acest repository reprezinta un wishlist de carti astfel incat utilizatorul sa tina pasul cu toate cartile de interes aparute. Aceasta utilizeaza doua servicii in cloud, MongoDb si ChatGPT de la Openai.

![image](https://github.com/MihneaMares/CloudComputing/assets/69733536/1fb51fb1-3a58-4149-9ec6-a6d9a0a03cea)


2. Descriere problema
O aplicatie pentru stocarea unui wishlist de carti este absolut necesara in lumea de astazi. Cu o lista interminabila de titluri si autori, este dificil sa tii pasul cu cartile pe care vrei sa le citesti sau sa le cumperi. Indiferent daca esti un pasionat al fictiunii sau ai un interes special pentru cartile de dezvoltare personala, aceasta aplicatie iti va permite sa ai mereu la indemana o lista actualizata cu cele mai recente descoperiri literare.

3. Descriere API
API-urile permit dezvoltatorilor sa acceseze functionalitatile unei aplicatii sau servicii externe fara a cunoaste detalii interne complexe. Ele definesc metode standardizate prin care aplicatiile pot solicita si primi date sau pot trimite instrucțiuni catre alte aplicatii. Astfel, API-urile faciliteaza integrarea si interoperabilitatea intre diverse componente software. API-urile folosite in cadrul acestei aplicatii sunt cele CRUD, fiind request-urile esentiale pentru realizarea oricarui program software. Pentru testarea tuturor request-urilor am utilizat Postman, in captura de mai jos  

![image](https://github.com/MihneaMares/CloudComputing/assets/69733536/7fba6f9d-b5c2-4ba7-a83c-3e0ebbdae78d)

4. Flux de date
Utilizatorul poate vizualiza cartile adaugate deja in baza de date, sau poate adauga alte carti cu ajutorul request-ului de POST in baza de date cu stocare in cloud cu ajutorul MongoDB. De asemenea, utilizatorul poate sterge cartile citite deja cu ajutorul request-ului de DELETE.
In pagina de inserare, utilizatorul poate adauga cartile dorite in wishlist-ul din pagina principala. Cu ajutorul serviciului de la OpenAi, utilizatorul poate cere recomandari de carti robotului ChatBook, dar si pentru a afla ultimile titluri aparute, in orice limba doreasca utilizatorul sa foloseasca.
    
5. Capturi aplicatie

![image](https://github.com/MihneaMares/CloudComputing/assets/69733536/2578eab4-0c59-4b2d-8424-6d8602627cd2)

![image](https://github.com/MihneaMares/CloudComputing/assets/69733536/8f8c53ff-8f53-4441-b6d4-5b59dacdeb8d)

6. Referinte
https://vercel.com/
https://flowbite.com/
https://nextjs.org/docs
https://platform.openai.com/docs/introduction
https://github.com/guritaalexandru/cc-next-2/tree/main
