import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  return (
    <form className="space-y-5">
      <Input label="Name" id="name"  />
      <Input label="Email" id="email" />
      <Textarea label="Message" id="message" />
      <Button
        type="button"
        className="w-full px-6 h-11  cursor-pointer text-default-1000 font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity"
      >
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
