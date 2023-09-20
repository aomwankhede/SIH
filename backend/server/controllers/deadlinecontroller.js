const Deadline = require("../models/deadline");

// create a new deadline in database
exports.createdeadline = async (req, res, next) => {
  try {
    //   const puserid = req.user._id
    const {
      sid,
      pid,
      marks,
      description,
      googleDriveLink,
      projectname,
      deadlineDate,
    } = req.body;
    const deadlinedata = new Deadline({
      studentid: sid,
      proffid: pid,
      marks,
      description,
      googleDriveLink: googleDriveLink,
      projectname: projectname,
      deadlineDate: deadlineDate,
    });

    await deadlinedata.save();
    res.json({
      data: deadlinedata,
    });
  } catch (err) {
    next(err);
  }
};

// get the deadlines from database
exports.getdeadlines = async (req, res, next) => {
  try {
    const deadlines = await Deadline.find({});
    res.json({
      data: deadlines,
    });
  } catch (err) {
    next(err);
  }
};

//update the deadline document on submission from student
exports.updatedeadlines = async (req, res, next) => {
  try {
    const { projectname, link } = req.body;

    console.log("************");
    console.log(projectname);
    console.log(link);
    console.log("************");

    // Find the first document with the specified projectname and empty googleDriveLink
    const updatedDeadline = await Deadline.findOneAndUpdate(
      { projectname: projectname, googleDriveLink: "" },
      { $set: { googleDriveLink: link } },
      { sort: { createdAt: 1 } } // Sort in ascending order of createdAt to get the first matching document
    );

    if (!updatedDeadline) {
      return res.status(403).json({ message: "No matching deadline found" });
    }

    res.json({
      message: "Deadline updated successfully",
      data: updatedDeadline,
    });
  } catch (err) {
    next(err);
  }
};
