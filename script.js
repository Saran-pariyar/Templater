



//replace the link with the API link here
fetch('file:///E:/projects/integreate_api/data1.json')
// fetch("E:/projects/integreate_api/data1.json")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('service_thing-table-body');

        data[0]?.forEach(service_thing => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="title">${service_thing?.title_short}</td>
                <td class="duration">${service_thing?.duration}</td>
                <td class="stop">${service_thing?.stop_text}</td>
                <td class="depart-date">${service_thing?.depart_date}</td>
                <td class="depart-time">${service_thing?.depart_time}</td>
                <td class="arrival-date">${service_thing?.arrival_date}</td>
                <td class="arrival-time">${service_thing?.arrival_time}</td>
                <td class="discount-fare">${service_thing?.discountDenFare}</td>
                <td class="standard-fare">${service_thing?.standardFare}</td>
                <td class="gowild-fare">${service_thing.gowildFare ? service_thing.gowildFare : "0"
                }</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));




const items = [ "TPA", "TTN", "TYS", "XNA"]


    function populateDropdown(id, options) {
        const dropdown = document.getElementById(id);

        dropdown.innerHTML = '';

        // Add new options
        options.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.text = item;
            dropdown.add(option);
        });
    }


    populateDropdown('ori', item);


    populateDropdown('dest', item);




// GETTING DATA FROM FORM

document.getElementById('service_thingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const ori = document.getElementById('ori').value;
    const dest = document.getElementById('dest').value;
    let dd = document.getElementById('dd').value;
    // Replace dashes with slashes in the date
    dd = dd.replace(/-/g, '/');
  
    
    // edit url link with real one here
    const apiUrlForm = ``;

// `http://ec2-16-171-37-194.eu-north-1.compute.amazonaws.com:8000/service_things?ori=DEN&dest=BNA&dd=2024-02-17`

    // Fetch data from the API
    fetch(apiUrlForm)
    // fetch("/data1.json")
        .then(response => response.json())
        .then(data => {

            const formTableBody = document.getElementById('form-service_thing-table-body');
            // tableBody.innerHTML = '';

            data[0]?.forEach(service_thing => {
                const row = document.createElement('tr');
                row.innerHTML = `
                            <td class="title">${service_thing.title_short}</td>
                            <td class="duration">${service_thing.duration}</td>
                            <td class="stop">${service_thing.stop_text}</td>
                            <td class="depart-date">${service_thing.depart_date}</td>
                            <td class="depart-time">${service_thing.depart_time}</td>
                            <td class="arrival-date">${service_thing.arrival_date}</td>
                            <td class="arrival-time">${service_thing.arrival_time}</td>
                            <td class="discount-fare">${service_thing.discountDenFare}</td>
                            <td class="standard-fare">${service_thing.standardFare}</td>
                            <td class="gowild-fare">${service_thing.gowildFare ? service_thing.gowildFare : "0"
                    }</td>
                        `;
                formTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});