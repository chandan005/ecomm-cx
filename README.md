## Application Readme

Welcome to the documentation for our backend application that identifies intent from user messages using LLM (Large Language Model) and generates personalized responses.

## Built Using

- Node.js version 19.7.5
- TypeScript

## Installation

Before proceeding with the installation, ensure the following prerequisites are met:

1. PostgreSQL is locally installed.
2. Access to AWS as an admin and an S3 Bucket created.

Follow the steps below for installation:

1. Clone the repository and navigate to the project directory (`ecomm-cx`).

2. Install dependencies using npm:

    ```bash
    npm install
    ```

3. Update the `local.env` file with missing values for Database Configuration and AWS Keys. Below are the environment variables that need to be set:

    ```plaintext
    DATABASE_HOST=127.0.0.1
    DATABASE_PORT=5432
    DATABASE_USER=<your_database_user>
    DATABASE_PASSWORD=<your_database_password>
    DATABASE_NAME=<your_database_name>
    DATABASE_SYNC=true
    DATABASE_MIGRATIONS_RUN=true
    DATABASE_LOGGING=false
    PORT=3000
    AWS_ACCESS_KEY_ID=<your_aws_access_key_id>
    AWS_ACCESS_KEY_SECRET=<your_aws_access_key_secret>
    S3_BUCKET_NAME=<your_s3_bucket_name>
    ```

4. Run the application locally using the following command:

    ```bash
    npm run start:local
    ```

Now, the application should be up and running locally.

## Usage

You can access the API documentation through Swagger UI by navigating to:

[http://localhost:3000/docs](http://localhost:3000/docs)
