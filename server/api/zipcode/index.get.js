import zipcodes from "~/data/zip.js";

// Define the API handler
export default defineEventHandler(async (event) => {
  const { limit = 50, page = 1, search } = getQuery(event);

  // Filtering zip codes based on search term
  let filteredZipCodes = zipcodes;

  // Prioritize results from state if search term is a state abbreviation
  if (search && search.length === 2) {
    const stateMatches = filteredZipCodes.filter(
      (zip) => zip.state.toLowerCase() === search.toLowerCase()
    );
    if (stateMatches.length > 0) {
      filteredZipCodes = stateMatches; // Include all results from the matching state(s)
    } else {
      filteredZipCodes = []; // No results if search term doesn't match any state abbreviation
    }
  } else if (search) {
    const searchTerm = search.toLowerCase();
    filteredZipCodes = filteredZipCodes.filter(
      (zip) =>
        zip.zip_code.toString().includes(searchTerm) ||
        zip.city.toLowerCase().includes(searchTerm) ||
        zip.state.toLowerCase().includes(searchTerm) ||
        zip.county.toLowerCase().includes(searchTerm) ||
        `${zip.city.toLowerCase()}, ${zip.state.toLowerCase()}, ${zip.zip_code.toString()}`.includes(
          searchTerm
        )
    );
  }

  // Apply pagination
  const totalZipCodes = filteredZipCodes.length;
  const totalPages = Math.ceil(totalZipCodes / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalZipCodes);
  const paginatedZipCodes = filteredZipCodes.slice(startIndex, endIndex);

  // Prepare response data
  const response = {
    results: paginatedZipCodes,
    pagination: {
      total: totalZipCodes,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: totalPages,
      hasPrevPage: page > 1,
      hasNextPage: endIndex < totalZipCodes,
      prevPage: page > 1 ? parseInt(page) - 1 : null,
      nextPage: endIndex < totalZipCodes ? parseInt(page) + 1 : null,
    },
  };

  // Return the response
  return response;
});
