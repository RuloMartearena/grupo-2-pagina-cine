const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const ticketsController = require('../controllers/ticketsController')

// ---------- Middlewares ---------- //
const upload = require('../middlewares/ticketMulterMiddleware')
const ticketValidationData = require('../middlewares/validationTicket')

// ---------- /tickets Showtimes Page ---------- //
router.get('/', ticketsController.showtimes)

// ---------- Create a new ticket ---------- //
router.get('/create', ticketsController.ticketsCreate)
router.post(
   '/create',
   upload.single('image'),
   ticketValidationData,
   ticketsController.ticketsStore
)

// ---------- Edit or update a ticket ---------- //
router.get('/edit/:id', ticketsController.ticketsEdit)
router.put(
   '/edit/:id',
   upload.single('image'),
   ticketValidationData,
   ticketsController.ticketsUpdate
)

// ---------- Delete a ticket ---------- //
router.delete('/delete/:id', ticketsController.ticketsDestroy)

module.exports = router
