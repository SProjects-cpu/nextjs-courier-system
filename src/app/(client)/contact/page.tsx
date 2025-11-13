"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contacts").insert(formData);
    if (!error) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", description: "" });
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <Card>
        <CardHeader><CardTitle>Send us a message</CardTitle></CardHeader>
        <CardContent>
          {success && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">Message sent successfully!</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><Label>Name</Label><Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></div>
            <div><Label>Email</Label><Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required /></div>
            <div><Label>Phone</Label><Input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required /></div>
            <div><Label>Message</Label><textarea className="flex min-h-[120px] w-full rounded-md border px-3 py-2" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required /></div>
            <Button type="submit" disabled={loading} className="w-full">{loading ? "Sending..." : "Send Message"}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}