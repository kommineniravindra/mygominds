const fs = require('fs');
const path = './src/CourseContent/courses.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const categories = [
  'DEVELOPMENT', 'FRONTEND', 'AI', 'CLOUD', 'DATA SCIENCE', 
  'DATABASE', 'TESTING', 'corporate', 'fdp', 'sdp', 'pdp', 
  'entrepreneurship', 'events'
];

let newId = Math.max(...data.map(c => c.id)) + 1;
const baseCourse = data[0]; // use the first course as a template

const newData = [...data];

categories.forEach(cat => {
  let catCourses = newData.filter(c => c.category === cat || c.category.toUpperCase() === cat.toUpperCase());
  let count = catCourses.length;
  
  while (count < 12) {
    const newCourse = JSON.parse(JSON.stringify(catCourses.length > 0 ? catCourses[0] : baseCourse));
    newCourse.id = newId++;
    newCourse.category = cat;
    newCourse.title = newCourse.title + ' ' + (count + 1);
    newCourse.slug = newCourse.slug + '-' + newCourse.id;
    
    // Remove the bottomImage if it's a dummy generated course for the new categories
    // to avoid having Java/NET logos on corporate events etc. unless it already had one.
    if (!catCourses.length) {
      if (newCourse.details && newCourse.details.bottomImage) {
        delete newCourse.details.bottomImage;
      }
      newCourse.title = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase() + ' Course ' + (count + 1);
    }

    newData.push(newCourse);
    catCourses.push(newCourse);
    count++;
  }
});

fs.writeFileSync(path, JSON.stringify(newData, null, 2));
console.log('Done padding categories to 12 courses each.');
