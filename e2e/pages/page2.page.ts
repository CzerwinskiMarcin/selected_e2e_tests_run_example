
import BasePage from '../pages/base.page';


class Page2Page extends BasePage {

  get page2Element() {
    return this.$(' app-navigation > nav > ul > li:nth-child(2) > a');
  }
  get input() {
    return this.$('#some-input');
  }
async openPage2(): Promise<void> {
  await this.page2Element.click();
  await this.input.click();
}

}
export default new Page2Page();
