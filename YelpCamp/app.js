var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
  {
   name: "Salmon Creek",
   image: "http://eurotravel360.com/wp-content/uploads/2013/05/What-to-Consider-When-Choosing-a-Campsite.jpg"
   }, function(err, campground){
   if(err){
     console.log(err);
   } else {
     console.log("New Created Campground: ")
     console.log(campground);
   }
   });

  var campgrounds = [
    ,
    {name: "Crystal Cove", image: "http://www.ecocampuk.co.uk/wp-content/uploads/2011/08/Sussex-Campsite-with-Bell-Tents-7.jpeg"},
    {name: "Big Bear", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROHlfB8JwDuedX6Mvmj8SBybiutFuPiThIyGhwYkqYczz-EZJ6"},
    {name: "Salmon Creek", image: "http://eurotravel360.com/wp-content/uploads/2013/05/What-to-Consider-When-Choosing-a-Campsite.jpg"},
    {name: "Crystal Cove", image: "http://www.ecocampuk.co.uk/wp-content/uploads/2011/08/Sussex-Campsite-with-Bell-Tents-7.jpeg"},
    {name: "Big Bear", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROHlfB8JwDuedX6Mvmj8SBybiutFuPiThIyGhwYkqYczz-EZJ6"},
    {name: "Salmon Creek", image: "http://eurotravel360.com/wp-content/uploads/2013/05/What-to-Consider-When-Choosing-a-Campsite.jpg"},
    {name: "Crystal Cove", image: "http://www.ecocampuk.co.uk/wp-content/uploads/2011/08/Sussex-Campsite-with-Bell-Tents-7.jpeg"},
    {name: "Big Bear", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROHlfB8JwDuedX6Mvmj8SBybiutFuPiThIyGhwYkqYczz-EZJ6"},
    {name: "Mammoth", image: "https://media-cdn.tripadvisor.com/media/photo-s/02/68/fe/d6/camp-site.jpg"}
];

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.get('/campgrounds', function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);

  res.redirect('/campgrounds');
});

app.listen(3000, function(){
  console.log("Yelp Camp has started on port 3000");
});
