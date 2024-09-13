var htmlCourse = document.getElementById("html-course");
var cssCourse = document.getElementById("css-course");
var jsCourse = document.getElementById("js-course");
var buttonSendCourses = document.getElementById("send-courses");

buttonSendCourses.addEventListener('click', () => {
    let content = '';
    if(htmlCourse.checked){
        content = 'Assigned HTML course<br>';
    }
    if(cssCourse.checked){
        content += 'Assigned CSS course<br>';
    }
    if(jsCourse.checked){
        content += 'Assigned JS course<br>';
    }
    Swal.fire({
        title: 'Assignment completed',
        html: content,
    });
    
})

