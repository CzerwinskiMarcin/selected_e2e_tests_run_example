import Page4Page from '../pages/page4.page';


describe('', () => {
  it('open website', async () => {
   await open('http://localhost:4200/')
  });

  it('Page1 click', async () => {
    await Page4Page.openPage4();
  });
});
