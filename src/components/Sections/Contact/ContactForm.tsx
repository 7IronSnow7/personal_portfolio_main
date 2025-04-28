import emailjs from '@emailjs/browser';
import React, {FC, memo, useCallback, useEffect,useMemo, useState} from 'react';


interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactForm: FC = memo(() => {
  // Add this useEffect hook to debug environment variables
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      // Add this option to avoid legacy compatibility issues
      blockHeadless: false,
    });
  }, []);

  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      setError(null);

      try{
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        // Check if the environment variables are properly set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

        await emailjs.send(serviceId, templateId,{
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        });
        
        setSuccess(true);
        setData(defaultData);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } catch (err) {
        console.error('Failed to send message:', err);
        setError('Failed to send your message. Please try again later.');
      } finally {
        setLoading(false);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      {success && (
        <div className='rounded-md bg-green-500 bg-opacity-10 p-3 text-sm text-green-500'>
          Your message has been sent successfully!
        </div>
      )}
      {/* Error message */}
      {error && (
        <div className="rounded-md bg-red-500 bg-opacity-10 p-3 text-sm text-red-500">
          {error}
        </div>
      )}
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name}/>
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
        disabled={loading}
        type="submit">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
