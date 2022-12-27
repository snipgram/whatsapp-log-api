import Log from "../models/Log.js";
import jwt from "jsonwebtoken";
import date from 'date-and-time';
import request from "request";
import { json } from "express";

async function create(req, res) {
  const token = req.headers["x-access-token"];

  if (!req.body) {
    return res.status(400).send({ message: "Body can't be empty" });
  }

  const user = jwt.verify(token, process.env.BCRYPT_KEY);

  const result = await Log.create({
    userId: user.iat,
    content: req.body,
    timestamp: Date.now()
  });
  return res.send(result);
}

async function destroy(start_date, end_date) {

  const token = req.headers["x-access-token"];

  const user = jwt.verify(token, process.env.BCRYPT_KEY);
  
  var start_date_timestamp = (new Date(start_date)).getTime();
  var add_days = date.addDays(new Date(end_date), 1);
  var end_date_timestamp = (add_days).getTime();

  Log.find({
    userId: user.iat,
    timestamp: {
      $gte: start_date_timestamp,
      $lt: end_date_timestamp
    }
  }, function(err, obj) {
    for (let i = 0; i < obj.length; i++) {
      Log.deleteOne({_id: obj[i]._id}, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
      });
    }
  })
}

async function show(req, res) {
  const { start_date, end_date } = req.body

  const token = req.headers["x-access-token"];

  const user = jwt.verify(token, process.env.BCRYPT_KEY);
  
  var start_date_timestamp = (new Date(start_date)).getTime();
  var add_days = date.addDays(new Date(end_date), 1);
  var end_date_timestamp = (add_days).getTime();

  Log.find({
    userId: user.iat,
    timestamp: {
      $gte: start_date_timestamp,
      $lt: end_date_timestamp
    }
  }, function(err, obj) {
    return res.send(obj);
  })
}

export const showRaw = async(start_date, end_date) => {

  await destroy(start_date, end_date)

  var options = {
    'method': 'GET',
    'url': 'https://newsweather.angel-ping.my.id/show',
    'headers': {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXRzYnVhaC5jb20iLCJwYXNzd29yZCI6Iml0c2J1YWguY29tIiwiaWF0IjoxNjY2OTMwNzY0fQ.NjoY_qDc-aQDMU5y1UhDgVJPCo7nczJIGyN_SprZ9iU',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "start_date": start_date,
      "end_date": end_date
    })
  
  };
  request(options, async function (error, response) {
    if (error) throw new Error(error);
    const body = response.body

    var length = JSON.parse(body).length
    var error_message = "Length: "+length+" Date: "+start_date+" - "+end_date
    console.log(error_message)

    for (let i = 0; i < length; i++) {
      try{
        var options = {
          'method': 'POST',
          'url': 'https://lab2.itsbuah.com/chats/formatted-response',
          'headers': {
            'angel-key': 'ECOM.c9dc7e39c892544e816',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(JSON.parse(body)[i])
      
        };
        request(options, async function (error, response) {
          if (error){
            console.log("error: "+JSON.stringify(error));
            return false;
          };
    
          if(JSON.parse(response.body).success == true) {
            if(Object.keys(JSON.parse(response.body).data).length > 0) {
              console.log(response.body)
  
              const result = await Log.create({
                userId: "1669771751",
                content: JSON.parse(response.body).data,
                timestamp: JSON.parse(response.body).data.key.timestamp
              });
            }
          }
        });  

        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (err) {
        console.log(err.message)
      }

      await delay(100)
      
    }

    console.log("finsih")
  });
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default { create, show, showRaw, destroy };
