import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion?: string;
}

export default function ChatbotModal({ isOpen, onClose, initialQuestion = '' }: ChatbotModalProps) {
  const [message, setMessage] = useState(initialQuestion);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here if needed
    console.log('Message submitted:', message);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-lg shadow-xl border w-80 h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-900">Assistant</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Conversation Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="text-sm text-gray-500 text-center">
            Conversation area - Your question and its answer would appear here
          </div>
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t bg-white rounded-b-lg">
          <form onSubmit={handleSubmit}>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
} 