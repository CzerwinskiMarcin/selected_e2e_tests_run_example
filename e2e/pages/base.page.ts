export default abstract class BasePage {
  constructor(private selector = 'body') { }

  // This is to be able to use this.$(something) which prevents class-methods-use-this in getters
  // and to make sure we are selecting items from the proper page root selector.
  $(element: string) {
    return $(this.selector).$(element);
  }

  $$(elements: string) {
    return $(this.selector).$$(elements);
  }

  get pageElement() {
    return $(this.selector);
  }
}
