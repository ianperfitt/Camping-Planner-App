export interface System {
  id: number;
  name: string;
  description: string;
  info: string;
  items: Item[];
}

export interface Item {
  name: string;
  description: string;
}
