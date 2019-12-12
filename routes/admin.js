const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const AdminController = require("../apicontrollers/admin");
const AdminShopController = require("../apicontrollers/adminshop");
const isAuthAdmin = require('../middleware/is-auth-admin')
const isAuth = require('../middleware/is-auth')
router.use(cors());



router.get("/adminTin", isAuth, isAuthAdmin, AdminController.getAdmin);

//Manager User
router.get("/adminTin/managerusers", isAuth, isAuthAdmin, AdminController.getManagerUsers);
router.get("/adminTin/managerusers/update/:_id", isAuth, isAuthAdmin, AdminController.getUpdate);
router.post("/adminTin/managerusers/update", isAuth, isAuthAdmin, AdminController.postUpdateUser);
router.get("/adminTin/managerusers/delete/:_id", isAuth, isAuthAdmin, AdminController.getRemoveUser);

//Manager Order
router.get("/adminTin/managerorder", isAuth, isAuthAdmin, AdminController.getListOrder);

//Manager Product
router.get("/adminTin/managerproducts", isAuth, isAuthAdmin, AdminController.getListiPhone);

//Manager Macbook
router.get("/adminTin/managermacbook", isAuth, isAuthAdmin, AdminController.getListMacbook);

//Manager Apple Watch

router.get("/adminTin/managerapplewatch", isAuthAdmin, AdminController.getListAppleWatch);

//Manager Airpod
router.get("/adminTin/managerairpod", isAuthAdmin, AdminController.getListAirpod);

//Manager NewProduct
router.get("/adminTin/managernewproduct", isAuthAdmin, AdminController.getListNewProduct);
router.get(
  "/adminTin/managernewproduct/delete/:_id", isAuthAdmin,
  AdminController.getRemoveNewProduct
);
router.get(
  "/adminTin/managernewproduct/update/:_id", isAuthAdmin,
  AdminController.getUpdateNewProduct
);
router.post(
  "/adminTin/managernewproduct/update", isAuthAdmin,
  AdminController.postUpdateNewProduct
);


//Admin Shop page
router.get(
  "/adminTin/tables-data", isAuthAdmin,
  AdminShopController.gettable
);
module.exports = router;
