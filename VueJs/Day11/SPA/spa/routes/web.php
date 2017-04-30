<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/statuses', 'StatusesController@index');
Route::post('/statuses', 'StatusesController@store');
