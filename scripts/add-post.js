
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src', 'data');

const questions = [
  {
    type: 'list',
    name: 'postType',
    message: 'What type of post do you want to add?',
    choices: ['news', 'reviews', 'guides', 'apps'],
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of the post:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of the post:',
  },
  {
    type: 'input',
    name: 'author',
    message: 'Enter the author of the post:',
  },
  {
    type: 'input',
    name: 'date',
    message: 'Enter the date of the post (e.g., "September 23, 2025"):',
  },
  {
    type: 'input',
    name: 'image',
    message: 'Enter the image URL for the post:',
  },
  {
    type: 'input',
    name: 'tags',
    message: 'Enter tags for the post (comma-separated):',
  },
  {
    type: 'editor',
    name: 'content',
    message: 'Enter the content of the post:',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { postType, title, description, author, date, image, tags, content } = answers;

  const filePath = path.join(dataDir, `${postType}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err);
      return;
    }

    const posts = JSON.parse(data);
    const newPost = {
      id: posts.length + 1,
      title,
      description,
      author,
      date,
      image,
      tags: tags.split(',').map(tag => tag.trim()),
      content,
      comments: [],
    };

    posts.push(newPost);

    fs.writeFile(filePath, JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        console.error(`Error writing to ${filePath}:`, err);
        return;
      }
      console.log(`Successfully added new ${postType} post!`);
    });
  });
});
