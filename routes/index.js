var express = require('express');
var router = express.Router();

router.get('/', (req, res,next) => {
  const technologies = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Handlebars'];

  res.render('home', { technologies });
});



router.get('/about', (req, res, next) => {
  const link = "https://www.w3schools.com/aws/aws_cloudessentials_awscert.php";
  res.render('about', { link });
});

router.get('/projects', (req, res, next) => {
  const projects = [
    {
      title: 'Yelp Camp',
      description: 'Discover and explore the best camping destinations through honest reviews. Find family-friendly sites, rugged adventures, and hidden gems.',
      link: 'https://github.com/droncoding/YelpCamp'
    },
    {
      title: 'Project 2',
      description: 'afely store and manage your confidential information with our secure platform. Share your innermost thoughts, dreams, and desires while maintaining complete control over your secrets.',
      link: 'https://github.com/droncoding/Secrets'
    },
  ];

  res.render('projects', { projects });
});

router.get('/contact', (req, res,next) => {
  const email = '200495245@georgianc.student.on.ca'; 
  res.render('contact', { email });
});

module.exports = router;
