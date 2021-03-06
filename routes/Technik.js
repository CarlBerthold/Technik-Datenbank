const Technik = require("../models/Technik");
const router = require("express").Router();

// GET FROM MONGO
// INSOMNIA
// STATUS 201
// ALL

const fileUploader = require("../config/cloudinary.config");


router.get('/', (req, res, next) => {
  Technik.find()
  .then(technik => {
    res.status(200).json(technik);
  })
  .catch(err => next(err));
}) 

router.post('/upload', fileUploader.single("imgUrl"), (req, res, next) => {
  console.log('file is: ', req.file)

  if (!req.file) {
    next(new Error("no file uploaded"));
    return;
  }
  res.json({ secure_url: req.file.path });
});


// POST TO MONGO
// INSOMNIA
// STATUS 201
// CREATE

router.post('/add', (req, res, next) => {
  const { hersteller, art, watt, inventarnummer, geprüft, jahr, bemerkung, besitzer, anzahl, imgUrl} = req.body;
  Technik.create({
    hersteller,
    art,
    watt,
    inventarnummer,
    geprüft,
    jahr,
    bemerkung,
    besitzer,
    anzahl,
    imgUrl
  })
  .then(technik => {
    res.status(201).json(technik);
  })
  .catch(err => {
    next(err);
  })
})

// GET FROM MONGO
// CHECKING ID VALIDATION 
// MOONGOOSE TYPES OBJECTID (REQ, PARAMS, ID)

router.get('/:id', (req, res, next) =>{ 
  Technik.findById(req.params.id)
  .then(technik => {
    if(!technik) {
      res.status(400).json(technik)    
    } else {
      res.status(200).json(technik);
    }
  })
  .catch(err => {
    next(err);
  })
});

// CHANGE 
// FIND MONGOOSE ID 
// 


router.put('/:id', (req, res, next) => {
  const {name, tarId} = req.body;
  Technik.findByIdAndUpdate(req.params.id, {name:name, tarId:tarId})
  .then(updatedTechnik => {
    res.status(200).json(updatedTechnik);
  })
  .catch(err =>next(err));
})


// DELETE
// FIND BY ID 



router.delete('/:id', (req,res,next) => {
  Technik.findByIdAndDelete(req.params.id)
  .then(() => {
    res.status(200).json({message: 'Technik deleted'});
  })
  .catch( err => next(err) )
});

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
