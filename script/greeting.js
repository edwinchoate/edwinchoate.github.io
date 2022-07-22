"use strict";
/**
* @author Edwin Choate
* @version 1.0.3
* @description A simple inline script that greets the user based on time of day
*/

(function(){
    
    const Strings = { Morning: 'morning', Afternoon: 'afternoon', Evening: 'evening' };
    const hour = new Date().getHours(); // 0 to 23
    let timeOfDay = '';
    
    if (hour >= 17 || hour < 3) 
        timeOfDay = Strings.Evening; // 5pm to 3am
    else if (hour < 12)
        timeOfDay = Strings.Morning; // 3am to noon
    else
        timeOfDay = Strings.Afternoon; // noon to 5pm
    
    if ([Strings.Morning, Strings.Afternoon, Strings.Evening].includes(timeOfDay))
        document.write(`Good ${timeOfDay}!`);
    else {
        console.error(
            `There was a problem with greeting.js\nhour: ${hour}\ntimeOfDay: ${timeOfDay}`
        );
    }

})();