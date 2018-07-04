describe('login', () => {
  it('should is vesible emailInputTextLogin and input email', async () => {
    await expect(element(by.id('emailInputTextLogin'))).toBeVisible();
    await element(by.id('emailInputTextLogin')).replaceText('ruben.romero@guidesmiths.com');
  });

  it('should is vesible passwordInputTextLogin and input password', async () => {
    await waitFor(element(by.id('passwordInputTextLogin'))).toBeVisible().withTimeout(2000);
    await element(by.id('passwordInputTextLogin')).typeText('123456');
  });

  it('should is vesible buttonLogin and input password', async () => {
    await expect(element(by.id('buttonLogin'))).toBeVisible();
    await element(by.id('buttonLogin')).tap();
  });

  /*it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });*/
})
