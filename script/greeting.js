"use strict";
/**
* @author Edwin Choate
* @version 1.0.3
* @description A simple inline script that greets the user based on time of day
*/

(function(){
    
    const morning='morning', afternoon='afternoon', evening='evening';
    const hour = new Date().getHours(); // 0 to 23
    let timeOfDay = '';
    
    if (hour >= 17 || hour < 3) 
        timeOfDay = evening; // 5pm to 3am
    else if (hour < 12)
        timeOfDay = morning; // 3am to noon
    else
        timeOfDay = afternoon; // noon to 5pm
    
    if ([morning, afternoon, evening].includes(timeOfDay))
        document.write(`Good ${timeOfDay}!`);
    else {
        console.error(
            `There was a problem with greeting.js\nhour: ${hour}\ntimeOfDay: ${timeOfDay}`
        );
    }

})();