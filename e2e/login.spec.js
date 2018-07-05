describe('login', () => {
  it('should is visible emailInputTextLogin and input email', async () => {
    await expect(element(by.id('emailInputTextLogin'))).toBeVisible();
    await element(by.id('emailInputTextLogin')).replaceText('ruben.romero@guidesmiths.com');
  });

  it('should is visible passwordInputTextLogin and input password', async () => {
    await waitFor(element(by.id('passwordInputTextLogin'))).toBeVisible().withTimeout(2000);
    await element(by.id('passwordInputTextLogin')).typeText('123456');
  });

  it('should is visible buttonLogin and input password', async () => {
    await expect(element(by.id('buttonLogin'))).toBeVisible();
    await element(by.id('buttonLogin')).tap();
  });

  it('should is visible homeView', async () => {
    await expect(element(by.id('homeView'))).toBeVisible();
  });
})
