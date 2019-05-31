interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'RXtKNr033L5b38rUC1eyDjm3MQbquujL',
  domain: 'dev-oih21c7f.eu.auth0.com',
  callbackURL: 'https://city-meteo.herokuapp.com/callback'
};
