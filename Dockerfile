FROM node:20
 
WORKDIR /app
 
ENV PATH /app/node_modules/.bin:$PATH
 
COPY package.json ./
COPY package-lock.json ./
RUN npm install
 
COPY . ./
 
ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL

CMD ["npm", "start"]    