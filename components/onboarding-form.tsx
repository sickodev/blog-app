"use client";
import React, { useState } from "react";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useToast } from "./ui/use-toast";
import { redirect } from "next/navigation";

const OnboardingForm = ({ name, email }: { name: string; email: string }) => {
    const { toast } = useToast();
    const [hasUsername, setHasUsername] = useState<string>("check");
    const formSchema = z.object({
        name: z.string(),
        username: z
            .string()
            .min(3, { message: "Username should be atleast 3 characters" }),
        email: z.string().optional(),
        bio: z
            .string()
            .min(15, { message: "Bio should be atleast 15 characters" })
            .max(400, { message: "Bio should be atleast 400 characters" }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name,
            username: "",
            email: email,
            bio: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (hasUsername !== "not_found") {
            toast({
                variant: "destructive",
                description: "Username not unique",
            });
            return;
        }
        try {
            const response = await axios.post("/api/create-profile", values);
            if (response) {
                redirect("/home/");
            }
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: error.message,
            });
        }
    };

    const checkUsername = async () => {
        const username = form.getValues().username;
        if (username.length === 0 || username === "username") {
            toast({
                variant: "destructive",
                description: "Empty or invalid username...",
            });
            setHasUsername("check");
            return;
        }
        try {
            const response = await axios.get(
                `/api/check-username?username=${username}`
            );
            setHasUsername(response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div className='mx-2 min-w-lg max-w-lg'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-3'
                >
                    <div className='w-full flex justify-between space-x-3'>
                        <div className='w-1/2'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Your publicly accessible name.
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='w-1/2'>
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className='bg-zinc-600'
                                                disabled
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Your publicly accessible name.
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <div className='flex items-center space-x-3'>
                                    <FormControl>
                                        <Input
                                            placeholder='username'
                                            {...field}
                                        />
                                    </FormControl>
                                    <Button
                                        type='button'
                                        onClick={checkUsername}
                                        variant='outline'
                                        className={`${
                                            hasUsername === "check"
                                                ? "border-sky-500"
                                                : hasUsername === "not_found"
                                                ? "border-green-500 bg-green-500"
                                                : "border-red-500 bg-red-500"
                                        }`}
                                    >
                                        {(() => {
                                            if (hasUsername === "check") {
                                                return <p>Check</p>;
                                            } else if (
                                                hasUsername === "not_found"
                                            ) {
                                                return <CheckIcon />;
                                            } else {
                                                return <Cross1Icon />;
                                            }
                                        })()}
                                    </Button>
                                </div>
                                <FormDescription>
                                    Your publicly accessible username. <br />
                                    <span className='text-yellow-500'>
                                        Should be unique.
                                    </span>
                                    <br />
                                    <span className='text-orange-500'>
                                        Your username cannot be username.
                                    </span>
                                    <br />
                                    <span className='text-red-500'>
                                        You cannot change your username!!
                                    </span>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='bio'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <Textarea
                                    placeholder='Hi! I am an entrepreneur and I talk about finance, tech and sports.'
                                    {...field}
                                    rows={10}
                                />
                                <FormDescription>
                                    Your bio is only visible to people who
                                    follow you.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type='submit'
                        variant='outline'
                        className='border-green-500 border-2'
                    >
                        Save Details
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default OnboardingForm;
