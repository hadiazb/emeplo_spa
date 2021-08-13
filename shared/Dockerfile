FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9001

CMD ["npm", "start" ]

# RUN docker build . -t shared-test

# RUN docker run -p 9500:9500 -d shared-test