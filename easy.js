function dailyExercise() {
  return function(exerciseName) {
    console.log(`Today's exercise: ${exerciseName}`);
  };
}


let Exercise = dailyExercise();


Exercise('Running');
Exercise('Swimming');
Exercise('Dancing');  
Exercise('Fencing');