CREATE TABLE "public"."sales" ( 
	"id" Serial NOT NULL,
	"userName" Character Varying( 50 ) NOT NULL,
	"amount" Numeric( 5, 2 ) NOT NULL,
	"createdAt" Date NOT NULL,
	"updatedAt" Date NOT NULL,
	PRIMARY KEY ( "id" ) );
 ;

 CREATE DATABASE 'Segwitz-Assignment'