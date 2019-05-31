# City Meteo App

Cet exemple montre comment ajouter une authentification à une application angular à l'aide du plateforme d'autorisation Auth0 à partir de la page de connexion hébergée et appeler des services tier de google geocoding et openweathermap afin d'avoir les informations relative à la meteo.

 L'exemple utilise la CLI angulaire.

## Commencer

Installez la CLI angulaire et les dépendances de l'application.

```bash
npm install -g @angular/cli
cd cityMeteo
npm install
```


## Run the Application

Le serveur de développement fourni avec la CLI angular peut être utilisé pour servir l’application.

```bash
npm start
```

L'application sera servie à `http://localhost:3000`.

Le diagramme d'activité relative à l'application City Meteo se trouve dans le lien suivant :
https://drive.google.com/open?id=15Rds_LE7ZeN_fsUnjxIQ5Lb13zlJVqu-

## Qu'est-ce que Auth0?
Auth0 vous aide à:

* Ajouter une authentification avec plusieurs sources d'authentification comme des réseaux sociaux tels que Google, Facebook, un compte Microsoft, LinkedIn, GitHub, Twitter, Box, Salesforce, entre autres , ou des systèmes d’identité d’entreprise tels que Windows Azure AD, Google Apps, Active Directory, ADFS ou tout fournisseur d’identité SAML .

* Ajouter une authentification via des bases de données plus traditionnelles   [nom d'utilisateur / mot de passe]

* Ajouter un support pour reliant différents comptes d'utilisateurs avec le même utilisateur.

* Prise en charge de la génération de jetons Web Json signés pour appeler vos API et transmettre l'identité de l'utilisateur de manière sécurisée.

* Analyse de comment, quand et où les utilisateurs se connectent.

* Extrayez les données d'autres sources et ajoutez-les au profil de l'utilisateur, via règles JavaScript.

## Qu'est-ce que le géocodage?
Le géocodage consiste à convertir des adresses en coordonnées géographiques (telles que la latitude et la longitude), que vous pouvez utiliser pour placer des marqueurs sur une carte ou positionner la carte.

Dans cette application on a utilisé le géocodage inversé qui est le processus de conversion des coordonnées géographiques en une adresse lisible par l'homme.

## Qu'est-ce que OpenWeatherMap
OpenWeatherMap est un service en ligne qui fournit des données météorologiques, notamment des données météorologiques actuelles, des prévisions et des données historiques, aux développeurs de services Web et d'applications mobiles.

## Author

[Jlassi Imen](https://www.linkedin.com/in/imen-jlassi-55a2b09b/)



