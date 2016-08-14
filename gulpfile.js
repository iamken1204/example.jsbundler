
var elixir = require('laravel-elixir')

require('laravel-elixir-vue')

elixir(function(mix) {

    mix.webpack('app.js', 'public/js/a_js_compiled_by_bundler.js')

});
