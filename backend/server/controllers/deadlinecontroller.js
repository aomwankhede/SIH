const Deadline = require("../models/deadline");

exports.createdeadline = async (req, res, next) => {
  try {
    //   const puserid = req.user._id
    const { sid, pid, marks, description, googleDriveLink, projectname, deadlineDate } =
      req.body;
    const deadlinedata = new Deadline({
      studentid: sid,
      proffid: pid,
      marks,
      description,
      googleDriveLink:googleDriveLink,
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
