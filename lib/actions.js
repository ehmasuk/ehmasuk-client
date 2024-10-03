"use server";

import { cookies } from "next/headers";

export const LoginAction = () => {
    cookies().set("isAdmin", "true");
};

export const LogoutAction = () => {
    cookies().delete("isAdmin");
};
