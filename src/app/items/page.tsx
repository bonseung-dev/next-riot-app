import { fetchItems } from "@/utils/fetchItems";
import ItemsList from "@/components/ItemList";

export default async function ItemsPage() {
  const itemsData = await fetchItems();

  return (
    <div>
      <h1>아이템 목록</h1>
      <ItemsList initialData={itemsData} />
    </div>
  );
}
