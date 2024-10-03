"use client";
import { Button, Form, message, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
    const [allProjects, setAllProjects] = useState();

    const getProjects = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/projects");
        const data = await res.json();
        setAllProjects(data);
    };
    useEffect(() => {
        getProjects();
    }, []);

    const [createProjectForm] = Form.useForm();

    const handleAddProject = async (values) => {
        message.loading({ content: "Creating project...", key: 1 });
        try {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(values.image.fileList[0].originFileObj);
            fileReader.onload = async () => {
                await axios.post(process.env.NEXT_PUBLIC_API_URL + "/projects", { ...values, image: fileReader.result });
                createProjectForm.resetFields();
                message.success("Project created successfully");

                getProjects();
            };
        } catch (error) {
            console.log(error);
            message.error("Error creating project");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-1">
                    <p className="text-xl font-semibold mt-10 mb-5">Add a project</p>
                    <Form form={createProjectForm} className="mt-4" onFinish={handleAddProject}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                Title
                            </label>
                            <FormItem name="title" rules={[{ required: true, message: "Required!" }]}>
                                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5" placeholder="Brigate" />
                            </FormItem>
                        </div>
                        <div>
                            <label htmlFor="subTitle" className="block mb-2 text-sm font-medium text-white">
                                Sub title
                            </label>
                            <FormItem name="subTitle" rules={[{ required: true, message: "Required!" }]}>
                                <input type="text" name="subTitle" id="subTitle" className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5" placeholder="Ecommerce website" />
                            </FormItem>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-white">
                                Image
                            </label>
                            <FormItem name="image" className="bg-white p-3" rules={[{ required: true, message: "Required!" }]}>
                                <Upload maxCount={1} accept=".jpg, .jpeg, .png,.webp" beforeUpload={() => false}>
                                    <Button>Click to Upload</Button>
                                </Upload>
                            </FormItem>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-white">
                                Live link
                            </label>
                            <FormItem name="liveLink" rules={[{ required: true, message: "Required!" }]}>
                                <input type="text" name="liveLink" id="liveLink" className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5" placeholder="exaple.com" />
                            </FormItem>
                        </div>
                        <button type="submit" className="col-span-2 w-full text-white bg-blue-600 hover:bg-blue-700font-medium max-h-[50px] rounded-lg text-sm px-5 py-2.5 text-center">
                            Create project
                        </button>
                    </Form>
                </div>
                <div className="col-span-2">
                    <p className="text-xl font-semibold mt-10 mb-12">Projects</p>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Sub title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Live url
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProjects?.map((project,index) => {
                                    return (
                                        <tr key={index} className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4">
                                                <img src={project.image} className="border-2 border-sky-300 w-full max-h-24 object-cover object-top" alt="Apple Watch" />
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">{project.title}</td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">{project.subTitle}</td>

                                            <td className="px-6 py-4 font-semibold text-gray-900">{project.liveLink}</td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-red-600 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
