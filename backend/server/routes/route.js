const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontrollers");
const projectController = require("../controllers/projectcontroller");
const deadlineController = require("../controllers/deadlinecontroller");
const upload = require("../middlewarre/upload");
const submit = require("../middlewarre/submit");

router.post("/signup", upload.array("projectfile[]"), userController.signup);
router.get('/signup',userController.allowIfLoggedin, userController.fetchuser);

router.post("/login", userController.login);

router.get(
  "/dashboard",
  userController.allowIfLoggedin,
  projectController.getprojects
);

router.get(
  "/dashboard/requests",
  userController.allowIfLoggedin,
  projectController.getrequests
);

router.post(
  "/project",
  userController.allowIfLoggedin,
  userController.grantAccess("createOwn", "project"),
  projectController.projectsave
);

router.put(
  "/project/:projectid",
  userController.allowIfLoggedin,
  userController.grantAccess("updateOwn", "project"),
  projectController.projectupdate
);

router.delete(
  "/project/:projectid",
  userController.allowIfLoggedin,
  userController.grantAccess("deleteOwn", "project"),
  projectController.projectdelete
);

// router.post('/approve',userController.allowIfLoggedin,submit.request)

router.post(
  "/sendrequest",
  userController.allowIfLoggedin,
  submit.request,
  projectController.sendrequest
);

// router.put('/response',userController.allowIfLoggedin, projectController.updaterequest);

router.get("/deadline", deadlineController.getdeadlines);

router.post("/deadline", deadlineController.createdeadline);

router.post("/updatedeadlines", deadlineController.updatedeadlines);

router.get(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.getUser
);

router.get(
  "/users",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  userController.getUsers
);

router.put(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("updateAny", "profile"),
  userController.updateUser
);

router.delete(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("deleteAny", "profile"),
  userController.deleteUser
);

module.exports = router;
