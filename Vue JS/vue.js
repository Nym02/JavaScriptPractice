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
    increaseCounter: function() {
      this.counter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert('You Sure?');
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 3000);
    }
  }
});

new Vue({
  el: '.app2',
  data: {
    attachRed: false,
    color: 'green',
    width: 100
  },
  computed: {
    classes: function() {
      return {
        red: this.attachRed
      };
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  }
});
