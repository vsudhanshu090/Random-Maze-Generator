var canvas = document.getElementById("myCanvas");  
var w = 20; //width of one cell

var width = canvas.width;
var height = canvas.height;

var c = canvas.getContext("2d");  
c.fillStyle = "gray";  
c.fillRect(0,0,width,height);

var rows = Math.floor(height/w);
var cols = Math.floor(width/w);

var grid = [];
var current;

var stack = [];
var q = [];