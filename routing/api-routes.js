var express = require('express');
var path = require('path');
var friendList	= require('/..app/data/friends.js');

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friendList);
	});
}