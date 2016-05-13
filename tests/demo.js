_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

var Todo = Backbone.Model.extend({
  defaults: [
    title: '',
    completed: false
  ]
});

var myTodo = new Todo({
  title: 'Check attributes property of the logged modesl in console'
});

var TodoView = Backbone.View.extend({

  tagName: 'li',

  todoTpl: _.template('example template'),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function() {
    this.$el = $('#todo');
  },

  render: function() {
    this.$el.html(this.todoTpl(this.model.attributes));
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {
    //when double clicked
  },

  close: function() {
    //when todo loses focus
  },

  updateOnEnter: function(e) {
    //when keypress in todo edit mode
  }

});

var todoView = new TodoView({model: myTodo});

console.log('todoView.el');
