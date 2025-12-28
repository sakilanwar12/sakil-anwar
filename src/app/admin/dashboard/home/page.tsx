"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  about: {
    title: string;
    description: string;
    image?: string;
    highlights: string[];
  };
}

export default function HomeManagementPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<HomeData>({
    hero: {
      title: "",
      subtitle: "",
      description: "",
      image: "",
      ctaText: "",
      ctaLink: "",
    },
    about: {
      title: "",
      description: "",
      image: "",
      highlights: ["", "", ""],
    },
  });

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const response = await fetch("/api/home");
      const result = await response.json();
      if (result.success && result.data) {
        setData(result.data);
      }
    } catch (error) {
      toast.error("Failed to load home section data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/home", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Home section updated successfully!");
      } else {
        toast.error("Failed to update home section");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setSaving(false);
    }
  };

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...data.about.highlights];
    newHighlights[index] = value;
    setData({
      ...data,
      about: { ...data.about, highlights: newHighlights },
    });
  };

  const addHighlight = () => {
    setData({
      ...data,
      about: { ...data.about, highlights: [...data.about.highlights, ""] },
    });
  };

  const removeHighlight = (index: number) => {
    const newHighlights = data.about.highlights.filter((_, i) => i !== index);
    setData({
      ...data,
      about: { ...data.about, highlights: newHighlights },
    });
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Home Section</h1>
        <p className="text-muted-foreground">
          Manage your hero and about sections
        </p>
      </div>

      {/* Hero Section */}
      <Card>
        <CardHeader>
          <CardTitle>Hero Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="hero-title">Title</Label>
              <Input
                id="hero-title"
                value={data.hero.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value },
                  })
                }
                placeholder="Hi, I'm Your Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Input
                id="hero-subtitle"
                value={data.hero.subtitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, subtitle: e.target.value },
                  })
                }
                placeholder="Full Stack Developer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hero-description">Description</Label>
            <Textarea
              id="hero-description"
              value={data.hero.description}
              onChange={(e) =>
                setData({
                  ...data,
                  hero: { ...data.hero, description: e.target.value },
                })
              }
              placeholder="Brief introduction..."
              rows={3}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="hero-image">Image URL</Label>
              <Input
                id="hero-image"
                value={data.hero.image}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, image: e.target.value },
                  })
                }
                placeholder="/images/hero.jpg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-cta-text">CTA Text</Label>
              <Input
                id="hero-cta-text"
                value={data.hero.ctaText}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, ctaText: e.target.value },
                  })
                }
                placeholder="View My Work"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-cta-link">CTA Link</Label>
              <Input
                id="hero-cta-link"
                value={data.hero.ctaLink}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, ctaLink: e.target.value },
                  })
                }
                placeholder="#projects"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle>About Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="about-title">Title</Label>
            <Input
              id="about-title"
              value={data.about.title}
              onChange={(e) =>
                setData({
                  ...data,
                  about: { ...data.about, title: e.target.value },
                })
              }
              placeholder="About Me"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about-description">Description</Label>
            <Textarea
              id="about-description"
              value={data.about.description}
              onChange={(e) =>
                setData({
                  ...data,
                  about: { ...data.about, description: e.target.value },
                })
              }
              placeholder="Tell your story..."
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about-image">Image URL</Label>
            <Input
              id="about-image"
              value={data.about.image}
              onChange={(e) =>
                setData({
                  ...data,
                  about: { ...data.about, image: e.target.value },
                })
              }
              placeholder="/images/about.jpg"
            />
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Highlights</Label>
              <Button onClick={addHighlight} variant="outline" size="sm">
                Add Highlight
              </Button>
            </div>
            {data.about.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={highlight}
                  onChange={(e) => updateHighlight(index, e.target.value)}
                  placeholder={`Highlight ${index + 1}`}
                />
                <Button
                  onClick={() => removeHighlight(index)}
                  variant="destructive"
                  size="icon"
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving} size="lg">
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Changes
        </Button>
      </div>
    </div>
  );
}
