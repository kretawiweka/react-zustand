import create from "zustand";
const useStore = create((set) => ({
  users: [],
  getUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const resData = await res.json();
    set({ users: resData });
  },
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
export default useStore;
