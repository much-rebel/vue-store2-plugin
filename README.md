# Vue store2 plugin

This plugin is intended to add [store2](https://github.com/nbubna/store) library to
`Vue.prototype.$store` so then it can be easily
used in your Vue application.

## Setup

Just add it as any other Vue plugin

```javascript
// main.js

import Vue from 'vue';
import Store from 'vue-store2-plugin';

Vue.use(Store);
```

That is it, you are good to go!

## Usage

```javascript
// main.js

// ...

// Your application instance
new Vue({
    // ...
    created() {
        // Store info into localStoreage
        this.$store('app_loaded', true);
        
        // Load info from localStorage
        console.log(this.$store('app_loaded'));
        
        // More about how to use store() -> https://github.com/nbubna/store
    }
});
```