const express = require("express");
const app = express();
const cors = require('cors');
const db=require('./connection');
app.use(cors());
app.use(express.json());

// controller
const inpressController=require('./controller/inpress');
const articalController=require('./controller/artical');
const top_articalController=require('./controller/top_artical');
const userLoginController=require('./controller/userLogin');
const homeController=require('./controller/home');
const yearVolumeController=require('./controller/yearVolume');
const archiveController=require('./controller/archive');

// routes
const inpress="/inpress";
const userLogin='/userLogin';
const artical='/artical';
const topArtical='/topArtical';
const home='/home';
const yearVolume='/yearVolume';
const archive='/archive';

app.get(inpress+"/view", inpressController.inpress);
app.post(artical+'/create', articalController.subarticle);
app.get(topArtical+'/view', top_articalController.top_artical);
app.post(userLogin+'/create', userLoginController.createUser);
app.get(home+'/view', homeController.home);
app.get(yearVolume+'/view', yearVolumeController.view);
app.get(archive+'/view/:id', archiveController.view);
app.get(archive+'/single/:id', archiveController.single);
app.get(archive+'/singlefull/:id', archiveController.singlefull);
app.get(archive+'/rightsidefile/:id', archiveController.rightsidefile);

app.listen(3003, () => {
    console.log("Inpress Server is running on port 3003");
});