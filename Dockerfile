#récupére l'image de node
FROM node:10

#créer un dossier pour contenir l'application 
WORKDIR /usr/src/app

#copier le code source au sein du dossier
COPY . .

#installer les modules NodeJS nécessaires pour lancer notre serveur
RUN npm install

#exposer un port précis de du container afin de pouvoir communiquer avec lui. Ce port est le port d’écoute du serveur : ici 8800.
EXPOSE 8800

#execution du serveur:
CMD [ "node" ]
