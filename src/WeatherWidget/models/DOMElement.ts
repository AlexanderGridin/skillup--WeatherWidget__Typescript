import { VirtualElement } from "../interfaces/VirtualElement";
import { VirtualAttribute } from "../interfaces/VirtualAttribute";

export class DOMElement {
  private HTMLElement!: HTMLElement;

  constructor(props: VirtualElement) {
    this.createHTMLElement(props.tagName)
      .setClassNames(props.classNames)
      .setAttributes(props.attributes)
      .setTextContent(props.textContent)
      .setInnerHTML(props.innerHTML);
  }

  public getHTMLElement(): HTMLElement {
    return this.HTMLElement;
  }

  private createHTMLElement(tagName: string): this {
    let createdElement: HTMLElement = document.createElement(tagName);
    this.HTMLElement = createdElement;

    return this;
  }

  private setClassNames(classNames: string[] | undefined): this {
    if (classNames) {
      for (let className of classNames) {
        this.HTMLElement.classList.add(className);
      }
    }

    return this;
  }

  private setAttributes(attributes: VirtualAttribute[] | undefined): this {
    if (attributes) {
      for (let attribute of attributes) {
        this.HTMLElement.setAttribute(attribute.name, attribute.value);
      }
    }

    return this;
  }

  private setTextContent(textContent: string | undefined): this {
    if (textContent) {
      this.HTMLElement.textContent = textContent;
    }

    return this;
  }

  private setInnerHTML(innerHTML: string | undefined): this {
    if (innerHTML) {
      this.HTMLElement.innerHTML = innerHTML;
    }

    return this;
  }
}
