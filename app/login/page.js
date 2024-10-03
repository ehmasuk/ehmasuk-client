"use client";

import { loginAction } from "@/actions/authActions";
import { Form, message } from "antd";
import FormItem from "antd/es/form/FormItem";

function Login() {
    const handleLogin = async (data) => {
        try {
            await loginAction(data);
            message.success("Login success");
        } catch (error) {
            message.error("Authentication failed");
        }
    };

    return (
        <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign in to your account</h1>

                    <Form className="space-y-4 md:space-y-6" onFinish={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Your email
                            </label>
                            <FormItem name="email" rules={[{ required: true, message: "Please input your email!" }]}>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="name@company.com" />
                            </FormItem>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <FormItem name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
                            </FormItem>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign in
                        </button>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default Login;
