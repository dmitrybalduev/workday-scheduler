let timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
let timeArray2 = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var now = new Date().getHours();
console.log(now);
let color = "";
let events = JSON.parse(localStorage.getItem("events"));

//displaying current date
$("#currentDay").text( moment().format("dddd, MMMM Do YYYY"));

function loadTimeblocks(){

    for(let i = 0; i < timeArray.length; i++){
        if(now > timeArray2[i]){
            color = "bg-secondary";
        } else if(now == timeArray2[i]){
            color = "bg-danger";
        }else {
            color = "bg-success";
        }
        //create block for cheduler
        let timeBlock = $("<div></div>");
        timeBlock.addClass("row " );
        //create a left element displaying time
        let displayTime = $("<div></div>").text(timeArray[i]);
        displayTime.addClass('p-2 bd-highlight col-1')
                   .attr("data-index", i)
                   .css("border", "1px solid #ced4da")
                   .css("text-align", "center")
                   .css("display", "flex");
        
        //create a middle element for event name
        let displayEvent;
        //if events array is not null, display event in textarea
        if(events != null){
            displayEvent = $("<textarea></textarea>").text(events[i]);
        }else{
            displayEvent = $("<textarea></textarea>");
        }
        displayEvent.addClass('p-2 w-100 bd-highlight col-10 ' + color).attr("data-index", i); 
        //create a right element for save button
        let displaySaveButton = $("<button></button>"); 
        displaySaveButton.addClass('p-2 bd-highlight far fa-save col-1')
                         .attr("data-index", i)
                         .attr("onclick", "storeEvent("+i+")")
                         .css("background-color", "#1569C7")
                         .css("border-radius", "0px 15px 15px 0px")
        //append these elements
        timeBlock.append(displayTime, displayEvent, displaySaveButton);
        $('.container').append(timeBlock);
    }
}

loadTimeblocks();
function storeEvent(index){
    //checking if events array coming from local storage is not null
    if(events == null){
        //if it's null, we create array of size 9
        events = new Array(9);
    }
    //assigning value of event(from textarea element) with same index to events array
    events[index] = $("textarea[data-index="+index+"]")[0].value;
    //storing whole array to local storage
    localStorage.setItem("events", JSON.stringify(events));
}
