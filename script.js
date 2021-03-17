$("#currentDay").text( moment().format("dddd, MMMM Do YYYY"));

function loadTimeblocks(){
    //create block for cheduler
    let timeBlock = $("<div></div>");
    timeBlock.addClass('d-flex bd-highlight');
    //create a left element displaying time
    let displayTime = $("<div></div>").text("9am"); 
    displayTime.addClass('p-2 bd-highlight');
    //create a middle element for event name
    let displayEvent = $("<div></div>").text("Some Event");
    displayEvent.addClass('p-2 w-100 bd-highlight'); 
    //create a right element for save button
    let displaySaveButton = $("<div></div>").text("SAVE"); 
    displaySaveButton.addClass('p-2 bd-highlight');
    //append these elements
    timeBlock.append(displayTime, displayEvent, displaySaveButton);
    $('.container').append(timeBlock);
}

loadTimeblocks();



