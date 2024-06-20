const fnameInput = document.getElementById("fname-input");
const lnameInput = document.getElementById("lname-input");
const genderInput = document.getElementById("gender-input");
const birthDayInput = document.getElementById("birthday-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const addressInput = document.getElementById("address-input");
const cityInput = document.getElementById("city-input");
const stateInput = document.getElementById("state-input");
const departmentInput = document.getElementById("department-input");
const procedureInput = document.getElementById("department-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updatefNameInput = document.getElementById("update-fname-input");
const updatelNameInput = document.getElementById("update-lname-input");
const updateGenderInput = document.getElementById("update-gender-input");
const updateBirthdayInput = document.getElementById("update-birthday-input");
const updateEmailInput = document.getElementById("update-email-input");
const updatePhoneInput = document.getElementById("update-phone-input");
const updateAddressInput = document.getElementById("update-address-input");
const updateCityInput = document.getElementById("update-city-input");
const updateStateInput = document.getElementById("update-state-input");
const updateDepartmentInput = document.getElementById("update-department-input");
const updateProcedureInput = document.getElementById("update-procedure-input");
const updateDateInput = document.getElementById("update-date-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUserId = null;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Functions
function renderTable() {
    tableBody.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const tr = document.createElement("tr");
        const idTd = document.createElement("td");
        const firstTd = document.createElement("td");
        const lastTd = document.createElement("td");
        const genderTd = document.createElement("td");
        const birthdayTd = document.createElement("td");
        const emailTd = document.createElement("td");
        const phoneTd = document.createElement("td");
        const addressTd = document.createElement("td");
        const cityTd = document.createElement("td");
        const stateTd = document.createElement("td");
        const departmentTd = document.createElement("td");
        const procedureTd = document.createElement("td");
        const dateTd = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        idTd.innerText = user.id;
        firstTd.innerText = user.fname;
        lastTd.innerText = user.lname;
        genderTd.innerText = user.gender;
        birthdayTd.innerText = user.birthday;
        emailTd.innerText = user.email;
        phoneTd.innerText = user.phone;
        addressTd.innerText = user.address;
        cityTd.innerText = user.city;
        stateTd.innerText = user.state;
        departmentTd.innerText = user.department;
        procedureTd.innerText = user.procedure;
        dateTd.innerText = user.date;
        editBtn.innerText = "Edit";
        deleteBtn.innerText = "Delete";
        editBtn.addEventListener("click", () => {
            showUpdateForm(user.id);
        });
        deleteBtn.addEventListener("click", () => {
            deleteUser(user.id);
        });
        actionsTd.appendChild(editBtn);
        actionsTd.appendChild(deleteBtn);
        tr.appendChild(idTd);
        tr.appendChild(firstTd);
        tr.appendChild(lastTd);
        tr.appendChild(genderTd);
        tr.appendChild(birthdayTd);
        tr.appendChild(emailTd);
        tr.appendChild(phoneTd);
        tr.appendChild(addressTd);
        tr.appendChild(cityTd);
        tr.appendChild(stateTd);
        tr.appendChild(departmentTd);
        tr.appendChild(procedureTd);
        tr.appendChild(dateTd);
        tr.appendChild(actionsTd);
        tableBody.appendChild(tr);
    }
}

function addUser() {
    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();
    const gender = genderInput.value.trim();
    const birthday = birthDayInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const city = cityInput.value.trim();
    const state = stateInput.value.trim();
    const department = departmentInput.value.trim();
    const procedure = procedureInput.value.trim();
    const date = dateInput.value.trim();

    if (email.match(validRegex)) {
        if (fname && lname && gender && birthday && email && phone && address && city && state && department && procedure && date != null) {
            var id = 1;
            var val = users.map(function (x) { return x.id; }).indexOf(id);
            while (val != -1) {
                id++;
                val = users.map(function (x) { return x.id; }).indexOf(id);
            }
            const user = {
                id: id,
                fname: fname,
                lname: lname,
                gender: gender,
                birthday: birthday,
                email: email,
                phone: phone,
                address: address,
                city: city,
                state: state,
                department: department,
                procedure: procedure,
                date: date,
            };
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            fnameInput.value = "";
            lnameInput.value = "";
            genderInput.value = "";
            birthDayInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            addressInput.value = "";
            cityInput.value = "";
            stateInput.value = "";
            departmentInput.value = "";
            procedureInput.value = "";
            dateInput.value = "";
            renderTable();
        } else {
            alert("Name is required");
        }
    } else {
        alert("Invalid Email Address")
    }
}

function updateUser() {
    const fname = updatefNameInput.value;
    const lname = updatelNameInput.value;
    const gender = updateGenderInput.value;
    const birthday = updateBirthdayInput.value;
    const email = updateEmailInput.value;
    const phone = updatePhoneInput.value;
    const address = updateAddressInput.value;
    const city = updateCityInput.value;
    const state = updateStateInput.value;
    const department = updateDepartmentInput.value;
    const procedure = updateProcedureInput.value;
    const date = updateDateInput.value;
    if (email.match(validRegex)) {
        const index = users.findIndex((user) => user.id === currentUserId);
        if (index !== -1) {
            users[index].fname = fname;
            users[index].lname = lname;
            users[index].gender = gender;
            users[index].birthday = birthday;
            users[index].email = email;
            users[index].phone = phone;
            users[index].address = address;
            users[index].city = city;
            users[index].state = state;
            users[index].department = department;
            users[index].procedure = procedure;
            users[index].date = date;
            localStorage.setItem("users", JSON.stringify(users));
            hideUpdateForm();
            renderTable();
        }
    } else {
        alert("Invalid Email Address")
    }
}

function showUpdateForm(userId) {
    const user = users.find((user) => user.id === userId);
    if (user) {
        updatefNameInput.value = user.fname;
        updatelNameInput.value = user.lname;
        updateGenderInput.value = user.gender;
        updateBirthdayInput.value = user.birthday;
        updateEmailInput.value = user.email;
        updatePhoneInput.value = user.phone;
        updateAddressInput.value = user.address;
        updateCityInput.value = user.city;
        updateStateInput.value = user.state;
        updateDepartmentInput.value = user.department;
        updateProcedureInput.value = user.procedure;
        updateDateInput.value = user.date;
        currentUserId = user.id;
        updateBtn.addEventListener("click", updateUser);
        cancelBtn.addEventListener("click", hideUpdateForm);
        updateBtn.style.display = "inline-block";
        cancelBtn.style.display = "inline-block";
        updatefNameInput.style.display = "Inline-block";
        updatelNameInput.style.display = "Inline-block";
        updateGenderInput.style.display = "Inline-block";
        updateBirthdayInput.style.display = "Inline-block";
        updateEmailInput.style.display = "Inline-block";
        updatePhoneInput.style.display = "Inline-block";
        updateAddressInput.style.display = "Inline-block";
        updateCityInput.style.display = "Inline-block";
        updateStateInput.style.display = "Inline-block";
        updateDepartmentInput.style.display = "Inline-block";
        updateProcedureInput.style.display = "Inline-block";
        updateDateInput.style.display = "Inline-block";
        document.getElementById("update-container").style.display = "block";
    }
}
function hideUpdateForm() {
    updatefNameInput.value = "";
    updatelNameInput.value = "";
    updateGenderInput.value = "";
    updateBirthdayInput.value = "";
    updateEmailInput.value = "";
    updatePhoneInput.value = "";
    updateAddressInput.value = "";
    updateCityInput.value = "";
    updateStateInput.value = "";
    updateDepartmentInput.value = "";
    updateProcedureInput.value = "";
    updateDateInput.value = "";
    currentUserId = null;
    updateBtn.removeEventListener("click", updateUser);
    cancelBtn.removeEventListener("click", hideUpdateForm);
    updatefNameInput.style.display = "none";
    updatelNameInput.style.display = "none";
    updateGenderInput.style.display = "none";
    updateBirthdayInput.style.display = "none";
    updateEmailInput.style.display = "none";
    updatePhoneInput.style.display = "none";
    updateAddressInput.style.display = "none";
    updateCityInput.style.display = "none";
    updateStateInput.style.display = "none";
    updateDepartmentInput.style.display = "none";
    updateProcedureInput.style.display = "none";
    updateDateInput.style.display = "none";
    document.getElementById("update-container").style.display = "none";
}

function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(users));
    if (users.length == 0){
      hideUpdateForm();
    };
    renderTable();
  }
  
  // Event Listeners
  addBtn.addEventListener("click", addUser);
  
  // Initialize table
  renderTable();