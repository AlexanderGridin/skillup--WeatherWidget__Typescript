import { VirtualAttribute } from "./VirtualAttribute";

export interface VirtualElement {
  tagName: string;
  attributes?: VirtualAttribute[];
  classNames?: string[];
  textContent?: string;
  innerHTML?: string;
}
