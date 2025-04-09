export const delay = (callback: Function, ms: number) => setTimeout(callback, ms);

export const getElement = (selector: string): any => document.querySelector(selector);

export const getAllElements = (selector: string) => document.querySelectorAll(selector);

export const changeAttribute = (target: Element, dataAttribute: string, val= true) => target.setAttribute(dataAttribute, String(val));

export const changeClass = (target: Element, removeClass: string, addClass: string) => {
    target.classList.remove(removeClass);
    target.classList.add(addClass);
}