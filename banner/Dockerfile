FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9004

CMD ["npm", "start" ]

# RUN docker build . -t template-test

# RUN docker run -p 8080:8080 -d template-test