describe('Todo list component', function() {
  before(function() {
    browser.url('/');
  });
  
  describe('Basic rendering', function() {
    it('Should render title correctly', function() {
      browser.getText('.card-todo .mdl-card__title').should.be.equal("To-do list");
    });

    it('Should render 4 items', function() {
      var items = browser.elements('.card-todo .mdl-list__item').value;
      items.should.have.length.of(4);
    });

    it('Should render 5 items --- Just a sample error', function() {
      var items = browser.elements('.card-todo .mdl-list__item').value;
      items.should.have.length.of(5);
    });

    it('Should bring selected item', function() {
      browser.getAttribute('.card-todo .mdl-list__item input[type=checkbox]', 'checked').should.contain('true');
    });

    it('Should have an remove button', function(){
      browser.isVisible('.card-todo .button-remove').should.be.true;
    });

    it('Should have an add button', function(){
      browser.isVisible('.card-todo .button-add').should.be.true;
    });
  });

  describe('Functionallity', function(){
    it('Should show an input once plus button pressed', function(){
      browser.click('.card-todo .button-add');
      browser.pause(1000);

      browser.isVisible('.card-todo .mdl-list__item .mdl-textfield__input').should.be.true;
    });

    it('Should disable "plus button" while input visible', function() {
      browser.isEnabled('.card-todo .button-add').should.be.false;
    });

    it('Should disable "remove button" while input visible', function() {
      browser.isEnabled('.card-todo .button-remove').should.be.false;
    });

    it('Should able to insert a new task on "Enter" key', function() {
      browser.url('/');
      // Armazeno quantos itens existia antes de inserir
      var list = browser.elements('.card-todo .mdl-list__item label .mdl-checkbox__label').value.length;

      browser.click('.card-todo .button-add');
      browser.pause(1000);

      browser.setValue('.card-todo .mdl-list__item .mdl-textfield__input', 'New task for implement tests on the fly!');
      browser.pause(1000);

      browser.keys(['Enter']);
      browser.pause(1000);

      var newList = browser.elements('.card-todo .mdl-list__item label .mdl-checkbox__label').value.length;

      // Valida se as duas listas estao diferentes
      list.should.not.be.equal(newList);
    });

    it('Should cancel task insert once "Esc key" pressed', function(){
      browser.click('.card-todo .button-add');
      browser.pause(1000);

      // Sets the value
      browser.setValue('.card-todo .mdl-list__item .mdl-textfield__input', 'New task for implement tests on the fly!');
      browser.pause(1000);
    
      browser.keys(['Escape']);
      browser.pause(1000);

      browser.isVisible('.card-todo .mdl-list__item .mdl-textfield__input').should.be.false;
    });

    it('Should be able to select a task clicking on check input', function() {
      // browser.getAttribute('.card-todo .mdl-list__item:first-child input[type=checkbox]', 'checked').should.be.false;
      browser.click('.card-todo .mdl-list__item:first-child .mdl-checkbox__ripple-container');
      browser.pause(1000);
      browser.getAttribute('.card-todo .mdl-list__item:first-child input[type=checkbox]', 'checked').should.be.equal('true');
    });

    it('Should be able to remove multiple tasks on "Remove button"', function() {
      var uncheckedSize = browser.elements('.card-todo .mdl-list__item label .mdl-checkbox__label').value.length;

      for(var i = 1; i < uncheckedSize + 1; i++){
        if(browser.getAttribute('.card-todo .mdl-list__item:nth-child('+i+') input[type=checkbox]', 'checked') != 'true'){
          browser.click('.card-todo .mdl-list__item:nth-child('+i+') .mdl-checkbox__ripple-container');
          browser.pause(1000);
        }
      }
      
      browser.click('.card-todo .button-remove');
      browser.pause(2000);
      browser.elements('.card-todo .mdl-list__item label .mdl-checkbox__label').isVisible().should.be.false;
    });

    it('Should reload all tasks on refresh', function() {
      browser.refresh();
      var items = browser.elements('.card-todo .mdl-list__item').value;
      browser.pause(1000);
      items.should.have.length.of(4);
    });
  })
});