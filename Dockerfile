FROM node:14-alpine
RUN mkdir -p /var/www/app 
COPY . /var/www/app
WORKDIR /var/www/app
RUN npm install
RUN npm run build 
RUN rm -r node_modules 
RUN npm i -g serve 
CMD ["serve","-s","build"]