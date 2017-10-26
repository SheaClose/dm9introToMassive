module.exports = {
  getStudents(req, res) {
    const db = req.app.get('db');
    db
      .get_students()
      .then(students => {
        return res.status(200).json(students);
      })
      .catch(console.log);
  },
  postStudent(req, res) {
    const db = req.app.get('db');
    db
      .post_student([req.body])
      .then(students => {
        return res.status(200).json(students);
      })
      .catch(console.log);
  }
};
