let employees = [];
let id = 1; // Unique ID generator

function addEmployee() {
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;
  const messageElement = document.getElementById('message');

  // Check for empty fields
  if (!name || !profession || !age) {
    messageElement.textContent = "Error: Please make sure all fields are filled before adding an employee!";
    messageElement.className = "error";
    return;
  }

  // Add employee to array
  const employee = { id: id++, name, profession, age };
  employees.push(employee);

  // Reset the input fields
  document.getElementById('name').value = '';
  document.getElementById('profession').value = '';
  document.getElementById('age').value = '';

  // Show success message
  messageElement.textContent = "Success: Employee Added!";
  messageElement.className = "success";

  // Update employee list
  displayEmployees();
}

function displayEmployees() {
  const employeeList = document.getElementById('employee-list');
  employeeList.innerHTML = ''; // Clear existing list

  if (employees.length === 0) {
    employeeList.innerHTML = '<p>You have 0 Employees.</p>';
    return;
  }

  employees.forEach((employee) => {
    const employeeDiv = document.createElement('div');
    employeeDiv.className = 'employee';
    employeeDiv.innerHTML = `
      <p>${employee.id}. Name: ${employee.name} ,Profession: ${employee.profession}, Age: ${employee.age}</p>
      <button onclick="deleteEmployee(${employee.id})">Delete User</button>
    `;
    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  displayEmployees();
}
