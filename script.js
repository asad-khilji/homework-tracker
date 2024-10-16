const homeworkData = [
    {
        "To Do": "CSIT 212 Algorithms Homework Due on 10/31/24 Thursday",
        "In Progress": "MATH 122 Calculus I Homework 3.3 Due on 10/18/24 Friday",
        "Review": "CSIT 230 Computer Systems Mid-Term Exam on 10/21/24 Monday in room UNIV-1040",
        "Done": ""
    },
    {
        "To Do": "CSIT 112 Java Programming Homework Due on 11/14/24 Thursday",
        "In Progress": "",
        "Review": "MATH 122 Calculus I Quiz 3 on 10/24/24 Thursday in room BUS-011",
        "Done": ""
    },
    {
        "To Do": "",
        "In Progress": "",
        "Review": "CSIT 212 Algorithms Mid Term Exam on 10/24/24 Thursday in room CCIS 152",
        "Done": ""
    },
    {
        "To Do": "",
        "In Progress": "",
        "Review": "CSIT 112 java Programming Mid Term Exam on 10/31/24 Thursday in room CCIS 149",
        "Done": ""
    }
];

// Function to display data in the table
function displayHomework(data) {
    const tableBody = document.querySelector("#homeworkTable tbody");
    data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item["To Do"]}</td>
            <td>${item["In Progress"]}</td>
            <td>${item["Review"]}</td>
            <td>${item["Done"]}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table on page load
document.addEventListener("DOMContentLoaded", function() {
    displayHomework(homeworkData);
});