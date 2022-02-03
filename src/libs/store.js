import create from "zustand";
const useStore = create((set) => ({
  users: [],
  getUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    set({ users: await res.json() });
  },
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
export default useStore;
