
var nouns = ["doges", "cats", "mice"];
var gerunds = ["dogeing", "running", "jumping"];
var websites = ["google.com", "facebook.com", "edwinchoate.com"];
var bodyParts = ["knees", "elbows", "toes"];

var noun = nouns[Math.floor(Math.random() * nouns.length)];
var gerund = gerunds[Math.floor(Math.random() * gerunds.length)];
var website = websites[Math.floor(Math.random() * websites.length)];
var bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];


$(document).ready(function () {
    $(".noun").text(noun);
    $(".gerund").text(gerund);
    $(".website").replaceWith("<a href=\"http://" + website + "\" target=\"_blank\">" + website + "</a>");
    $(".body-part").text(bodyPart);
});


