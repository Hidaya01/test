const express = require('express');
const router = express.Router();

// Example endpoint for fetching messages
router.get('/messages', (req, res) => {
    res.send('List of chat messages will be here');
});

module.exports = router;
