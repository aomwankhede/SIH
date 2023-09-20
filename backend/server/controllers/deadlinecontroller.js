const Deadline = require("../models/deadline");

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

exports.updatedeadlines = async (req, res, next) => {
  try {
    const { projectname, link } = req.body;

    // Find the first document with the specified projectname and empty googleDriveLink
    const updatedDeadline = await Deadline.findOneAndUpdate(
      { projectname: projectname, googleDriveLink: "" },
      { $set: { googleDriveLink: link } },
      { sort: { createdAt: 1 } } // Sort in ascending order of createdAt to get the first matching document
    );

    if (!updatedDeadline) {
      return res.status(404).json({ message: "No matching deadline found" });
    }

    res.json({
      message: "Deadline updated successfully",
      data: updatedDeadline,
    });
  } catch (err) {
    next(err);
  }
};
