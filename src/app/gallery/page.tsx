"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const profiles = [
  { id: 1, name: "Isabella", location: "New York", specialty: "Socialite", bio: "An art connoisseur and conversationalist, Isabella thrives in sophisticated settings.", imageId: "profile-1" },
  { id: 2, name: "Julian", location: "London", specialty: "Adventurer", bio: "A world traveler and thrill-seeker, Julian is the perfect companion for any adventure.", imageId: "profile-2" },
  { id: 3, name: "Sophia", location: "Paris", specialty: "Muse", bio: "With a passion for fashion and culture, Sophia brings elegance and charm to every occasion.", imageId: "profile-3" },
  { id: 4, name: "Chloe", location: "New York", specialty: "Intellectual", bio: "A sharp mind with a love for deep conversation, Chloe is as engaging as she is beautiful.", imageId: "profile-4" },
  { id: 5, name: "Liam", location: "London", specialty: "Gentleman", bio: "The epitome of class and discretion, Liam is a true gentleman for any formal event.", imageId: "profile-5" },
  { id: 6, name: "Olivia", location: "Paris", specialty: "Socialite", bio: "Charismatic and vivacious, Olivia is the life of any party and a delight to be around.", imageId: "profile-6" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredProfiles = profiles.filter(
    (profile) => filter === "All" || profile.location === filter
  );

  const locations = ["All", "New York", "London", "Paris"];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold md:text-6xl">Our Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Meet our exclusive selection of companions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <h2 className="mb-4 font-headline text-3xl font-semibold">Filter by Location</h2>
          <RadioGroup value={filter} onValueChange={setFilter} className="space-y-2">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <RadioGroupItem value={location} id={location.toLowerCase()} />
                <Label htmlFor={location.toLowerCase()} className="font-body text-base">{location}</Label>
              </div>
            ))}
          </RadioGroup>
        </aside>

        <main className="md:col-span-3">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProfiles.map((profile) => {
              const image = PlaceHolderImages.find(p => p.id === profile.imageId);
              return (
                <Card key={profile.id} className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                  <CardHeader className="p-0">
                    {image && (
                      <div className="relative aspect-[2/3]">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="font-headline text-3xl">{profile.name}</CardTitle>
                    <CardDescription className="mt-2 font-body text-muted-foreground">{profile.bio}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
