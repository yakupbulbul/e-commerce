import { db } from "../db.js";

export const getColections = (req, res) => {
  const q =  "SELECT * FROM colections";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const getColection = (req, res) => {
  const q = "SELECT `id`, `title`, `img`,`cat_id` ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};


export const addColection = (req, res) => {
  const q =
    "INSERT INTO `colections` (`title`, `img`, `cat_id`) VALUES (?, ?, ?)";
  const values = [
    req.body.title,
    req.body.img,
    req.body.cat_id, // should be the third value
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("collection has been created.");
  });  
};






export const deleteColection = (req, res) => {
    const catId = req.params.id;
    const q = "DELETE FROM colections WHERE `id` = ?";

    db.query(q, [catId], (err, data) => {
      if (err) return res.status(403).json("You can not delete");
      return res.json("Colection has been deleted!");
    });
  
};


export const updateColection = (req, res) => {
  const colectionId = req.params.id;
  const q = "UPDATE colections SET title = ?, img = ?, cat_id = ? WHERE id = ?";
  const values = [req.body.title, req.body.img, req.body.cat_id];

  db.query(q, [...values, colectionId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Colection has been updated.");
  });
};
