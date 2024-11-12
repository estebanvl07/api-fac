import app from './app'; 
import { PORT } from 'config/constants';

// TODO: connect to DB

app.listen(PORT, () => {
  console.log(`server reuning on port, ${PORT} 🚀`)
});