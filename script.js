"use strict";
var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get reference to form elements using their ids
    const profilePictureInput = document.getElementById("profilePicture");
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("Phone"); // Fixed the ID
    const educationElement = document.getElementById("education");
    const experienceElement = document.getElementById("experience");
    const skillsElement = document.getElementById("skills");
    //*** */
    const usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        skillsElement &&
        //** */
        usernameElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        //** */
        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, "_")}_cv.html`;
        /// picture element
        const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        const resumeOutput = `
        <h2>Resume</h2>
            ${profilePictureURL
            ? `<img src="${profilePictureURL}" alt="ProfilePicture" class= "profilePicture"/>`
            : ""}

             <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Work Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        //** */
        const downloadLink = document.createElement("a");
        downloadLink.href =
            "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your 2024 Resume";
        // resume output
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            //**
            //**
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
