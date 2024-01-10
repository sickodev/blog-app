"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const fromSchema = z.object({
    title: z
        .string()
        .min(3, { message: "Title must be at least 3 characters" }),
    content: z
        .string()
        .min(15, { message: "Content must be at least 15 characters" }),
    imageUrl: z.string().optional(),
});

const PostDialog = ({ imageUrl }: { imageUrl: string }) => {
    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema),
    });
    const onSubmit = async (values: z.infer<typeof fromSchema>) => {
        console.log(values);
    };
    return (
        <Dialog>
            <DialogTrigger
                asChild
                className='md:w-full w-[1000px] dark:bg-zinc-900/60 bg-zinc-100 rounded-xl p-4 cursor-pointer'
            >
                <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <div className='h-[50px] w-[50px] relative'>
                            <Image
                                src={imageUrl}
                                alt='profile-image'
                                fill
                                className=' rounded-full'
                            />
                        </div>
                        <h2 className='text-md font-normal italic opacity-60 text-justify'>
                            Write something you are passionate about. Give it a
                            catchy title, a cool image for the header and
                            interesting content.
                        </h2>
                    </div>
                    <Separator />
                    <div className='flex justify-end'>
                        <Button
                            className='border-blue-500 w-[200px] hover:bg-sky-400 transition-all duration-150 ease-out'
                            variant='outline'
                        >
                            Post or Schedule a Blog
                        </Button>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className='border border-sky-500'>
                <DialogHeader>
                    <DialogTitle>Post a Blog</DialogTitle>
                    <DialogDescription>
                        Compose an article for your blog.
                    </DialogDescription>
                    <Separator className='bg-sky-400' />
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-2'
                        >
                            <FormField
                                control={form.control}
                                name='title'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Title'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='imageUrl'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <Input type='file' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='content'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                rows={15}
                                                placeholder='Content for your blog'
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className='flex justify-end space-x-2'>
                                <Button
                                    type='button'
                                    variant='outline'
                                    className='border-slate-500'
                                >
                                    Schedule
                                </Button>
                                <Button
                                    type='submit'
                                    variant='outline'
                                    className='border-sky-600'
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PostDialog;
