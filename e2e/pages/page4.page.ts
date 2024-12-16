
import BasePage from '../pages/base.page';


class Page3Page extends BasePage {

  get page3Element() {
    return this.$('app-navigation > nav > ul > li:nth-child(4) > a');
  }
  get button4() {
    return this.$('app-ui1 > div > app-button > button');
  }

async openPage4(): Promise<void> {
  await this.page3Element.click();
  await this.button4.click();

}

}
export default new Page3Page();
