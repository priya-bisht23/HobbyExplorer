import Hobby from '../models/hobbyDataModel.js';
 
export const getAllLevelcheck = async (filters = {}) => {
    try {
      // Convert filters to be case-insensitive for MongoDB
      const queryFilters = Object.keys(filters).reduce((acc, key) => {
        // Assuming all filters should be treated as strings
        acc[key] = new RegExp('^' + filters[key] + '$', 'i'); // Case-insensitive exact match
        return acc;
      }, {});
  
      // Query the database with filters
      const hobbies = await Hobby.find(queryFilters);
      return hobbies;
    } catch (error) {
      console.error('Error fetching hobbies from MongoDB:', error);
      throw error; // Rethrow or handle as appropriate for your application
    }
  };

