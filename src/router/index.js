import { createRouter, createWebHistory } from "vue-router";

import Kitchen1 from "../views/Kitchen1.vue";
import Kitchen2 from "../views/Kitchen2.vue";
import Kitchen3 from "../views/Kitchen3.vue";

// Define routes
const routes = [
    {
        path: "/",
        component: Kitchen1,
    },
    {
        path: "/kitchen2",
        component: Kitchen2,
    },
    {
        path: "/kitchen3",
        name: "Kitchen3",
        component: Kitchen3,
    }
];

// Create a router instance.
const router = createRouter({
    // Create web history
  history: createWebHistory("http://localhost:5173/"),
  routes,
});


const isEntranceAllowed = (name) => {
    return name === "Kitchen3" ? false : true;
}

router.beforeEach((to, from) => {
    console.log("from ", from.name);

    // Knock on the door before entering the kitchen
    if (!isEntranceAllowed(to.name)) {
        console.log("Entrance is blocked");
        alert("Entrance is blocked");
        return false;
    }
    else {
        console.log("to ", to.name);
    }
});

export default router;
