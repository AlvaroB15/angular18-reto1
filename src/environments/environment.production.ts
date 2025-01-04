const getEnvVars = () => ({
  URL_ENDPOINT: import.meta.env?.['NG_APP_URL_ENDPOINT'],
});

export const environment = getEnvVars();
