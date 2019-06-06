new Vue({
    el: '.app',
    data: {
        title: 'Hello world',
        link: 'http://google.com'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function(){
            this.title = 'Hello';
            return 'Hello';
        }

    }
});