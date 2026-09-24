const getAllMentors = async (Mentor) => {
  return await Mentor.find({ active: true }).select(
    "name expertise experience availability bio"
  );
};

export default {
  getAllMentors,
};