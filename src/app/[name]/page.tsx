"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { personas } from "../constants";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, User, Bot, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { ComponentPropsWithoutRef } from "react";

const HiteshSirPage = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [selectedPersona] = useState(
    name == "hitesh-chaudhary" ? personas[0] : personas[1]
  );
  const [allChats, setAllChats] = useState<any[]>([
    { User: "Hii", model: "Hey there! How are you?" },
  ]);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const image = name == "hitesh-chaudhary" ? "/hiteshsir.jpeg" : "/piysuh.jpeg";

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allChats]);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    const userMessage = { User: text, model: "" };
    setAllChats((prev) => [...prev, userMessage]);
    setText("");
    setLoading(true);

    try {
      const res = await axios.post(
        `https://persona-ai-genai.vercel.app/api/gemini`,

        //  const res = await axios.post(`http://localhost:3000/api/gemini`,
        {
          historyChat: allChats,
          recentMessage: text,
          teacherDetails: selectedPersona,
        }
      );

      setAllChats((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1 ? { ...msg, model: res.data.data } : msg
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="mb-6 border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={image} />
                  <AvatarFallback className="bg-indigo-500 text-white">
                    {name?.toString().charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {name
                  ?.toString()
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </CardTitle>

              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 flex items-center gap-2"
              >
                <span className="bg-indigo-500 text-white px-1 py-0.5 rounded text-xs font-semibold">
                  HI
                </span>
                <span className="bg-indigo-500 text-white px-1 py-0.5 rounded text-xs font-semibold">
                  EN
                </span>
                <span>AI Assistant</span>
              </Button>
            </div>

            {/* Status + Language */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-sm text-green-600">Online</span>
              </div>
              <span className="text-sm text-gray-500">
                Hindi / English chat available
              </span>
            </div>
          </CardHeader>
        </Card>

        {/* Chat */}
        <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm">
          <CardContent className="p-0">
            <ScrollArea className="h-96 p-4">
              <div className="space-y-4">
                {allChats.map((msg, index) => (
                  <React.Fragment key={index}>
                    {/* User Message */}
                    <div className="flex justify-end items-start gap-2">
                      <div className="bg-indigo-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs shadow">
                        {msg.User}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-indigo-100 text-indigo-600">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Bot Message */}
                    {msg.model && (
                      <div className="flex items-start gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={image} />
                          <AvatarFallback className="bg-gray-100 text-gray-600">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs shadow">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              code({
                                inline,
                                className,
                                children,
                                ...props
                              }: ComponentPropsWithoutRef<"code"> & {
                                inline?: boolean;
                              }) {
                                const match = /language-(\w+)/.exec(
                                  className || ""
                                );
                                return !inline && match ? (
                                  <SyntaxHighlighter
                                    style={tomorrow as any}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                  >
                                    {String(children).replace(/\n$/, "")}
                                  </SyntaxHighlighter>
                                ) : (
                                  <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          >
                            {msg.model}
                          </ReactMarkdown>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <div ref={endRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="border-t p-3 bg-gray-50">
              <div className="flex gap-2">
                <Input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 rounded-x border-gray-300 focus:border-indigo-400"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={!text.trim() || loading}
                  className="rounded-x bg-indigo-500 hover:bg-indigo-600"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HiteshSirPage;
