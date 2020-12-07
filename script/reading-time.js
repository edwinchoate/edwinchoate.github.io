"use strict";
/**
* @author Konstantin Ivanov
* modified by Edwin Choate
* @version 1.0.0
* @description JavaScript Reading time plugin
*
* @class
* ReadingTime
*/

; (function (window) {

    var wordsPerSecond,
        totalWords,
        totalReadingTimeSeconds,
        readingTimeDuration,
        readingTimeSeconds;

        

    function ReadingTime() {

        const wordsPerMinute = 220;
        // Select all the paragraphs in element with ID readText.
        const paragraphs = document.querySelectorAll('article p');
        const figcaptions = document.querySelectorAll('figcaption');

        // The counter.
        var count = 0;

        for (var i = 0; i < paragraphs.length; i++) {
            // Split the innerHtml of the current paragraph to count the words.
            count += paragraphs[i].innerHTML.split(' ').length;
        }

        for (var i = 0; i < figcaptions.length; i++) {
            // Split the innerHtml of the current paragraph to count the words.
            count += figcaptions[i].innerHTML.split(' ').length;
        }

        //split text by spaces to define total words
        totalWords = count;

        //define words per second based on words per minute (s.wordsPerMinute)
        wordsPerSecond = wordsPerMinute / 60;

        //define total reading time in seconds
        totalReadingTimeSeconds = totalWords / wordsPerSecond;

        // define reading time
        readingTimeDuration = Math.floor(totalReadingTimeSeconds / 60);

        // define remaining reading time seconds
        readingTimeSeconds = Math.round(totalReadingTimeSeconds - (readingTimeDuration * 60));

        if (readingTimeSeconds > 30) {
            readingTimeDuration = readingTimeDuration + 1
        } 

        // Add reading time label to document
        document.querySelector(".reading-time-label").innerHTML = readingTimeDuration + " minute read";
    }

     //-- return the window object
    window.ReadingTime = ReadingTime;

 })(window);


