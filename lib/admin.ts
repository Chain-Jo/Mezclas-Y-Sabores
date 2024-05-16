import { auth } from "@clerk/nextjs/server"

const adminIds = [
    "user_2fKqie2UnUzs7iUzulQgqErWPbo",
]

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}