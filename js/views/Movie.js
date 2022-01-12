MovieApp.Views.MovieView = Backbone.View.extend({
    tagName: 'div',

    initialize: function(options){
        if (options.model) {
            this.model = options.model
        }
    },

    render: function() {
        const moviePoster = this.model.attributes.Poster
        const movieTitle = this.model.attributes.Title
        const movieYear = this.model.attributes.Year

        this.$el.html(`
            <img src="${moviePoster}" alt="${movieTitle}">
            ${movieTitle} - ${movieYear}
        `);

        return this;
    }
});