
var elixir = require('laravel-elixir')

elixir.config.assetsPath = 'src'

require('laravel-elixir-vue')

elixir(function(mix) {

    mix.webpack('app.js', 'public/js/a_js_compiled_by_bundler.js')

});
