var db = require('./db');
var User = require('./user.js');

var Goal = {};

// TODO: ADD MORE MODEL FUNCTIONS HERE
Goal.findGoalById = function(goalId,cb) {
    return db('goals').where({ id: goalId })
      .then(function(goal) {
        cb(null,goal);
      })
      .catch(function(err) {
        cb(err)
      });
  };
  
  // TODO: ADD MORE MODEL FUNCTIONS HERE
  Goal.addNewGoal = function(newGoal,cb) { //newGoal object
    // var subQuery = '';
    //  User.findUsernameId(newGoal.username)
    //                 .then((res)=>{
                      
    //                  subQuery = res;
    //                  console.log('subQuery>>', subQuery)
    //                 })

                    
                    
    // // if(!subQuery){
    // //   var newUser = newGoal.username
    // //   User.addNewUser(newUser,'temp')
    // //       .then((newUser)=>{
    // //         subQuery = User.findUsernameId(newGoal.username)
    // //       })
    // // }

    // // console.log('subQuery first :', subQuery)

    return db('goals').insert([{goal: newGoal.goal, description: newGoal.description, id_user: newGoal.id_user}])
    .then(res => cb(null,newGoal))
    .then(()=>console.log('new goal>>',{goal: newGoal.goal, description: newGoal.description, id_user: newGoal.id_user}))
    .catch(err => cb(err));
  };

  Goal.updateGoalById = function(goalId,cb) {
    return db('goals').where({ id: goalId })
                      .update({ description: 'Completed' })
                      .then(function() {
                        cb(null,'updated');
                       })
                      .catch(function(err) {
                        cb(err)
                       });
  };


  Goal.findAllGoalsByUser = function(username,cb) {
    var subQuery = db('users').where({username : username}).select('id');
    return db('goals').where({ id_user: subQuery })
                      .then(function(response) {
                        cb(null,response);
                       })
                      .catch(function(err) {
                        cb(err)
                       });
  };

  Goal.getAllGoals = function(cb){
    db('goals').select().then(res => cb(null,res))
                        .catch(err => cb(err));
                        
  }

var hanyGoal1 = {
      goal: 'Pass technical assessment',
      description: 'continue to hustle',
      id_user: 1
  }

var hanyGoal2 = {
    goal: 'Rock the world',
    description: 'do the impossible',
    id_user: 1
}

var hanyGoal3 = {
    goal: 'Be close to family',
    description: 'new home',
    id_user: 1
}

var mandyGoal1 = {
    goal: 'finish the sprint today',
    description: 'if I can finish it this minute, I will',
    id_user: 2
}

module.exports = Goal;


// Goal.findAllGoalsByUser('Hany');

// db('goals').where({ id: 2 }).update({ id_user: 2 });


// Goal.updateById = function(goalId) {
//     return db('goals').where({ id: goalId })
//                       .update({ id_user: 2 })
//                       .then(function(response) {
//                         db('goals').select().then(res => console.log(res));
//                        })
//                       .catch(function(err) {
//                         console.error(err)
//                        });
//   };


//   Goal.updateById(2);


