import { Feature } from "@/types";
import TextAreaInput from "./TextAreaInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import PrimaryButton from "./PrimaryButton";
import {usePage} from "@inertiajs/react";
import { can } from "@/helpers";

export default function NewCommentForm({feature}: {feature: Feature}) {
    const user = usePage().props.auth.user;
    
    const {data, setData, post, processing} = useForm({
        comment: ''
    })

    const createComment: FormEventHandler = (event) => {
        event.preventDefault();
        post(route('comment.store', feature.id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => setData('comment', '')
        })
    }

    if (!can(user, 'manage_comments')) {
        return (
                <div className="text-center text-green-600">
                    You don't have the permission to leave comments!
                </div>
        );
    }

    return (
        <form onSubmit={createComment} className="flex items-center py-2 rounded-lg bg-gray-50 dark:bg-gray-900 mb-4">
                <TextAreaInput
                    rows={1}
                    value={data.comment}
                    onChange={e => setData('comment', e.target.value)}
                    className="mt-1 block w-full mr-4"
                    placeholder="Add Your Comment Here"
                ></TextAreaInput>
                <PrimaryButton disabled={processing}>Comment</PrimaryButton>
        </form>
    );
}