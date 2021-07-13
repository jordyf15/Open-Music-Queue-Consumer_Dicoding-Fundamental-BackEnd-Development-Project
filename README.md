# Open Music Queue Consumer
This Open Music Queue Consumer will be responsible to handle the export songs in playlist feature of the [Open Music API](https://github.com/jordyf15/Open-Music-API_Dicoding-Fundamental-BackEnd-Development-Project), where this application will consume the message that was send to the queue by the Open Music API. The message contains necessary information to handle the task such as the target email and the playlist id. After that those information will be used to query the songs in the playlist and send it to the target email as json data using nodemailer.

## SETUP
### Installation
    git clone https://github.com/jordyf15/Open-Music-Queue-Consumer_Dicoding-Fundamental-BackEnd-Development-Project.git
    npm install

### Scripts
- To start the application: `node src/consumer.js`

### Environment Variables
These variables need to be prepared in a `.env` file in the root folder.
- PGUSER: The name of the user that have access to the postgres database.
- PGHOST: The host for the postgres
- PGPASSWORD: The password for the user that have access to the postgres database.
- PGDATABASE: Then name of the postgres database.
- PGPORT: the port of your postgres.
- MAIL_ADDRESS: your email address
- MAIL_PASSWORD: your email password
- RABBITMQ_SERVER: The host server of rabbitmq.
