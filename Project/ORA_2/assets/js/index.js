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

document.getElementById('editInfoLink').addEventListener('click', function(event) {
    event.preventDefault();

    const ifullName = document.getElementById("fullName").textContent;
    const imssv = document.getElementById("mssv").textContent;
    const igender = document.getElementById("gender").textContent;
    const iyear = document.getElementById("year").textContent;
    const icclass = document.getElementById("cclass").textContent;
    const ieduLevel = document.getElementById("eduLevel").textContent;
    const icourse = document.getElementById("course").textContent;
    const iprogram = document.getElementById("program").textContent;
    const iemail = document.getElementById("email").textContent;
    const ikhoa = document.getElementById("khoa").textContent;
    const istatus = document.getElementById("status").textContent;

    window.location.href = `info2.html?ifullName=${encodeURIComponent(ifullName)}&imssv=${imssv}&igender=${igender}&iyear=${iyear}&icclass=${icclass}&ieduLevel=${ieduLevel}&icourse=${icourse}&iprogram=${iprogram}&iemail=${iemail}&ikhoa=${ikhoa}&istatus=${istatus}`;
});

var iifullName = document.getElementById("fullName").textContent;
var iimssv = document.getElementById("mssv").textContent;
var iigender = document.getElementById("gender").textContent;
var iiyear = document.getElementById("year").textContent;
var iicclass = document.getElementById("cclass").textContent;
var iieduLevel = document.getElementById("eduLevel").textContent;
var iicourse = document.getElementById("course").textContent;
var iiprogram = document.getElementById("program").textContent;
var iiemail = document.getElementById("email").textContent;
var iikhoa = document.getElementById("khoa").textContent;
var iistatus = document.getElementById("status").textContent;
var iiavatar = document.getElementById("avatar").src;

const urlParams = new URLSearchParams(window.location.search);
const fullName = urlParams.get('fullName') || iifullName;
const mssv = urlParams.get('mssv') || iimssv;
const gender = urlParams.get('gender') || iigender;
const year = urlParams.get('year') || iiyear;
const cclass = urlParams.get('cclass') || iicclass;
const eduLevel = urlParams.get('eduLevel') || iieduLevel;
const course = urlParams.get('course') || iicourse;
const program = urlParams.get('program') || iiprogram;
const email = urlParams.get('email') || iiemail;
const khoa = urlParams.get('khoa') || iikhoa;
const status = urlParams.get('status') || iistatus;
const avatar = decodeURIComponent(urlParams.get('avatar'));

let Duy = new TTSV(fullName, gender, year, cclass, eduLevel, course, program, email, khoa, status);
getTTSV(Duy);

document.getElementById("fullName").textContent = fullName;
document.getElementById("mssv").textContent = mssv;
document.getElementById("gender").textContent = gender;
document.getElementById("year").textContent = year;
document.getElementById("cclass").textContent = cclass;
document.getElementById("eduLevel").textContent = eduLevel;
document.getElementById("course").textContent = course;
document.getElementById("program").textContent = program;
document.getElementById("email").textContent = email;
document.getElementById("khoa").textContent = khoa;
document.getElementById("status").textContent = status;
// document.getElementById("avatar").src = avatar;