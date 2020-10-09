import Vuex from "vuex";
import { getDb } from "../lib/db.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      zines: []
    },
    mutations: {
      setPosts(state, posts) {
        console.log("setPosts I was called");
        state.posts = posts;
        console.log(`... and I have ${state.posts.length} posts`);
      },
      setZines(state, zines) {
        console.log("setZines I was called");
        state.zines = zines;
        console.log(`... and I have ${state.zines.length} zines`);
      },
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        console.log("=> nuxtServerInit called");
        console.log(`Is client => ${process.client}`); // neva
        console.log(`Is server => ${process.server}`);
        if (!process.client) {
          console.log("I AM YOUR SERVER");
        }
        const postsArray = [];
        const zinesArray = [];

        const dbHandle = getDb(context);

        try {
          let cursor;
          cursor = await dbHandle().query("FOR d IN zines FILTER d.publish==true SORT d.createdDate DESC RETURN d");
          const zines = await cursor.all();
          zines.map(zine => {
            zinesArray.push(zine);
          });
          vuexContext.commit("setZines", zinesArray);
          cursor = await dbHandle().query("FOR d IN posts FILTER d.publish==true SORT d.createdDate DESC RETURN d");
          const posts = await cursor.all();
          posts.map(post => {
            postsArray.push(post);
          });
          vuexContext.commit("setPosts", postsArray);

        } catch (e) {
          console.log(e)
        }
      }
    },
    getters: {
      posts(state) {
        // console.log(state.posts);
        return state.posts;
      },
      zines(state) {
        // console.log(state.posts);
        return state.zines;
      },
      dbHandle(state) {
        return state.dbHandle;
      }
    }
  });
};

export default createStore;
