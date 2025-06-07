// function calculateSum(n){
//     let sum = 0;

//     for (let i = 1; i<=n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// app.get("/",function(req,res){
//     const n = req.query.n // Method to get n from http server using "?" after writing specifying the route on which the input functionality is there
//     const ans = calculateSum(n)

//     res.send(`Sum of ${n} numbers is ${ans.toString()}`);
// })

const express = require("express");
const app = express();
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy; // isHealthy is a query that will be recieved when post request is done
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Task completed",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({}); // You must send atleast an empty response
});

app.delete("/", function (req, res) {
  new_kidneys = [];
  if (CheckUnhealthyKidneysPresent() != 0) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        new_kidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = new_kidneys;
    res.json({
      msg: "done",
    });
  }
  else{
    res.status(411).json({
      msg: "No unhealthy kidneys found"
    })
  }
});

function CheckUnhealthyKidneysPresent() {
  let UnhealthyKidneysCount = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy == false) {
      UnhealthyKidneysCount+=1
    }
  }
  return UnhealthyKidneysCount;
}

app.listen(3000);
