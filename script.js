let timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
let timeArray2 = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var now = new Date().getHours();
console.log(now);
let color = "";


$("#currentDay").text( moment().format("dddd, MMMM Do YYYY"));

function loadTimeblocks(){
    for(let i = 0; i < timeArray.length; i++){
        if(now > timeArray2[i]){
            color = "bg-secondary";
        } else if(now == timeArray2[i]){
            color = "bg-danger";
        }else{
            color = "bg-success";
        }
        //create block for cheduler
        let timeBlock = $("<div></div>");
        timeBlock.addClass("d-flex bd-highlight " + color);
        //create a left element displaying time
        let displayTime = $("<div></div>").text(timeArray[i]); 
        displayTime.addClass('p-2 bd-highlight').attr("data-index", i);
        //create a middle element for event name
        let displayEvent = $("<div></div>").text("Some event");
        displayEvent.addClass('p-2 w-100 bd-highlight').attr("data-index", i); 
        //create a right element for save button
        let displaySaveButton = $("<div></div>").text("SAVE"); 
        displaySaveButton.addClass('p-2 bd-highlight').attr("data-index", i);
        //append these elements
        timeBlock.append(displayTime, displayEvent, displaySaveButton);
        $('.container').append(timeBlock);
    }
}

loadTimeblocks();

