import app from './server';

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  return console.log(`API is listening at http://localhost:${PORT}`);
});
