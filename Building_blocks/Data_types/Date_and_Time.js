// Date => built in object that stores date, time and provide methods for date/time management.

// new Date() => creates a new date object for the current date/time.
let now = new Date(); 
alert(now);

// new Date(timestamp) => creates a date object with the time = no. of ms passed after 1 Jan, 1970.

let Jan3_1970 = new Date(2 * 24 * 3600 * 1000);

alert(Jan3_1970);

// timestamp = no. of ms passed since the beginning of 1 Jan 1970.

// Create a datetime object representing 5 July 1968.

// 0 --> 1 Jan 1970
// 1 Jan 1969 = -(365 * 24 * 3600 * 1000); => dates before 1 Jan 1970 have -ve timestamp.

let Jul5_1968 = new Date(-(366+365-31-29-31-30-31-30-4) * 24 * 3600 * 1000);

alert(Jul5_1968);

// new Date(datestring) => parses the string to date-time object.

let date = new Date("2017-07-17");
alert(date);

// time is not set => So, it is assumed to be midnight GMT and is adjusted according to the timezone.

// new Date(year, month, date, hours, min, seconds, ms)
// year => 4-digit
// month => [0-11] = [Jan-Dec].
// date => default = 1.
// hours, min, sec, ms => default = 0.

let dAte = new Date(2021, 1);

alert(dAte);

// Accessing Date components.

// year

alert(now.getFullYear());
alert(now.getUTCFullYear());


// month

alert(now.getMonth());
alert(now.getUTCMonth());

// date

alert(now.getDate());
alert(now.getUTCDate());

// hours

alert(now.getHours());
alert(now.getUTCHours());

// min

alert(now.getMinutes());
alert(now.getUTCMinutes());

// sec

alert(now.getSeconds());

// day
// [0-6] = [Sunday-Saturday]
alert(now.getDay());

// getTime() => returns the timestamp for the date. Have no UTC variant.

alert(now.getTime());

// getTimezoneOffset() => returns difference between UTC and the local time zone in minutes.

alert(now.getTimezoneOffset());

// Setting date components

let daTe = new Date();

daTe.setDate(25);
daTe.setMonth(11);
daTe.setFullYear(2024);

alert(daTe);

// Auto-Correction => date object automatically adjusts out-of-range values.

daTe.setDate(32);

alert(daTe); // Jan 1 2025.

// This feature is used to get date after a given period of time.

daTe.setDate(daTe.getDate()-100);

alert(daTe);

// dates can be subtracted => result is in ms.

// PROBLEM :-
// Find the operation time of a given loop.

let start = new Date();

for (let i = 0; i < 1e8; i++) {
    let calc = 7;
}

let end = new Date();

alert(`the operational time of loop is ${end-start}`);

// Date.now() => returns timestamp without creating objects
// used in the areas where performance matters.

// Date.parse(str) => reads date from string and returns a timestamp. 
// String should be of the format => "YYYY-MM-DDTHH:mm:ss.sssZ"
// T -> delimiter
// Z -> time zone => in +-hh:mm.

let time = Date.parse("2021-02-11T01:30:45.786");

alert(new Date(time));

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

let DaTe = new Date(Date.parse("2012-02-20T03:12:00.000"));

alert(DaTe);

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let getWeekDay = (date) => {
    let map = new Map([
        [0,"MO"],
        [1,"TU"],
        [2,"WE"],
        [3,"TH"],
        [4,"FR"],
        [5,"SA"],
        [6,"SU"],
    ]);

    return map.get(date.getDay());
};

let DatE = new Date(2012,0,3);
alert( getWeekDay(date) ); 

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.
// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
// Should work reliably for days=365 or more:

// We will take advantage of Auto-Correction property of date object.

DatE.setDate(2);
DatE.setMonth(0);
DatE.setFullYear(2015);

let getDateAgo = (date,days) => {
    let newDate = structuredClone(date);
    newDate.setDate(newDate.getDate()-days)
    return newDate;
};

alert( getDateAgo(DatE, 1) );
alert( getDateAgo(DatE, 2) );
alert( getDateAgo(DatE, 365) ); 

// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

let getLastDayOfMonth = (year,month) => {
    let date = new Date(year,month+1,0);
    return date.getDate();
};

alert(getLastDayOfMonth(2012, 1));

// Write a function formatDate(date) that should format date as follows:
// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

let formatDate = (date) => {
    let t = (Date.now() - date.getTime())/1000;
    
    if (t < 1) {
        return "right now";
    } else if (t < 60) {
        return `${t} sec. ago`;
    } else if (t/60 < 60) {
        return `${t/60} min. ago`;
    }
    
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear().toString().slice(2)} ${date.getHours()}:${date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()}`;
};

alert( formatDate(new Date(new Date - 1)) );
alert( formatDate(new Date(new Date - 30 * 1000)) );
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
alert( formatDate(new Date(new Date - 86400 * 1000)) );