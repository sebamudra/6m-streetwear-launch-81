import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Instagram, Upload, X } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent!", {
      description: "Thanks — we'll reply within 48 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setFile(null);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-graffiti text-5xl md:text-7xl text-primary mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-muted-foreground text-lg">
              Questions, collabs, or just want to say what's up? Hit us up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-secondary/50 rounded-lg p-8 text-center">
                  <p className="text-lg text-foreground font-medium mb-2">
                    Thanks — we'll reply within 48 hours.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  {/* File Upload */}
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                    {file ? (
                      <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-3">
                        <span className="text-sm text-foreground truncate flex-1">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={removeFile}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-dashed border-border hover:border-primary"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Attach File (optional)
                      </Button>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Social Links & Info */}
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-foreground mb-6 uppercase tracking-wider">
                Follow Us
              </h3>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/6m_clothing_brand/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="font-medium">Follow @6M_clothing_brand</span>
              </a>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="text-foreground font-medium">Email:</span>
                </p>
                <a 
                  href="mailto:sixmotorsbrand@gmail.com" 
                  className="font-graffiti text-xl text-primary hover:underline"
                >
                  sixmotorsbrand@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
