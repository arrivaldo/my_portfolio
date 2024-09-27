"use client";
import { useState, useRef } from "react";
import { sendQuestion } from "./actions";

interface Message {
    id: string;
    text: string;
    owner: 'user' | 'bot';
}

export default function ChatPage() {

    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState<Message[]>([{id: '0', text: 'Ask me anything! ', owner: 'bot'}])
    const inputRef = useRef<HTMLInputElement>(null);  // Create a reference for the input field


    async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {

        event.preventDefault();

        const formData = new FormData(event.target);

        setIsLoading(true)

        setMessages(messages => messages.concat({
            id: Math.random().toString(36).slice(2),
            text: formData.get("question") as string,
            owner: "user",
        }))

           // Clear the input field after sending
           if (inputRef.current) {
            inputRef.current.value = "";
        }


        // console.log(formData, formData.get("question"));
        const answer = await sendQuestion(formData.get("question") as string);



        setMessages(messages => messages.concat({
            id: Math.random().toString(36).slice(2),
            text: answer,
            owner: "bot",
        }))
setIsLoading(false);
    }
   

return(
    <section style={{padding: "0 6%", marginTop: '2%'}} className="grid gap-4">
        <article className="grid gap-4 w-full h-320px overflow-y-auto items-start">
            {messages.map((message) => (
                <div key={message.id} className={`p-4 rounded-2xl bg-[#344054] w-fit max-w-[80%] ${message.owner === "user" ? "bg-[#485468] text-right ml-auto rounded-br-none" : "rounded-bl-none"}`}>
                    <p>{message.text}</p>
                </div>
            ))}
        </article>
    <form onSubmit={handleSubmit} className="flex mt-4">
        <input ref={inputRef} className="leading-[2.5rem] rounded-l-lg bg-white text-black flex-1 px-4" type="text" name="question" />
        <button disabled={isLoading} className="disabled:opacity-50 bg-[#344054] leading-[2.5rem] rounded-r-lg px-4" type="submit">
            {isLoading ? "Sending..." : "Send"}
            </button>
    </form>
    </section>
)

}

