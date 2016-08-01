var bodyParser = require( 'body-parser' );
var userRepository = require( '../repositories/user.js' );

/**
 *  This is the main part in the user api
 *
 *  From here all methods connected with users will be executed
 *
 * @param app
 */
module.exports = function( app ) {
  app.use( bodyParser.json() );
  app.use( bodyParser.urlencoded( {extended: true} ) );

  // When a new user needs to be registered
  app.post( '/api/users', function( req, res ) {

    //Get the user parameters from the request's body and execute the create user method from
    // the user repository
    var userParams = req.body;
    userRepository.createUser( userParams )
      .then( function( product ) {
        res.json( product );
      } ).catch( function( err ) {
      res.json( err );
    } );
  } );
};