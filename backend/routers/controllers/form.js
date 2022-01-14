const scheduleModel = require("./../../db/models/schedule");

const form = (req, res) => {
  const { userName, adress, description, phoneNumber, iq, status } =
    req.body;

  const userId = req.token.id;

  const schedule = new scheduleModel({
    userName,
    adress,
    description,
    phoneNumber,
    iq,
    status,
    userId,
  });

  schedule
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getAllForm = (req, res) => {
  scheduleModel
    .find( { $or: [ { status: "Urgent" },{ status: "Mid-Range" },{ status: "Not Urgent" } ] } )
    .populate("userId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

const changeStatus = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  scheduleModel
    .findOneAndUpdate({ _id: id }, { status: status })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  form,
  getAllForm,
  changeStatus,
};
