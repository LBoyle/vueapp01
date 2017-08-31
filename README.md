# vueapp

> First Vue.js project

This is a white-label app that I mean to adapt to different use cases. 

Initially I built it with Skeleton.css but converted it to Bulma.css which is more robust and full-featured. 

I used vue-resource and vue-router. I also implemented JWT authentication, though I do have to manually add the token to the headers of each AJAX request. I chose to do this to keep the client-side package small rather than installing vue-jwt and making an interceptor etc. 



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
