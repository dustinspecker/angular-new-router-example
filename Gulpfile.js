'use strict';
var gulp = require('gulp')
  , ngNewRouterTemplates = require('gulp-ng-new-router-templates');

gulp.task('templates', function () {
  return gulp.src(['**/*.tpl.html'])
    .pipe(ngNewRouterTemplates({
      extension: '.tpl.html',
      moduleName: 'angularNewRouterExample'
    }))
    .pipe(gulp.dest('./app'));
});
