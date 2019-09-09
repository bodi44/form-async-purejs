const API = 'http://localhost:4000';

const handleErrors = resp => {
  if (!resp.ok) throw Error(resp.statusText);
  else return resp;
};

export const getCountries = async () =>
  handleErrors(await fetch(`${API}/countries`)).json();
