
import BasePage from '../pages/base.page';

class Page1Page extends BasePage {

  get page1Element() {
    return this.$('app-navigation > nav > ul > li:nth-child(1) > a');
  }
  get button() {
    return this.$('app-ui1 > div > app-button > button')
  }
async openPage1(): Promise<void> {
  await this.page1Element.click();
  await this.button.click();
}
}

export default new Page1Page();
