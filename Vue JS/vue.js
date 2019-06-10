new Vue({
  el: '.app',
  data: {
    title: 'Hello world',
    link: 'http://google.com',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      this.title = 'Hello';
      return 'Hello';
    },
    increaseCounter: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert('You Sure?');
    }
  }
});
