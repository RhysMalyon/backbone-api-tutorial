MovieApp.Views.Search = Backbone.View.extend({
    events: {
        'click button' : 'getmovies'
    },

    template: "<input type='text' placeholder='Search'> \
                <button>Search movie</button> \
                <ul id='movie-list'></ul>",

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    getmovies: function(){
        let title = this.$el.find('input').val();
        let movies = new MovieApp.Collections.Movies({ title: title });

        movies.fetch({
            success: this.rendermovies.bind(this)
        });
    },

    rendermovies: function(movies){
        let movieview;
        for (var n in movies.models) {
		
            movieview = new MovieApp.Views.MovieView({model: movies.models[n]});
    
            this.$el.find('#movie-list').append(movieview.render().el);
        }
    }
})