 # backk-starter

## Prerequisites

1. [Node.js](https://nodejs.org/en/download/) >= 12.19
2. If your microservice uses a database, you need to install a local instance of the database or have a remote instance available, for example a cloud database.
   You can also run a database in a container. For running a container in Mac or Windows, you need to install [Docker Desktop](https://www.docker.com/products/docker-desktop). You can use the same database installation for developing multiple Backk microservices. Backk will create a separate database/schema for each microservice. For local database installations:
    - [Download and install PostgreSQL](https://www.postgresql.org/download/) or [run PostgreSQL in a container](https://hub.docker.com/_/postgres)
    - [Download and install MySQL](https://www.mysql.com/downloads/) or [run MySQL in a container](https://hub.docker.com/_/mysql)
    - [Download and install MariaDB](https://mariadb.org/download/) or [run MariaDB in a container](https://hub.docker.com/_/mariadb)
    - [Download and install MongoDB](https://www.mongodb.com/try/download/community) or [run MongoDB in a container](https://hub.docker.com/_/mongo)
    - [Download and install Vitess](https://vitess.io/docs/get-started/local/) or [run Vitess in a container](https://vitess.io/docs/get-started/local-docker)
    - [Download and install CockroachDB](https://www.cockroachlabs.com/docs/stable/install-cockroachdb.html) or [run CockroachDB in a container](https://hub.docker.com/r/cockroachdb/cockroach)
    - [Download and install YugabyteDB](https://download.yugabyte.com/) or [run YugabyteDB in a container](https://hub.docker.com/r/yugabytedb/yugabyte)
3. If your microservice uses Kafka, you need to install a local instance of Kafka or have a remote instance available, for example in cloud. You can use the same Kafka installation for developing multiple microservices. By default, each microservice will only consume messages from a topic named after the microservice. For local Kafka installation:
    - [Download and install Kafka](https://kafka.apache.org/downloads) or [run Kafka in a container](https://hub.docker.com/r/wurstmeister/kafka)
4. If your microservice uses Redis (as message queue and/or response cache), you need to install a local instance of Redis or have a remote instance available, for example in cloud. You can use the same Redis installation for developing multiple microservices. By default, each microservice will only consume messages from a Redis list named after the microservice. For local Redis installation:
    - [Download and install Redis](https://redis.io/download) or [run Redis in a container](https://hub.docker.com/_/redis)


## <a name="get-started"></a> Get Started

### <a name="development-environment"></a> Development Environment

Follow the below steps: (In the future, there will be [backk-cli](https://github.com/backk-node/backk-cli) available, which can be used to generate a Backk project based on a set of questions)

1. Clone [Backk starter](https://github.com/backk-node/backk-starter) project to a directory named after your microservice

   ```bash
   # Using SSH
   git clone git@github.com:backk-node/backk-starter.git <your-microservice-name>
   
   # Or using HTTPS
   git clone https://github.com/backk-node/backk-starter.git <your-microservice-name>

   cd <your-microservice-name>
   ```

2. Complete all the 3 TODOs in `src/main.ts` and `src/microservice.ts` files
3. Check that the environment variable values in the `.env.dev` file are correct for your development environment
    - If you are using MongoDB, check
        - `MONGODB_HOST`
        - `MONGODB_PORT`
        - `MONGODB_USER`
        - `MONGODB_PASSWORD`
    - If you are using MySQL/MariaDB or MySQL compatible database, check
        - `MYSQL_HOST`
        - `MYSQL_PORT`
        - `MYSQL_USER`
        - `MYSQL_PASSWORD`
    - If you are using PostgreSQL or PostgreSQL compatible database, check
        - `POSTGRESQL_HOST`
        - `POSTGRESQL_PORT`
        - `POSTGRESQL_USER`
        - `POSTGRESQL_PASSWORD`
    - If you are using Kafka, check
        - `KAFKA_HOST`
        - `KAFKA_PORT`
    - if you are using Redis as a message queue, check
        - `REDIS_HOST`
        - `REDIS_PORT`
    - if you are using Redis as a response cache, check
        - `REDIS_CACHE_HOST`
        - `REDIS_CACHE_PORT`
4. OPTIONAL STEP: Remove unnecessary dependencies from `package.json` file
    - If you are using MongoDB, remove following lines:
      ```
      "@opentelemetry/plugin-mysql": "0.11.0",
      "@opentelemetry/plugin-pg": "0.11.0",
      "mysql2": "2.2.5",
      "pg": "^8.0.2",
      ```
    - If you are using MySQL/MariaDB or MySQL compatible database, remove following lines:
      ```
      "@opentelemetry/plugin-mongodb": "0.11.0",
      "@opentelemetry/plugin-pg": "0.11.0",
      "mongodb": "^3.6.6",
      "pg": "^8.0.2",
      ```
    - If you are using PostgreSQL or PostgreSQL compatible database, remove following lines:
      ```
      "@opentelemetry/plugin-mongodb": "0.11.0",
      "@opentelemetry/plugin-mysql": "0.11.0",
      "mongodb": "^3.6.6",
      "mysql2": "2.2.5",
      ```
    - If you are **NOT** using any database, remove following lines:
      ```
      "@opentelemetry/plugin-mongodb": "0.11.0",
      "@opentelemetry/plugin-mysql": "0.11.0",
      "@opentelemetry/plugin-pg": "0.11.0",
      "mongodb": "^3.6.6",
      "mysql2": "2.2.5",
      "pg": "^8.0.2",
      ```
    - If you are **NOT** using Kafka, remove following line:
      ```
      "kafkajs": "^1.15.0",
      ```
    - If you are **NOT** using Redis, remove following lines:
      ```
      "@opentelemetry/plugin-ioredis": "0.11.0",
      "ioredis": "^4.19.2",
      ```
5. Run `npm install`
6. Generate the [OpenAPI 3](https://swagger.io/specification/) API specs for your API implementation with following command:
   ```bash
   npm run generateApiSpecs
   ```
7. Run `npm start:dev`
   There is one example service in `src/services/example` directory that you can use as a basis for your own service(s).
   If/When you don't need that example service anymore, just delete the `src/services/example` directory and remove the example service instantiation also from the `MicroserviceImpl` class in `src/microservice.ts` file.
8. You can use and test your microservice API using [Postman](https://www.postman.com/downloads/) or [SwaggerHub](https://app.swaggerhub.com/home)  
   For Postman:
    1. Launch Postman
    2. Choose `Import` and then choose file `generated/openapi/openApiPublicSpec.yaml`

   For SwaggerHub:
    1. Navigate to [SwaggerHub](https://app.swaggerhub.com/home)
    2. Choose `Create New` and then `Import and Document API` and then choose file `generated/openapi/openApiPublicSpec.yaml`
9. Backk automatically generates some integration tests, and they can be run with following command:
   ```bash
   # NOTE! You need to have the microservice running before executing the integration tests,
   # so ensure you have run npm run start:dev before running the below command
   
   npm run integrationtest:dev
   ```
   You can also import the integration tests to Postman from file `generated/integrationtests/integrationTestsPostmanCollection.json`
10. Remove the `.git` directory (e.g. `rm -rf .git`)
11. Create a git repo (e.g. in Github)
12. Initialize and push to new repo:
    ```bash
    git init
    git add .
    git commit -m "First commit"
    git branch -M main
    git remote add origin git@github.com:<organization>/<your-microservice-name>.git
    git push -u origin main
    ```

