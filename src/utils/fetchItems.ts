export async function fetchItems() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache", // SSG
    }
  );
  const data = await res.json();
  return data;
}
