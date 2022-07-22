"use strict";
/**
* @author Edwin Choate
* @version 1.0.0
* @description A simple inline script that greets the user based on time of day
*/

(function(){
    let hour = new Date().getHours();
    let timeOfDay = '';

    if (hour >= 17 || hour < 3) timeOfDay = 'evening';  // 5pm to 3am
    else if (hour < 12) timeOfDay = 'morning';          // 3am to noon
    else timeOfDay = 'afternoon';                       // noon to 5pm

    if (timeOfDay) document.write('Good ' + timeOfDay + '! ');
})();