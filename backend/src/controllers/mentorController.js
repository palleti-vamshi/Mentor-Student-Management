import mentorService from "../services/mentorService.js";
const getAllMentors = async (req, res, next) => {
  try {
    const mentors = await mentorService.getAllMentors(req.app.locals.Mentor);
    res.status(200).json({
      success: true,
      data: mentors,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllMentors,
};