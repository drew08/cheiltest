const router = require('express').Router();

let hotels = [];

router.post('/tasks', (req, res) => {
    const hotel = req.body;
    console.log(hotel + 'test');
    hotels.push(hotel);

   // res.send('hotel is added to the database');     
});

router.get('/tasks', (req, res) => {
    res.json(hotels);
});

router.get('/hotel/:hotelId', (req, res) => {
    // Reading hotelId from the URL
    const hotelId = req.params.hotelId;

    // Searching hotels for the hotelId
    for (let hotel of hotels) {
        if (hotel.hotelId === hotelId) {
            res.json(hotel);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('hotel not found');
});


// Delete task
router.delete('/tasks/:id', (req, res, next) => {
	hotels.splice(req.params.id, 1);    
})

// Update Task
router.put('/tasks/:id', (req, res, next) => {
    
});

module.exports = router;