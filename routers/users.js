const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.delete("/:id", deleteUserById);
userRouter.put("/:id", editUser);

export default userRouter; // ✅
