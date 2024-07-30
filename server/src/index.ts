import express from 'express';

const expressApp = express();

const ideas = [
  {
    id: 1,
    title: 'Idea 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Idea 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Idea 3',
    description: 'Description 3',
  },
];

expressApp.get('/ideas', (req, res) => {
  res.send(ideas);
});

expressApp.listen('3000', () => {
  console.info('Listening on port 3000');
});
