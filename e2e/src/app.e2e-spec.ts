import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the default master detail text', () => {
    page.navigateTo();
    expect(page.getMasterDetailText()).toEqual('routine-master-detail works!');
  });
});
