
import BasePage from '../pages/base.page';


class Page3Page extends BasePage {

  get page3Element() {
    return this.$('app-navigation > nav > ul > li:nth-child(3) > a');
  }
  get text() {
    return this.$('app-root > app-page3 > p');
  }

async openPage3(): Promise<void> {
  await this.page3Element.click();
  await expect(this.text).toContain('page3 works!');
}

}
export default new Page3Page();
