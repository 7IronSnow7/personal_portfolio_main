import emailjs from '@emailjs/browser';
import React, {FC, memo, useCallback, useEffect, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  // State management
  const defaultData = useMemo(() => ({name: '', email: '', message: ''}), []);
  const [data, setData] = useState<FormData>(defaultData);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [configStatus, setConfigStatus] = useState<string>('');

  // Initialize EmailJS
  useEffect(() => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    // Check configuration
    const missingConfig = [
      !serviceId && 'Service ID is missing',
      !templateId && 'Template ID is missing',
      !publicKey && 'Public Key is missing'
    ].filter(Boolean).join('. ');
    
    if (missingConfig) {
      setConfigStatus(missingConfig);
      return;
    }
    
    // Initialize EmailJS
    try {
      emailjs.init({
        publicKey: publicKey!,
        blockHeadless: false,
      });
      console.log('EmailJS initialized successfully');
    } catch (err) {
      console.error('Failed to initialize EmailJS:', err);
      setConfigStatus('Failed to initialize EmailJS');
    }
  }, []);

  // Handle form field changes
  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData(prev => ({...prev, [name]: value}));
    },
    []
  );

  // Handle form submission
  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      setError(null);

      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        
        // Send email
        const result = await emailjs.send(
          serviceId, 
          templateId, 
          {
            name: data.name,
            email: data.email, // Recipient email
            from_name: data.name,
            to_email: "divan.debruin25@gmail.com",
            reply_to: data.email,
            message: data.message,
          }
        );
        
        console.log('EmailJS response:', result);
        setSuccess(true);
        setData(defaultData);
        
        // Auto-hide success message
        setTimeout(() => setSuccess(false), 5000);
      } catch (err) {
        console.error('Failed to send message:', err);
        setError(
          err instanceof Error
            ? `Failed to send your message: ${err.message}`
            : 'Failed to send your message. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    },
    [data, defaultData]
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSendMessage}>
      {/* Status messages */}
      {process.env.NODE_ENV === 'development' && configStatus && (
        <div className="rounded-md bg-yellow-500 bg-opacity-10 p-3 text-sm text-yellow-500">
          <strong>Debug Info:</strong><br />
          {configStatus}
        </div>
      )}
      
      {success && (
        <div className="rounded-md bg-green-500 bg-opacity-10 p-3 text-sm text-green-500">
          Your message has been sent successfully!
        </div>
      )}
      
      {error && (
        <div className="rounded-md bg-red-500 bg-opacity-10 p-3 text-sm text-red-500">
          {error}
        </div>
      )}
      
      {/* Form fields */}
      <input 
        className={inputClasses} 
        name="name" 
        onChange={onChange} 
        placeholder="Name" 
        required 
        type="text" 
        value={data.name}
      />
      
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={loading || configStatus !== ''}
        type="submit"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;