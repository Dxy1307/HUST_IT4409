class TTSV {
    constructor(fullName, gender, year, cclass, eduLevel, course, program, email, khoa, status) {
        this.fullName = fullName;
        this.gender = gender;
        this.year = year;
        this.cclass = cclass;
        this.eduLevel = eduLevel;
        this.course = course;
        this.program = program;
        this.email = email;
        this.khoa = khoa;
        this.status = status;
    }

    getFullName() {
        return this.fullName;
    }

    getGender() {
        return this.gender;
    }

    getYear() {
        return this.year;
    }

    getClass() {
        return this.cclass;
    }

    getEduLevel() {
        return this.eduLevel;
    }

    getCourse() {
        return this.course;
    }

    getProgram() {
        return this.program;
    }

    getEmail() {
        return this.email;
    }

    getKhoa() {
        return this.khoa;
    }

    getStatus() {
        return this.status;
    }

    setFullName(fullName) {
        this.fullName = fullName;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setYear(year) {
        this.year = year;
    }

    setClass(cclass) {
        this.cclass = cclass;
    }

    setEduLevel(eduLevel) {
        this.eduLevel = eduLevel;
    }

    setCourse(course) {
        this.course = course;
    }

    setProgram(program) {
        this.program = program;
    }

    setEmail(email) {
        this.email = email;
    }

    setKhoa(khoa) {
        this.khoa = khoa;
    }

    setStatus(status) {
        this.status = status;
    }
}

function getTTSV(student) {
    console.log("Full name: " + student.getFullName());
    console.log("Gender: " + student.getGender());
    console.log("Year: " + student.getYear());
    console.log("Class: " + student.getClass());
    console.log("Education level: " + student.getEduLevel());
    console.log("Course: " + student.getCourse());
    console.log("Program: " + student.getProgram());
    console.log("Email: " + student.getEmail());
    console.log("Faculty: " + student.getKhoa());
    console.log("Status: " + student.getStatus());
}

const fixFullName = "Nguyễn Đức Duy";
const fixGender = "Nam";
const fixYear = "2021";
const fixClass = "Kỹ thuật máy tính 04-K66";
const fixEduLevel = "Đại học đại trà";
const fixCourse = "66";
const fixProgram = "Kỹ thuật máy tính 2021";
const fixEmail = "duy.nd210275@sis.hust.edu.vn";
const fixKhoa = "Trường Công Nghệ Thông Tin và Truyền Thông";
const fixStatus = "Học";
const fixMSSV = "20210275";
const fixAvatar = "./assets/img/avatar.jpg";

const urlParams = new URLSearchParams(window.location.search);
const ifullName = urlParams.get('ifullName');
const imssv = urlParams.get('imssv');
const igender = urlParams.get('igender');
const iyear = urlParams.get('iyear');
const icclass = urlParams.get('icclass');
const ieduLevel = urlParams.get('ieduLevel');
const icourse = urlParams.get('icourse');
const iprogram = urlParams.get('iprogram');
const iemail = urlParams.get('iemail');
const ikhoa = urlParams.get('ikhoa');
const istatus = urlParams.get('istatus');
const iavatar = urlParams.get('iavatar');

document.getElementById("fullName").value = ifullName;
document.getElementById("mssv").value = imssv;
const radioGender = document.getElementsByName("gender");
radioGender.forEach(radio => {
    if(radio.value == igender)
        radio.checked = true;
    else radio.checked = false;
});

document.getElementById("year").value = iyear;
document.getElementById("cclass").value = icclass;
document.getElementById("eduLevel").value = ieduLevel;
document.getElementById("course").value = icourse;
document.getElementById("program").value = iprogram;
document.getElementById("email").value = iemail;

const options = document.getElementById('khoa').options;
for (let i = 0; i < options.length; i++) {
    if (options[i].value === ikhoa) {
        options[i].selected = true;
        break;
    }
}

const radioStatus = document.getElementsByName("status");
radioStatus.forEach(radio => {
    if(radio.value == istatus)
        radio.checked = true;
    else radio.checked = false;
});

function submitForm(action) {
    if(action == 'cancel') {
        document.getElementById("infoForm").addEventListener("submit", function(event) {
            event.preventDefault();

            window.location.href = `index.html?fullName=${encodeURIComponent(ifullName)}&mssv=${imssv}&gender=${igender}&year=${iyear}&cclass=${icclass}&eduLevel=${ieduLevel}&course=${icourse}&program=${iprogram}&email=${iemail}&khoa=${ikhoa}&status=${istatus}&avatar=${encodeURIComponent(iavatar)}`;
        });
    } else if(action == 'ok') {
        document.getElementById("infoForm").addEventListener("submit", function(event) {
            event.preventDefault();
    
            const fullName = document.getElementById("fullName").value;
            const mssv = document.getElementById("mssv").value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const year = document.getElementById("year").value;
            const cclass = document.getElementById("cclass").value;
            const eduLevel = document.getElementById("eduLevel").value;
            const course = document.getElementById("course").value;
            const program = document.getElementById("program").value;
            const email = document.getElementById("email").value;
            const khoa = document.getElementById("khoa").value;
            const status = document.querySelector('input[name="status"]:checked').value;
            const avatar = imageUpload.imageUrl;

            window.location.href = `index.html?fullName=${encodeURIComponent(fullName)}&mssv=${mssv}&gender=${gender}&year=${year}&cclass=${cclass}&eduLevel=${eduLevel}&course=${course}&program=${program}&email=${email}&khoa=${khoa}&status=${status}&avatar=${encodeURIComponent(avatar)}`;
        });
    } else if(action == 'reset') {
        document.getElementById("infoForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            window.location.href = `index.html?fullName=${encodeURIComponent(fixFullName)}&mssv=${fixMSSV}&gender=${fixGender}&year=${fixYear}&cclass=${fixClass}&eduLevel=${fixEduLevel}&course=${fixCourse}&program=${fixProgram}&email=${fixEmail}&khoa=${fixKhoa}&status=${fixStatus}&avatar=${encodeURIComponent(fixAvatar)}`;
        });
    }
}

var imageUpload = {
    imageUrl: ''
}

function onImageUpload() {
    var file = document.getElementById("imageUpload").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        imageUpload.imageUrl = reader.result;
    }
    reader.readAsDataURL(file);
}

function onImgClick() {
    var file = document.getElementById("imageUpload").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        imageUpload.imageUrl = reader.result;
        document.getElementById("avatar").src = imageUpload.imageUrl;
    }
    reader.readAsDataURL(file);
}