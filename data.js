
const studentData = [
    {
        id: 101,
        name: "Ananya Sharma",
        age: 20,
        gender: "Female",
        branch: "Computer Science",
        courses: ["Algorithms", "Databases", "Networking"],
        marks: { math: 89, english: 92, computer_science: 95 },
        isActive: true
    },
    {
        id: 102,
        name: "Rohan Verma",
        age: 21,
        gender: "Male",
        branch: "Electronics",
        courses: ["Digital Systems", "Signals", "Maths"],
        marks: { math: 78, english: 80, electronics: 89 },
        isActive: false
    },
    {
        id: 103,
        name: "Priya Singh",
        age: 20,
        gender: "Female",
        branch: "Mechanical",
        courses: ["Thermodynamics", "Statics", "Maths"],
        marks: { math: 85, english: 88, mechanical: 90 },
        isActive: true
    }
];


const tbody = document.getElementById("studentData");

const data = studentData.map(elm => {
    return `
        <tr>
            <td>${elm.id}</td>
            <td>${elm.name}</td>
            <td>${elm.age}</td>
            <td>${elm.gender}</td>
            <td>${elm.branch}</td>
            <td>${elm.courses}</td>
            <td>${Object.entries(elm.marks).map(([sub, score]) => sub + ": " + score).join(", ")}</td>
            <td>${elm.isActive}</td>

        </tr>
    `;
});
tbody.innerHTML = data.join("");
