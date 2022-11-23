const Undergraduate = require("../models/Undergraduates");

const getUndergraduates = async (req, res) => {
  try {
    const undergraduates = await Undergraduate.find().sort({ createdAt: -1 });

    res.json(undergraduates);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getUndergraduate = async (req, res) => {
  try {
    const undergraduate = await Undergraduate.findById(req.params.id);

    if (!undergraduate) {
      return res.status(404).json({ error: "No undergraduate found" });
    }

    res.json(undergraduate);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const addUndergraduate = async (req, res) => {
  console.log(req.body);
  const { personalDetails, major, roll } = req.body;

  try {
    const undergraduate = await Undergraduate.create({
      personalDetails,
      major,
      roll,
    });

    res.status(201).json(undergraduate);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({ error: messages });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  }
};

const editUndergraduate = async (req, res) => {
  const { personalDetails, major, roll } = req.body;

  try {
    const undergraduate = await Undergraduate.findByIdAndUpdate(
      req.params.id,
      { personalDetails, major, roll },
      { new: true }
    );

    res.json(undergraduate);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({ error: messages });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  }
};

const deleteUndergraduate = async (req, res) => {
  try {
    await Undergraduate.findByIdAndRemove(req.params.id);

    res.json({ message: "Undergraduate Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getUndergraduates,
  getUndergraduate,
  addUndergraduate,
  editUndergraduate,
  deleteUndergraduate,
};
