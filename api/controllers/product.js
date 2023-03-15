import { db } from "../db.js";



export const getProducts = (req, res) => {
  const q =  "SELECT * FROM products";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data); 
  });
};



export const getProduct = (req, res) => {
  const q = "SELECT * FROM products WHERE `id`= ? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};


export const addProduct = (req, res) => {
  const q =  "INSERT INTO `products` (`title`, `col_id`, `varanty`, `colorPallette`, `img`, `price`, `oldPrice`, `isNew`, `isDiscount`, `isFreecargo`, `ipektype`, `havHeight`, `amount`, `cat_id`, `img2`, `img3`) VALUES (?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.title,
    req.body.col_id,
    req.body.varanty, 
    req.body.colorPallette,
    req.body.img, 
    req.body.price,
    req.body.oldPrice,
    req.body.isNew,
    req.body.isDiscount,
    req.body.isFreecargo, 
    req.body.ipektype,
    req.body.havHeight,
    req.body.amount,
    req.body.cat_id,
    req.body.img2,
    req.body.img3,
  ];
  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Product has been created.");
  });  
};






export const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const q = "DELETE FROM products WHERE `id` = ?";
    db.query(q, [productId], (err, data) => {
      if (err) return res.status(403).json("You can not delete");
      return res.json("Product has been deleted!");
    });
  
};


export const updateProduct = (req, res) => {
  const productId = req.params.id;
  const q = "UPDATE products SET title = ?, col_id = ?,  varanty=?, colorPallette=?, img=?, price=?, oldPrice=?, isNew=?, isDiscount=?, isFreecargo=?, ipektype=?, havHeight=?, amount=?, cat_id=?, img2=?, img3=? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.col_id,
    req.body.varanty, 
    req.body.colorPallette,
    req.body.img, 
    req.body.price,
    req.body.oldPrice,
    req.body.isNew,
    req.body.isDiscount,
    req.body.isFreecargo, 
    req.body.ipektype,
    req.body.havHeight,
    req.body.amount,  
    req.body.cat_id,
    req.body.img2,
    req.body.img3,
  ];

  db.query(q, [...values, productId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Product has been updated.");
  });
};
