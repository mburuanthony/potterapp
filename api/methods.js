import { BASE_URL, CHARACTERS } from "./config";

export const getcharacters = async () => {
  const url = BASE_URL + CHARACTERS.characters;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: null,
  });

  const isOK = res.ok;
  const data = await res.json();

  return { isOK, data };
};

export const retrievecharacter = async (charUid) => {
  const url = BASE_URL + CHARACTERS.characters;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: null,
  });

  const isOK = res.ok;
  const data = await res.json();

  const character = data?.filter((char) => char?.id == charUid);

  return { isOK, character: character[0] };
};
