import { db } from "../db.js";

export const getCats = (req, res) => {
  const q = 
  "SELECT * FROM cats";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getCat = (req, res) => {
  const q =
    "SELECT `id`, `title`, `img`";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addCat = (req, res) => {
    const q =
      "INSERT INTO `cats` (`title`, `img`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.img,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Cat has been created.");
    });
  
};





export const deleteCat = (req, res) => {


    const catId = req.params.id;
    const q = "DELETE FROM cats WHERE `id` = ?";

    db.query(q, [catId], (err, data) => {
      if (err) return res.status(403).json("You can not delete");

      return res.json("Cat has been deleted!");
    });
  
};

export const updateCat = (req, res) => {


    const catId = req.params.id;
    const q =
      "UPDATE cats SET `title`=?,`img`=? WHERE `id` = ?";

    const values = [req.body.title, req.body.img];

    db.query(q, [...values, catId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Cat has been updated.");
    });
  
};