// ==========================================
// AIT PLACEMENT PORTAL
// ==========================================


// Get registration form

const registrationForm =
    document.getElementById("registrationForm");


// Get login form

const loginForm =
    document.getElementById("loginForm");


// Credential box

const credentialBox =
    document.getElementById("credentialBox");


// ==========================================
// GENERATE STUDENT PLACEMENT ID
// ==========================================

function generateStudentID() {

    const number =
        Math.floor(1000 + Math.random() * 9000);

    return "AIT" + number;
}


// ==========================================
// STUDENT REGISTRATION
// ==========================================

registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Collect student information

        const studentName =
            document.getElementById("studentName").value;

        const age =
            document.getElementById("age").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;

        const branch =
            document.getElementById("branch").value;

        const semester =
            document.getElementById("semester").value;

        const cgpa =
            document.getElementById("cgpa").value;

        const coe =
            document.getElementById("coeChoice").value;

        const internship =
            document.getElementById("internship").value;

        const placementStatus =
            document.getElementById("placementStatus").value;

        const password =
            document.getElementById("password").value;


        // Generate ID

        const studentID =
            generateStudentID();


        // Create student object

        const student = {

            id: studentID,

            name: studentName,

            age: age,

            email: email,

            phone: phone,

            branch: branch,

            semester: semester,

            cgpa: cgpa,

            coe: coe,

            internship: internship,

            placementStatus: placementStatus,

            password: password

        };


        // Save student information
        // in browser storage

        localStorage.setItem(
            "AITStudent",
            JSON.stringify(student)
        );


        // Display generated ID

        document.getElementById(
            "generatedId"
        ).textContent = studentID;


        // Show credentials

        credentialBox.classList.remove(
            "hidden"
        );


        // Scroll to credentials

        credentialBox.scrollIntoView({
            behavior: "smooth"
        });


        // Clear registration form

        registrationForm.reset();

    }
);


// ==========================================
// LOGIN
// ==========================================

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Get login values

        const loginID =
            document.getElementById("loginId").value
            .trim();

        const loginPassword =
            document.getElementById("loginPassword").value;


        // Get saved student

        const savedStudent =
            localStorage.getItem("AITStudent");


        // Check registration

        if (!savedStudent) {

            alert(
                "No student registration found. Please register first."
            );

            return;
        }


        // Convert stored data

        const student =
            JSON.parse(savedStudent);


        // Check credentials

        if (
            loginID === student.id &&
            loginPassword === student.password
        ) {

            showDashboard(student);

        } else {

            alert(
                "Invalid Placement ID or Password."
            );

        }

    }
);


// ==========================================
// SHOW DASHBOARD
// ==========================================

function showDashboard(student) {


    // Hide login form

    loginForm.classList.add("hidden");


    // Show dashboard

    const dashboard =
        document.getElementById("dashboard");

    dashboard.classList.remove("hidden");


    // Display student information

    document.getElementById(
        "dashboardName"
    ).textContent = student.name;


    document.getElementById(
        "dashId"
    ).textContent = student.id;


    document.getElementById(
        "dashBranch"
    ).textContent = student.branch;


    document.getElementById(
        "dashSemester"
    ).textContent = student.semester;


    document.getElementById(
        "dashCgpa"
    ).textContent = student.cgpa;


    document.getElementById(
        "dashCoe"
    ).textContent = student.coe;


    document.getElementById(
        "dashInternship"
    ).textContent = student.internship;

}


// ==========================================
// LOGOUT
// ==========================================

document
    .getElementById("logoutBtn")
    .addEventListener(
        "click",
        function() {


            // Hide dashboard

            document
                .getElementById("dashboard")
                .classList.add("hidden");


            // Show login form

            loginForm
                .classList.remove("hidden");


            // Clear login fields

            loginForm.reset();


            alert(
                "You have been logged out."
            );

        }
    );


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(
    "🎓 AIT Placement Portal loaded successfully!"
);