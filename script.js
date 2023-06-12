const HIT_COEFFICIENT       = 5;
const MAX_NUMBER_OF_HITS    = 4;

var isRobotTurnedOn         = true;
var numberOfAvailableHits   = MAX_NUMBER_OF_HITS;

while(isRobotTurnedOn) { // превод "въртѝ ми го безкрай"

    const objectInFrontOfMe = prompt(`Какъв обект има пред мен?`);

    if (objectInFrontOfMe == 1) {
        alert("Go sideway");
    }

    if (objectInFrontOfMe == 2) {
        alert(`Jump`);
    }

    if (objectInFrontOfMe == 3) {
        alert(`Forward`);
    }
    if (objectInFrontOfMe == 0) {
        alert(`Robot turn off`);
        isRobotTurnedOn = false;
    }

    //task 2.1
    const numberOfEnvPixels = prompt(`Засечени пиксели от заобикалащия ни терен`);
    const IsMouseDetected   = numberOfEnvPixels % 2 == 0;
        // TODO: да не забравя да извадя направения удар от numberOfAvailableHits
    // task 2.2
    const IsBatteryFull     = numberOfAvailableHits > 0;

    if(!IsBatteryFull) {
        alert(`Свърши ми тока`);
        isRobotTurnedOn = false; // или вместо този ред може break;
    }

    // task 2.3
    const randomGeneratedNumber = Math.ceil(Math.random() * 9 + 1); // връща число в интервала от нула до единица ("почти"), но аз искам от 5 до 10
    const IsHitSuccessful       = randomGeneratedNumber != HIT_COEFFICIENT ;

    // проверка за успешен удар 
    const isHitPossible = IsMouseDetected && IsBatteryFull && IsHitSuccessful;

    if(isHitPossible){
        alert(`Успешно нанесохте удар`)
        numberOfAvailableHits = numberOfAvailableHits - 1;
    }

    // (10 - 5) + 5

    // закръгляне се прави с Math.ceil() Math.floor() (както и parse.Int() от предния път).



    // 1 * 10 -> 10
    // 0.5 * 10 -> 5
    // 0 * 10 -> 0


}

// ============

// var numberOfRobotCycle = 1;
// while(numberOfRobotCycle <10 ) { // превод "въртѝ ми го безкрай"

//     const objectInFrontOfMe = prompt(`Какъв обект има пред мен?`);

//     if (objectInFrontOfMe == 1) {
//         alert("Go sideway");
//         numberOfRobotCycle = numberOfRobotCycle + 1;
//     }

//     if (objectInFrontOfMe == 2) {
//         alert(`Jump`);
//         numberOfRobotCycle = numberOfRobotCycle + 2;
//     }

//     if (objectInFrontOfMe == 3) {
//         alert(`Forward`);
//         numberOfRobotCycle = numberOfRobotCycle + 3;
//     }
//     if (objectInFrontOfMe == 0) {
//         alert(`Robot turn off`);
//         break;
//     }
// }
