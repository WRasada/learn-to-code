var obj = {
  name: 'John Doe',
  greet: function(){
    console.log(`Hello ${this.name}, my name is Wes`);
  }
}

obj.greet();

obj.greet.call({ name: 'Jane Doe' });
obj.greet.apply({ name: 'Jane Doe' });
