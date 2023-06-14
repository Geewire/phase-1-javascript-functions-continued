// code your solution here
function saturdayFun(activity = "roller-skate"){
 return `This Saturday, I want to ${activity}!`; 
}
saturdayFun();

    
function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork();


function wrapAdjective(boom= '*'){
    return function(flair= "special"){
        return `You are ${boom}${flair}${boom}!`;

    }
 
}

    