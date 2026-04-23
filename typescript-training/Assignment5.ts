interface Employee {
    name: string;
    baseSalary: number;
    experience: number;
    rating: number;
}

let employees: Employee[] = [
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

let hikeMap = new Map<string, number>();

for (let emp of employees) {

    let variablePayPercent = 0;
    let bonus = 0;
    let reward = 0;

    // Rating conditions
    if (emp.rating >= 4.0) {
        variablePayPercent = 15;
        bonus = 1500;
    } else if (emp.rating >= 3 && emp.rating < 4) {
        variablePayPercent = 10;
        bonus = 1200;
    } else {
        variablePayPercent = 3;
        bonus = 300;
    }

    // Experience condition
    if (emp.experience >= 5) {
        reward = 5000;
    }

    // Hike calculation
    let hike = (emp.baseSalary * variablePayPercent / 100) + bonus + reward;

    // calculating Hike %
    let hikePercent = hike / emp.baseSalary;

    // Store the hikepercent along with employee name in Map
    hikeMap.set(emp.name, hikePercent);
}

// Print the details along with hike%
for (let [name, percent] of hikeMap) {
    console.log(`${name} ->  ${(percent * 100).toFixed(2)}%`);
}