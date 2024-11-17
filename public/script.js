// Fetch employee data and render it
async function fetchAndRenderEmployees() {
  const employeeList = document.getElementById('employee-list');

  try {
    const response = await fetch('/api/employees');
    const employees = await response.json();

    if (employees.length === 0) {
      employeeList.innerHTML = '<p>No employees found.</p>';
      return;
    }

    employees.forEach((employee) => {
      const employeeItem = document.createElement('div');
      employeeItem.className = 'employee-item';

      employeeItem.innerHTML = `
        <h2>${employee.name}</h2>
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>Created At:</strong> ${new Date(employee.createdAt).toLocaleString()}</p>
      `;

      employeeList.appendChild(employeeItem);
    });
  } catch (error) {
    employeeList.innerHTML = '<p>Error fetching employee data. Please try again later.</p>';
    console.error('Error:', error);
  }
}

// Load employees on page load
document.addEventListener('DOMContentLoaded', fetchAndRenderEmployees);
