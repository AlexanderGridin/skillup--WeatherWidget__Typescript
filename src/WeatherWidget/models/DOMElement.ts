import { VirtualElement } from "../interfaces/VirtualElement";
import { VirtualAttribute } from "../interfaces/VirtualAttribute";

export class DOMElement {
  private element!: Element;

  constructor(props: VirtualElement) {
    this.createElement(props.tagName)
      .setClassNames(props.classNames)
      .setAttributes(props.attributes)
      .setTextContent(props.textContent)
      .setInnerHTML(props.innerHTML);
  }

  public getNode(): Node {
    return this.element as Node;
  }

  private createElement(tagName: string): this {
    let createdElement: Element = document.createElement(tagName);
    this.element = createdElement;

    return this;
  }

  private setClassNames(classNames: string[] | undefined): this {
    if (classNames) {
      for (let className of classNames) {
        this.element.classList.add(className);
      }
    }

    return this;
  }

  private setAttributes(attributes: VirtualAttribute[] | undefined): this {
    if (attributes) {
      for (let attribute of attributes) {
        this.element.setAttribute(attribute.name, attribute.value);
      }
    }

    return this;
  }

  private setTextContent(textContent: string | undefined): this {
    if (textContent) {
      this.element.textContent = textContent;
    }

    return this;
  }

  private setInnerHTML(innerHTML: string | undefined): this {
    if (innerHTML) {
      this.element.innerHTML = innerHTML;
    }

    return this;
  }
}
