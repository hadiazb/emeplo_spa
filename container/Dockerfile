FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start" ]

# RUN docker build . -t container-test

# RUN docker run -p 9000:9000 -d container-test
