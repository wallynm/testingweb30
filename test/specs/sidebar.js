describe('Sidebar Component', function(){
  before(function() {
    browser.url('/');
  })
  describe('Basic rendering', function() {
    it('Should be visible', function(){
      browser.isVisible('.mdl-navigation').should.be.true;
    });

    it('Should render correctly all 4 items', function() {
      browser.elements('.mdl-navigation a.mdl-navigation__link').value.should.have.length.of(4);
    });

    it('Should have a github link at bottom', function() {
      browser.getAttribute('.mdl-navigation .mdl-navigation__link:last-child', 'href').should.be.equal('https://github.com/CreativeIT/getmdl-dashboard');
    });
  });

  describe('Basic functionallity', function(){
    it('Should navigate correctly', function(){
      browser.click('.mdl-navigation .mdl-navigation__link:nth-child(2)');
      browser.pause(1000);
      var currentSelectedLink = browser.getAttribute('.mdl-navigation .mdl-navigation__link.mdl-navigation__link--current', 'href');
      browser.getUrl().should.be.equal(currentSelectedLink);
    });

    it('Should hide navigation sidebar at lower resolution', function(){
      browser.setViewportSize({ width: 1024, height: 700 }, true);
      browser.pause(2000);
      browser.isVisible('.mdl-navigation').should.be.false;
    });

    it('Should be able to open sidebar', function(){
      browser.click('.mdl-layout__header .mdl-layout__drawer-button');
      browser.pause(2000);

      browser.isVisible('.mdl-navigation').should.be.true;
    });

    it('Should be able to close sidebar', function(){
      browser.click('.mdl-layout__obfuscator');
      browser.pause(2000);

      browser.isVisible('.mdl-navigation').should.be.false;
    });
  });
});