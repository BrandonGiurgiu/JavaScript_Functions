console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count){
    for (let i = 1; i <= count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}
printOdds(10);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (userName, age)
{
    let aboveSixteen = `Congrates ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age > 15)
    {
        console.log(aboveSixteen);
    }
    else
    {
        console.log(belowSixteen);
    }
}

checkAge("Brandon", 29);



// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant (x, y)
{
    if (x > 0 && y > 0){
        return "Quadrant 1";
    }
    else if (x < 0 && y > 0){
        return "Quadrant 2";
    }
    else if (x < 0 && y < 0){
        return "Quadrant 3";
    }
    else if (x > 0 && y < 0 ){
        return "Quadrant 4";
    }
    else if(x == 0 && y != 0){
        return "Y-Axis";
    }
    else if (x != 0 && y == 0){
        return "X-Axis";
    }
    else{
        return "Origin";
    }
} 

console.log(whichQuadrant(-2,0));



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function validTriangle (a, b, c){
    if(a+b > c || b+c > a || c+a > b ){
        return "Is a valid triangle:)";
    }
    else{
        return "Is NOT a valid triangle!";
    }
}

console.log(validTriangle(2,7,6));
console.log(validTriangle(2,2,8));



// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlanStatus (planLimit, day, usage){
    let periodLength = 30;
    let curentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * curentAvg;
    let statusMsg;

    if(curentAvg > projectedAvg){
        statusMsg = "EXCEEDING";
    } else if (curentAvg < projectedAvg){
        statusMsg = "UNDER"
    } else{
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${planLimit / periodLength} GB/day

    You are ${statusMsg} your average daily use (${curentAvg} GB/day), 
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB 
    from your data limit
    
    To stay below our data plan, use no more than ${remainingData /  remainingDays} GB/day`)
}


dataPlanStatus(50, 10, 25);