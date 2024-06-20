// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
  // Defines constant for the cyan color of the code used in the console
  const fgCyan = '\x1b[36m';
  switch (req.method) {
    case 'GET': {
      // Log green color message for GET request
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      // Log blue color message for POST request
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      // Log orange color message for other HTTP methods
      console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
  }

  next();
};

// Export clog function
exports.clog = clog;
