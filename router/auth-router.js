const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin-controller");
const students = require("../controllers/student-controller");
const teachers = require("../controllers/teacher-controller");
const user = require("../controllers/userData-controller");
const notice = require("../controllers/notice-controller");
const login = require("../controllers/login-controller");
const Schema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");


router.route("/register").post(validate(Schema.signupSchema),admin);
router.route("/teacher").post(validate(Schema.teacherValidateSchema),teachers.teacher);
router.route("/student").post(validate(Schema.studentValidateSchema),students.student);
router.route("/login").post(login);
router.route("/notices").post(notice.addNotice);
router.route("/notices/:id").delete(notice.noticeDelete);
router.route("/teacher/:id").put(teachers.teacherEdit).delete(teachers.deleteTeacher);
router.route("/student/:id").put(students.studentEdit).delete(students.deleteStudent);
router.route("/user").get(authMiddleware,user);


module.exports = router;