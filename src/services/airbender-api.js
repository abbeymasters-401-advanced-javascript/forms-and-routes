export default function getCharacters(url) {
  return fetch(url)
    .then(response => response.json());
}
