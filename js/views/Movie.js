MovieApp.Views.Movies = Backbone.View.extend({
    initialize: function(options) {
        this.movie = options.movie;
    },

    render: function() {
        this.$el.html(`
            <div class='name'>${this.movie.attributes.name}</div>
            <div class='year'>${this.movie.attributes.year}</div>
        `);
        return this;
    }
});