import app from './app.js';
import { PORT } from './config.js';
import { connect } from "./db.js";

connect();

app.listen(PORT, () => console.log(`Server on port ${PORT}`));