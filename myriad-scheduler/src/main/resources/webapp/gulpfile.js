/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

var gulp = require('gulp');

var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var babelify = require('babelify');
var browserify = require('browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var del = require('del');

gulp.task('clean', function() {
    return del(['./public']);
});

gulp.task('js', gulp.series('clean', function(done) {
    browserify({
        entries: ['./js/app.js'], // Only need initial file, browserify finds the deps
        transform: ['babelify'],
        debug: false,
        fullPaths: false
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename('myriad.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("public/js/"));
    done();
}));

gulp.task('js-dev', gulp.series('clean', function() {
    browserify({
        entries: ['./js/app.js'], // Only need initial file, browserify finds the deps
        transform: ['babelify'],
        debug: true,
        fullPaths: true
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename('myriad.js'))
        .pipe(gulp.dest("public/js/"));
}));


gulp.task('html', gulp.series('clean', function() {
    return gulp.src('*.html')
        .pipe( gulp.dest('public/'))
}));

gulp.task('css', gulp.series('clean', function() {
    return gulp.src('css/*.css')
        .pipe( gulp.dest('public/css/'))
}));

gulp.task('img', gulp.series('clean', function() {
    return gulp.src('img/**')
        .pipe( gulp.dest('public/img/'))
}));

gulp.task('build-dev', gulp.series('js-dev', 'html', 'css', 'img'));

gulp.task('webserver', gulp.series('build-dev', function() {
    gulp.src('./public')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            port: 8888
        }));
}));

gulp.task('watch', gulp.series('build-dev', function() {
    gulp.watch('index.html', ['html']);
    gulp.watch('css/**', ['css']);
    gulp.watch('js/**', ['js-dev']);
    gulp.watch('img/**', ['img']);
}));

gulp.task('dev', gulp.series('watch', 'webserver'));

gulp.task('default', gulp.series('js', 'html', 'css', 'img'));

gulp.task('build', gulp.series('default'));
