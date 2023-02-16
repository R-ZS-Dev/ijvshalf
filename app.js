const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
require('./connection');
app.use(cors());
app.use(express.json());
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + file.originalname.split('.').pop());
    }
});

const upload = multer({ storage: storage });

// controller
const inpressController = require('./controller/inpress');
const articalController = require('./controller/artical');
const top_articalController = require('./controller/top_artical');
const userLoginController = require('./controller/userLogin');
const homeController = require('./controller/home');
const yearVolumeController = require('./controller/yearVolume');
const archiveController = require('./controller/archive');
// 
const vistorController = require('./controller/sitevisitor');

// routes
const inpress = "/inpress";
const userLogin = '/userLogin';
const artical = '/artical';
const topArtical = '/topArtical';
const home = '/home';
const yearVolume = '/yearVolume';
const archive = '/archive';
const sitevisitor = '/sitevisitor';

app.get("/", function (req, res) {
    return res.send("Run");
});
app.get(inpress + "/view", inpressController.inpress);
app.post(artical + '/create', articalController.create);
app.post(artical + '/file_upload', upload.fields([
    { name: "file_pdf", maxCount: 1 },
    { name: "file_docx", maxCount: 1 },
]), articalController.file_upload);
app.get(topArtical + '/view', top_articalController.top_artical);
app.post(userLogin + '/create', userLoginController.createUser);
app.post(userLogin + '/login', userLoginController.loginUser);
app.get(home + '/view', homeController.home);
app.get(yearVolume + '/view', yearVolumeController.view);
app.get(archive + '/view/:id', archiveController.view);
app.get(archive + '/single/:id', archiveController.single);
app.get(archive + '/singlefull/:id', archiveController.singlefull);
app.get(archive + '/rightsidefile/:id', archiveController.rightsidefile);
app.get(archive + '/figure/:id', archiveController.figure);
app.get(archive + '/download/plus/:id/:no', archiveController.download_plus);
app.get(archive + '/view/plus/:id/:no', archiveController.view_plus);
// 
app.get(sitevisitor + '/newVistor', vistorController.newVistor);
app.get(sitevisitor + '/viewVistor', vistorController.viewVistor);


app.listen(process.env.PORT || 3003, () => {
    console.log("Inpress Server is running on port 3003");
});