export interface Item {
  id: string;
  name: string;
  description: string;
  plaintext: string;
  into: string[];
  image: {
    full: string;
    group: string;
    sprite: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    [key: string]: boolean;
  };
  stats: {
    [key: string]: number;
  };
}

export interface Items {
  [key: string]: Item;
}

export interface DataDragonItems {
  type: string;
  version: string;
  data: Items;
}
