CREATE DATABASE 'Segwitz-Assignment'

CREATE TABLE "public"."sales" ( 
	"id" Serial NOT NULL,
	"userName" Character Varying( 50 ) NOT NULL,
	"amount" Numeric(7,2) NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"deletedAt" timestamp NULL,
	PRIMARY KEY ( "id" ) );
 ;

 