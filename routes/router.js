const router = require("express").Router();
const moviesController = require("../controllers/moviesController");
const multer = require("multer");
const upload = require("../middlewares/MulterMiddleware")



router.get("/", moviesController.getAllMovies);
router.get("/cadastrar", moviesController.renderPostPage);
router.post("/cadastrar", upload.single("poster"), moviesController.createMovies);



module.exports = router;