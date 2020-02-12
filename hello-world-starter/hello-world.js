// Hello World JavaScript
// don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

// self-executing "global" anonymous function
// it's here to keep variable and function scope
// contained within our script
(function () {

    // use strict enforces more rules
    // rules make us better programmers
    "use strict";

    // === === === === === === === === === === === === ===
    // === === === ===   global variables  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    // initializes a string variable
    var new_column1 = "<p>Just kidding please save me</p>";
    var new_column2 = "<p>It's getting worse</p>";
    var old_column1 = "";
    var old_column2 = "";

    // this is how we output to the console log
    // useful for debugging your programs!
    console.log("-- hello_world.js starting --");
    console.log("new_column1: " + new_column1);
    console.log("old_column1: " + old_column1);
    console.log("new_column2: " + new_column2);
    console.log("old_column2: " + old_column2);
    console.log("-----------------------------\n\n\n");

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    // "click" event listeneer with anonymous function (WHAT!?!?)
    document.body.addEventListener("click", 
	function togglecolumn () {

        // grab the current column1 column and save it!
        old_column1 = document.getElementById("hello-world-column1").innerHTML;

        // replace the screen contents of column1 column with new_text
        document.getElementById("hello-world-column1").innerHTML = new_column1;

        // grab the current column1 column and save it!
        old_column2 = document.getElementById("hello-world-column2").innerHTML;

        // replace the screen contents of column1 column with new_text
        document.getElementById("hello-world-column2").innerHTML = new_column2;

        console.log("-- updated by click --");
        console.log("new_column1: " + new_column1);
        console.log("old_column1: " + old_column1);
        console.log("new_column2: " + new_column2);
        console.log("old_column2: " + old_column2);
        console.log("----------------------\n\n\n");

        // this allows the "toggle" - we swap the old for the new!
        new_column1 = old_column1;
        new_column2 = old_column2;

        console.log("-- updated by \"toggle\" --");
        console.log("new_column1: " + new_column1);
        console.log("old_column1: " + old_column1);
        console.log("*** NOTE: new_column1 == old_column1 now! ***");
        console.log("new_column2: " + new_column2);
        console.log("old_column2: " + old_column2);
        console.log("*** NOTE: new_column2 == old_column2 now! ***");
        console.log("-------------------------\n\n\n");
    });
}());