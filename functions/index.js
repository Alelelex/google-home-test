'use strict';

const http = require('http');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
//const {ApiAiApp} = require('actions-on-google');
const https = require('https');
const axios = require('axios');
const request = require('request');

const apiKey = '621ffda5';

admin.initializeApp(functions.config().firebase);

const ACTION = {
  MOVIE: 'movie',

};

function askMovie (response) {
  // return new Promise((resolve, reject) => {
  //   // resolve("Inside");
  //   https.get('www.omdbapi.com/?apikey=621ffda5&s=lego', res => {
  //         console.log("test3")
  //      let raw = '';
  //      res.on('data', chunk => raw += chunk);
  //      res.on('end', () => {
  //           console.log("test4")
  //         let search = response['Search'][0];
  //         let searchTitle = search['Title'];

  //         // Create response
  //         let output = 'Best movie : ' + searchTitle;

  //         resolve(output);
  //       });
  //      res.on('error', (error) => {
  //           console.log(error)
  //         reject(error);
  //      });

  //   });
  // });



    return new Promise((resolve, reject) => {
    // resolve("Inside");
    // request('http://www.omdbapi.com/?apikey=621ffda5&s=lego', { json: true }, (err, res, body) => {
    request('https://www.google.fr', { json: false }, (err, res, body) => {

      if(err)
        console.log(err);

      console.log("test3");
      resolve("test5");
       // let raw = '';
       // res.on('data', chunk => raw += chunk);
       // res.on('end', () => {
       //      console.log("test4")
       //    let search = response['Search'][0];
       //    let searchTitle = search['Title'];

       //    // Create response
       //    let output = 'Best movie : ' + searchTitle;

       //    resolve(output);
       //  });
       // res.on('error', (error) => {
       //      console.log(error)
       //    reject(error);
       // });

    });
  });



  // return axios.get('http://www.omdbapi.com/?apikey=621ffda5&s=lego')
}

const actionMap = new Map();
actionMap.set(ACTION.MOVIE, askMovie);
    
exports.dialogflowWeatherWebhook = functions.https.onRequest((request, response) => {
  askMovie(response).then((output) =>{
        console.log("test1")
    response.json({ fulfillmentText: 'test' });
  }).catch((error) => {
    console.log(error)
    response.json({ fulfillmentText: 'No movies' });
  })
});