describe('setting environment variables via the CYPRESS_ method', () => {
  it('does not work for certain words', () => {
    // Arbitrary value works fine
    expect(Cypress.env('SOME_VAR')).to.eq('someValue');

    // CONFIG_FILE appears to be reserved/does not take
    expect(Cypress.env('CONFIG_FILE')).to.eq('qa');
  })
})
