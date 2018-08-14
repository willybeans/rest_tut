# RESTful API Structure

A few things worth noting:
**server.js**: 
	1. this file contains a require for mongoose
	1. "" also contains an import from BOTH modules course and courseRoute
**course.js**:
	1. contains the schema and exports the mongoose.model object.
**courseroute.js**: 
	1. does not contain the mongoose dependency. 
	1. BUT does import the course object for the POST. 
	1. contians all routes post get, put, delete.
	1. all routes use router object, and subsequently router is the export

