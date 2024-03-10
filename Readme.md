### some useful resources
1. For more 3d models:
https://iconscout.com/360-gltf-3d-models

2. creating custom icons:
https://icons8.com/profile/summary

3. bootstrap studio: for creating templates.

4. design schemes: https://visme.co/blog/website-color-schemes/

5. generate downloadable link from here https://sites.google.com/site/gdocs2direct/ for public files

### TODO for future

1. update the testimonials 
2. construct an api to fetch the link from mongodb so that it can be dynamic


#DEPLOYMENT INSTRUCTIONS
1. make the build of client (react app) via npm run build (npm install --legacy-peer-deps three)
2. commit it to main branch
3. make repo public
3. log in to droplet via ssh 

```
ip: root@104.248.28.62'
password: sarthjain830

```
4. clone the updated repo via http(the repo should be public)
5. inside the project folder: pm2 start "npm run start" --name portfolio
6. pm2 list to see the deployment
7. make repo pvt


