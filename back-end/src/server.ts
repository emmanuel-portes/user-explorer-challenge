import app from './app';
import config from './config/config';

app.listen(config.PORT, 'localhost', () => {
    console.log(`listening on port ${config.PORT}`)
})