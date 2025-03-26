
import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Therapist } from '@/store/therapistSlice';

interface Message {
  id: number;
  sender: 'user' | 'therapist';
  text: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  therapist: Therapist;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ therapist }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'therapist',
      text: `Hello! I'm ${therapist.name}. How are you feeling today?`,
      timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: message,
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simulate therapist response after 1-2 seconds
    setTimeout(() => {
      const therapistResponses = [
        "That's really interesting. Could you tell me more about that?",
        "I understand how that might be difficult. How does that make you feel?",
        "Thank you for sharing that with me. Let's explore this further.",
        "I'm here to support you through this. What would help you right now?",
        "That's a common feeling. Many of my clients experience similar thoughts."
      ];
      
      const randomResponse = therapistResponses[Math.floor(Math.random() * therapistResponses.length)];
      
      const therapistReply: Message = {
        id: messages.length + 2,
        sender: 'therapist',
        text: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, therapistReply]);
    }, 1000 + Math.random() * 1000);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[75%] rounded-2xl p-3 ${
                msg.sender === 'user' 
                  ? 'bg-green/10 text-foreground ml-auto' 
                  : 'bg-foreground/5 text-foreground'
              }`}
            >
              {msg.sender === 'therapist' && (
                <div className="font-medium text-sm text-green mb-1">{therapist.name}</div>
              )}
              <p className="text-sm">{msg.text}</p>
              <div className={`text-xs mt-1 ${
                msg.sender === 'user' ? 'text-foreground/50 text-right' : 'text-foreground/50'
              }`}>
                {formatTime(msg.timestamp)}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-foreground/10 p-4">
        <div className="flex items-end gap-2">
          <Button variant="ghost" size="icon" className="rounded-full flex-shrink-0">
            <Paperclip className="h-5 w-5 text-foreground/70" />
          </Button>
          
          <Textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="min-h-10 resize-none"
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          
          <Button variant="ghost" size="icon" className="rounded-full flex-shrink-0">
            <Smile className="h-5 w-5 text-foreground/70" />
          </Button>
          
          <Button 
            onClick={handleSendMessage}
            className="rounded-full bg-green hover:bg-green/90"
            size="icon"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="text-xs text-foreground/50 mt-2 text-center">
          All messages are encrypted and confidential
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
