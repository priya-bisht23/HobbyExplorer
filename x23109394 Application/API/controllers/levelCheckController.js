import * as levelCheckService from '../services/levelCheckService.js';

export const getAllLevelcheck = async (req, res) => { // Mark the function as async
    const { hobby } = req.query;
   
    try {
        // Await the asynchronous call to getAllLevelcheck
        const hobbies = await levelCheckService.getAllLevelcheck({ hobby });
        res.json(hobbies);
    } catch (error) {
        // Handle potential errors, such as database connection issues
        console.error('Error fetching hobbies:', error);
        res.status(500).json({ message: 'Error fetching hobbies' });
    }
};

