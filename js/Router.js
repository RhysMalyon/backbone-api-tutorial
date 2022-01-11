MovieApp.Router = Backbone.Router.extend({
    routes: {
        'home': 'home',
        'search': 'search',
        '*path': 'home'
    },

    home: function(){
        const view = new MovieApp.Views.Home();
        $('#main').html(view.render().el);
    },

    search: function(){
        const view = new MovieApp.Views.Search();
        $('#main').html(view.render().el);
    }
});