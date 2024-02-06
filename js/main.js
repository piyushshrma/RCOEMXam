function navigateToSemester(semesterNumber) {
    window.location.href = `/semesters/semester${semesterNumber}.html`;
}

function navigateToExam(examType) {
    window.location.href = `/exams/${examType}.html`;
}
function toggleDarkMode() {
    const checkbox = document.getElementById('dark-mode');
    const container = document.getElementById('container');
    const background = document.querySelector('.background');

    if (checkbox.checked) {
        container.style.backgroundColor = '#242424';
        background.style.backgroundColor = '#242424';
    } else {
        container.style.backgroundColor = '#fff';
        background.style.backgroundColor = '#fff';
    }
}
