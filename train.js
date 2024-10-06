let schedule = [];
function addTrain(){
    const trainNumber = document.getElementById('tname').value;
    const arrival = document.getElementById('Arrival').value;
    const departure = document.getElementById('Departure').value;

    schedule.push({
        trainNumber,arrival,departure
    });
    displaySchedule();

    document.getElementById('tname').value = '';
    document.getElementById('Arrival').value = '';
    document.getElementById('Departure').value = '';
}

function displaySchedule(){
    let output = '';
    schedule.forEach(train=>{
        output+= `Train Name: ${train.trainNumber},Arrival:${train.arrival},Departure:${train.departure}<br>`;

    });
    document.getElementById('trainSchedule').innerHTML = output;
}