"use strict";
/**
* @author Edwin Choate
* @version 1.0.1
* @description Generates an estimated read time label for articles and adds the label to the DOM
*
* @class
* ReadTime
*/

; (function (window) {

    function ReadTime() {

        const WPM = 220; // reading speed of an average adult, in words per minute

        let textElements = document.querySelectorAll(
            'article h1, article h2, article h3, article h4, article h5, article h6, article p, article figcaption, article li'
        );
        
        let wordCount = 0;

        for (let element of textElements) {
            wordCount += element.innerHTML.split(' ').length;
        }

        let imgCount = document.querySelectorAll('article img').length;

        let imgViewTime = (n) => {
            let time = 0; // in seconds

            // adds 12 sec for the 1st image, 11 sec for the 2nd image, and so on... thru the 10th image
            let i = 1, t = 12;
            while (i <= n && i <= 10) {
                time += t;
                i++;
                t--;
            }
            // any images after the 10th count for 3 seconds each
            if (n > 10) time += 3 * (n - 10);
            
            return time;
        }
        
        let totalTime = 60 * (wordCount / WPM) + imgViewTime(imgCount); // in seconds

        let minutes = Math.floor(totalTime / 60);
        let seconds = Math.round(totalTime - 60 * minutes);
        
        let round = (min) => { 
            return (seconds >= 30) ? min + 1 : min;
        }
        
        document.getElementById("read-time-label").innerHTML = round(minutes) + " minute read";

        console.log(
            `Word Count  : ${wordCount}\n` +
            `Image Count : ${imgCount}\n` +
            `---------------------\n` +
            `Read Time   : ${minutes}m ${seconds}s\n`
        );
    }

    window.ReadTime = ReadTime;

 })(window);

