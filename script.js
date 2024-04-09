//* header
// Get references to the input fields and target elements
const nameField = document.getElementById('nameField');
const jobRoleField = document.getElementById('jobRole');
const phoneNumField = document.getElementById('phoneNum');
const emailField = document.getElementById('emailField');
const linkedinField = document.getElementById('linkedinField');
const locationField = document.getElementById('locationField');

const nameTarget = document.getElementById('nameT');
const jobRoleTarget = document.getElementById('jobroleT');
const phoneNumTarget = document.getElementById('phone_numT');
const emailTarget = document.getElementById('emailT');
const linkedinTarget = document.getElementById('linkedinT');
const locationTarget = document.getElementById('locationT');

// Add event listeners to the input fields
nameField.addEventListener('input', updateNameField);
jobRoleField.addEventListener('input', updateJobRoleField);
phoneNumField.addEventListener('input', updatePhoneNumField);
emailField.addEventListener('input', updateEmailField);
linkedinField.addEventListener('input', updateLinkedinField);
locationField.addEventListener('input', updateLocationField);

// Functions to update the target elements
function updateNameField() {
    nameTarget.textContent = nameField.value || 'JONATHAN WRIGHT';
}
function updateJobRoleField() {
    jobRoleTarget.innerHTML = `<strong>${jobRoleField.value || 'Lead Business Analyst'}</strong>`;
}
function updatePhoneNumField() {
    phoneNumTarget.textContent = phoneNumField.value || '+1-921-389-0182';
    phoneNumTarget.href = `tel:${phoneNumField.value || '+19213890182'}`;
}
function updateEmailField() {
    emailTarget.textContent = emailField.value || 'name@gmail.com';
    emailTarget.href = `mailto:${emailField.value || 'pushkarbankar@gmail.com'}`;
}
function updateLinkedinField() {
    const linkedinUrl = linkedinField.value || 'linkedin.com/in/jonwrightjr';
    linkedinTarget.textContent = linkedinUrl;
    linkedinTarget.href = `https://${linkedinUrl}`;
}
function updateLocationField() {
    locationTarget.textContent = locationField.value || 'Dallas, TX';
}


//* Experience 
//! PROBLEM: cloned input fileds' values get updated but if u add 3rd experience add info there then this new info will replace info of 2nd experience. | no 3rd experience info update.
const addExpButton = document.getElementById("add-exp");
const expForm = document.querySelector(".exp-form");

addExpButton.addEventListener("click", function () {
    // Clone the first experience entry
    const newExperienceEntry = expForm.querySelector(".experience-entry").cloneNode(true);
    
    // Clone the work experience textarea and append it to the new entry
    const workExperienceTextarea = document.getElementById('work_experienceTextarea').cloneNode(true);
    newExperienceEntry.appendChild(workExperienceTextarea);

    // Clear the input values of the cloned experience entry
    newExperienceEntry.querySelectorAll("input, textarea").forEach(input => input.value = "");

    // Append the cloned experience entry to the form
    expForm.appendChild(newExperienceEntry);

    // Update values for 'job exp 2' portion of the code
    const companyNameInput2 = newExperienceEntry.querySelector('#companyName');
    const jobRoleInput2 = newExperienceEntry.querySelector('#job_role');
    const jobLocationInput2 = newExperienceEntry.querySelector('#jobLocation');
    const workDatesInput2 = newExperienceEntry.querySelector('#work_dates');
    const workExperienceInput2 = newExperienceEntry.querySelector('#work_experienceTextarea');

    const companyNameTarget2 = document.getElementById('compnayNameT2');
    const jobroleTarget2 = document.getElementById('companyJobRoleT2');
    const jobLocationTarget2 = document.getElementById('jobLocT2');
    const workDatesTarget2 = document.getElementById('workDatesT2');
    const workExpTarget2 = document.getElementById('workExpT2');

    companyNameInput2.addEventListener('input', updateExperience2);
    jobRoleInput2.addEventListener('input', updateExperience2);
    jobLocationInput2.addEventListener('input', updateExperience2);
    workDatesInput2.addEventListener('input', updateExperience2);
    workExperienceInput2.addEventListener('input', updateExperience2);

    function updateExperience2() {
        companyNameTarget2.textContent = companyNameInput2.value;
        jobroleTarget2.textContent = jobRoleInput2.value;
        jobLocationTarget2.textContent = jobLocationInput2.value;
        workDatesTarget2.textContent = workDatesInput2.value;
        workExpTarget2.innerHTML = '<li>' + workExperienceInput2.value.replace(/\n/g, '</li><li>') + '</li>';
    }
});
// Add event listeners to input fields
const companyNameInput = document.getElementById('companyName');
companyNameInput.addEventListener('input', updateExperience);
const jobRoleInput = document.getElementById('job_role');
jobRoleInput.addEventListener('input', updateExperience);
const jobLocationInput = document.getElementById('jobLocation');
jobLocationInput.addEventListener('input', updateExperience);
const workDatesInput = document.getElementById('work_dates');
workDatesInput.addEventListener('input', updateExperience);
const workExperienceInput = document.getElementById('work_experienceTextarea');
workExperienceInput.addEventListener('input', updateExperience);

// Function to update the experience section
function updateExperience() {
    const companyNameInput = document.getElementById('companyName');
    const jobRoleInput = document.getElementById('job_role');
    const jobLocationInput = document.getElementById('jobLocation');
    const workDatesInput = document.getElementById('work_dates');
    const workExperienceInput = document.getElementById('work_experienceTextarea');

    const companyNameTarget = document.getElementById('compnayNameT');
    const jobroleTarget = document.getElementById('companyJobRoleT');
    const jobLocationTarget = document.getElementById('jobLocT');
    const workDatesTarget = document.getElementById('workDatesT');
    const workExpTarget = document.getElementById('workExpT');

    companyNameTarget.textContent = companyNameInput.value;
    jobroleTarget.textContent = jobRoleInput.value;
    jobLocationTarget.textContent = jobLocationInput.value;
    workDatesTarget.textContent = workDatesInput.value;
    workExpTarget.innerHTML = '<li>' + workExperienceInput.value.replace(/\n/g, '</li><li>') + '</li>';
}


//* Summary:
const summaryField = document.getElementById('summaryField');
const summaryTarget = document.getElementById('summaryT');

summaryField.addEventListener('input', updateSummary);

function updateSummary() {
    summaryTarget.textContent = summaryField.value;
}


//* Skills:
const skillsField = document.getElementById('skillsField');
const skillsTarget = document.getElementById('skillsT');

//event listener to the skills textarea to update the displayed skills
skillsField.addEventListener('input', updateDisplayedSkills);

function updateDisplayedSkills() {
    skillsTarget.textContent = skillsField.value;
}


//* Education:
// Add btn:
const educationForm = document.querySelector('.education-form');
const addEducationButton = document.getElementById('add-education');

addEducationButton.addEventListener('click', function () {
    // Clone the first education entry
    const newEntry = educationForm.querySelector('.education-entry').cloneNode(true);

    // Clear the input fields in the new entry
    const inputs = newEntry.querySelectorAll('input');
    inputs.forEach(input => input.value = '');

    // Insert the new entry before the "Add+" button
    educationForm.insertBefore(newEntry, addEducationButton);

});
// Get references to the necessary elements from FORM
const collegeNameInput = document.getElementById('eduClgField');
const degreeInput = document.getElementById('eduDegreeField');
const universityNameInput = document.getElementById('eduUniField');
const durationInput = document.getElementById('eduDurationField');

const collegeTitle = document.getElementById('clgTitle');
const degreeName = document.getElementById('degreeName');
const uniName = document.getElementById('uniName');
const collegeDuration = document.getElementById('collegeDuration');

// Add event listeners to all input fields
collegeNameInput.addEventListener('input', updateEducationTemplate);
degreeInput.addEventListener('input', updateEducationTemplate);
universityNameInput.addEventListener('input', updateEducationTemplate);
durationInput.addEventListener('input', updateEducationTemplate);

// Function to update the education template
function updateEducationTemplate() {
    collegeTitle.textContent = collegeNameInput.value;
    degreeName.textContent = degreeInput.value;
    uniName.textContent = universityNameInput.value;
    collegeDuration.textContent = durationInput.value;
}


//* Courses & Certificates:
// Add btn:
const coursesForm = document.querySelector('.courses-form');
const addCourseButton = document.getElementById('add-course');

addCourseButton.addEventListener('click', function () {
    const newEntry = coursesForm.querySelector('.course-entry').cloneNode(true);
    const input = newEntry.querySelector('input');
    // Clear the input field in the new entry
    // input.value = ''; 
    coursesForm.insertBefore(newEntry, addCourseButton);

    // Call the update function after adding new entry
    updateCoursesList();
});
//? working code(to update value in the template 'Add+' btn has to clicked):
function updateCoursesList() {
    const courseInput = document.getElementById('course');
    const providerInput = document.getElementById('provider');
    const coursesList = document.getElementById('coursesList');

    const newCourseInfo = `${courseInput.value} - ${providerInput.value}`;  // Combine course and provider info

    // Create a new list item element
    const newListItem = document.createElement('li');
    newListItem.textContent = newCourseInfo;

    // Append the new list item to the courses list
    coursesList.appendChild(newListItem);

    // Clear the input fields
    courseInput.value = '';
    providerInput.value = '';
}
courseInput.addEventListener('input', updateCoursesList);  // Update on course input change
providerInput.addEventListener('input', updateCoursesList); // Update on provider input change


//* Print Resume
function printResume() {
    document.getElementById('printT').style.display = 'none';
    const element = document.body;
    const options = {
        margin: 0,
        filename: 'your_resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}
