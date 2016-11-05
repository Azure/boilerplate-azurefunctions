'use strict';

exports.pubSub = (context, data) => {
  console.log('Hello from a "pubSub" event');
  console.log(data);
  context.success();
};

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

exports.bucket = (context, data) => {
  console.log('Hello from a "bucket" event');
  console.log(data);
  context.success();
};
