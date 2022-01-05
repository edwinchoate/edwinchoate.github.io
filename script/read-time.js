"use strict";
/**
* @author Edwin Choate
* @version 1.0.0
* @description Generates an estimated read time label for articles and adds the label to the DOM
*
* @class
* ReadTime
*/

; (function (window) {

    function ReadTime() {

        const WPM = 120; // reading speed of an average adult in words per minute

        let wordCount = 0;
        
        // counts words in the paragraphs of the <article> element(s)
        let paragraphs = document.querySelectorAll('article p');
        for (let p of paragraphs) {
            wordCount += p.innerHTML.split(' ').length;
        }
        
        // counts words in all <figcaption> elements on the page
        let figcaptions = document.querySelectorAll('figcaption');
        for (let f of figcaptions) {
            wordCount += f.innerHTML.split(' ').length;
        }

        let minutes = Math.floor(wordCount / WPM);
        let seconds = 60 * ((wordCount % WPM) / WPM);

        let round = (min) => { 
            return (seconds >= 30) ? min + 1 : min;
        }

        document.getElementById("read-time-label").innerHTML = round(minutes) + " minute read";

        console.log(`Word Count: ${wordCount}\nRead Time:  ${minutes}m ${seconds}s`);
    } 

    window.ReadTime = ReadTime;

 })(window);


   