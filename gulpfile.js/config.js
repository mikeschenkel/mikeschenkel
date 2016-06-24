// ----------------------------------------------------------------------------
// #CONFIG
// ----------------------------------------------------------------------------

var devUrl = 'kirby.dev';
var src    = './app/';
var build  = './_site/';

module.exports = {
  devUrl: devUrl,
  paths: {
    src: src,
    build: build
  },
  browserSync: {
    server: {
      baseDir: build
    }
  },
  jekyll: {
    src: src + '**/*(*.html|*.md|*.rb)',
  },
  potato_head: {
    src : src + 'assets/config/**.json',
    colors: {
      src:  src + 'assets/config/colors.json',
      dist: src + 'assets/scss/potato_head/',
      rename: '_settings.colors.scss'
    },
    fonts: {
      src:  src + 'assets/config/fonts.json',
      dist: src + 'assets/scss/potato_head/',
      rename: '_settings.fonts.scss'
    },
    breakpoints: {
      src:  src + 'assets/config/breakpoints.json',
      dist: src + 'assets/scss/potato_head/',
      rename: '_settings.breakpoints.scss'
    }
  },
  css: {
    src:   src + 'assets/scss/**/*.scss',
    dist:  src + 'assets/css/',
    build: build + 'assets/css/',
    sass: {
      includePaths: [src + 'assets/scss/', './bower_components/'],
    },
    autoprefixer: {
      browsers: ['ie >= 11', '> 1% in NL', 'last 2 versions']
    }
  },
  js: {
    src:   src + 'assets/js/**/*.js',
    dist:  src + 'assets/scripts/',
    build: build + 'assets/scripts/'
  },
  img: {
    src:   src + 'assets/img/**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
    build: build + 'assets/img/',
  },
  html: {
    src: build + '**/**.html',
    build: build,
    htmlmin: {
      removeComments: true,
      collapseWhitespace: true,
      preserveLineBreaks: true
    }
  }
};
