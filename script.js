// Experience section add btn:
const addExpButton = document.getElementById("add-exp");
const expForm = document.querySelector(".exp-form");

addExpButton.addEventListener("click", function () {
    // Assuming your textarea has this ID
    const workExpTextArea = document.getElementById("work_experienceTextarea");

    const newExperienceEntry = expForm.querySelector(".experience-entry").cloneNode(true);

    // Clone and append the textarea to the new entry
    newExperienceEntry.appendChild(workExpTextArea.cloneNode(true));

    // Clear the input values of the cloned experience entry
    newExperienceEntry.querySelectorAll("input, textarea").forEach(input => input.value = "");

    expForm.appendChild(newExperienceEntry);
});


// education section add btn:
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


// course & certification section add btn:
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


//! ClaudeAI
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

// summary:
const summaryField = document.getElementById('summaryField');
const summaryTarget = document.getElementById('summaryT');

summaryField.addEventListener('input', updateSummary);

function updateSummary() {
    summaryTarget.textContent = summaryField.value;
}

// Skills:
const skillsField = document.getElementById('skillsField');
const skillsTarget = document.getElementById('skillsT');

//event listener to the skills textarea to update the displayed skills
skillsField.addEventListener('input', updateDisplayedSkills);

function updateDisplayedSkills() {
    skillsTarget.textContent = skillsField.value;
}

//* Experience:
const companyNameInput = document.getElementById('companyName');
const jobRoleInput = document.getElementById('job_role');
const jobLocationInput = document.getElementById('jobLocation');
const workDatesInput = document.getElementById('work_dates');
const workExperienceInput = document.getElementById('work_experience');

const companyNameTarget = document.getElementById('compnayNameT');
const jobroleTarget = document.getElementById('companyJobRoleT');
const jobLocationTarget = document.getElementById('jobLocT');
const workDatesTarget = document.getElementById('workDatesT');
const workExpTarget = document.getElementById('workExpT');

//event listeners to the input fields to update the experience section
companyNameInput.addEventListener('input', updateExperience);
jobRoleInput.addEventListener('input', updateExperience);
jobLocationInput.addEventListener('input', updateExperience);
workDatesInput.addEventListener('input', updateExperience);
workExperienceInput.addEventListener('input', updateExperience);

function updateExperience() {
    companyNameTarget.textContent = companyNameInput.value;
    jobroleTarget.textContent = jobRoleInput.value;
    jobLocationTarget.textContent = jobLocationInput.value;
    workDatesTarget.textContent = workDatesInput.value;
    workExpTarget.innerHTML = '<li>' + workExperienceInput.value.replace(/\n/g, '</li><li>') + '</li>';
}


//* Education
// Get references to the necessary elements from FORM
const collegeNameInput = document.getElementById('eduClgField');
const degreeInput = document.getElementById('eduDegreeField');
const universityNameInput = document.getElementById('eduUniField');
const durationInput = document.getElementById('eduDurationField');

const collegeTitle = document.getElementById('clgTitle');
const degreeName = document.getElementById('degreeName');
const uniName = document.getElementById('uniName');
const collegeDuration = document.getElementById('collegeDuration');

// Function to update the education template
function updateEducationTemplate() {
    // Update the elements in the education template with input values
    collegeTitle.textContent = collegeNameInput.value;
    degreeName.textContent = degreeInput.value;
    uniName.textContent = universityNameInput.value;
    collegeDuration.textContent = durationInput.value;
}
// Add event listeners to all input fields
collegeNameInput.addEventListener('input', updateEducationTemplate);
degreeInput.addEventListener('input', updateEducationTemplate);
universityNameInput.addEventListener('input', updateEducationTemplate);
durationInput.addEventListener('input', updateEducationTemplate);

//! neo code:



















//* Courses & Certificates:
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

















// Print Resume
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