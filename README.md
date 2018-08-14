# RESTful API Structure

A few things worth noting:
**server.js**: 
	* this file contains a require for mongoose
	* "" also contains an import from BOTH modules course and courseRoute
**course.js**:
	* contains the schema and exports the mongoose.model object.
**courseroute.js**: 
	* does not contain the mongoose dependency. 
	* BUT does import the course object for the POST. 
	* contians all routes post get, put, delete.
	* all routes use router object, and subsequently router is the export

