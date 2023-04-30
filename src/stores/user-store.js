import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: null,
    email: null,
    avatar: null,
    id: null,
  }),

  getters: {},

  actions: {
    setGoogleUser(data) {
      this.id = data.id;
      this.email = data.email;
      this.name = data.name;
      this.avatar = data.providers[0].avatar;
    },
  },
});
export default useUserStore;
