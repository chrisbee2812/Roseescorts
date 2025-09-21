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
  { id: 1, name: "Isabella", imageId: "profile-1" },
  { id: 2, name: "Yui", imageId: "profile-2" },
  { id: 3, name: "Sophia", imageId: "profile-3" },
  { id: 4, name: "Chloe", imageId: "profile-4" },
  { id: 5, name: "Aimee", imageId: "profile-5" },
  { id: 6, name: "Olivia", imageId: "profile-6" },
  { id: 7, name: "Cherry", imageId: "profile-8" },
  { id: 8, name: "Dora", imageId: "profile-9" },
  { id: 9, name: "Sunny", imageId: "profile-10" },
  { id: 10, name: "Denise", imageId: "profile-11" },
  { id: 11, name: "Louise", imageId: "profile-12" },
  { id: 12, name: "Cora", imageId: "profile-13" },
  { id: 13, name: "Flora", imageId: "profile-14" },
  { id: 14, name: "Julie", imageId: "profile-15" },
  { id: 15, name: "Daisy", imageId: "profile-16" },
  { id: 16, name: "Kate", imageId: "profile-17" },
  { id: 17, name: "Ruby", imageId: "profile-7" },
  { id: 18, name: "Sophie", imageId: "profile-18" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredProfiles = profiles.filter(
    (profile) => filter === "All"
  );

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-primary text-5xl font-bold md:text-6xl">Our Gallery</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Meet our exclusive selection of companions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        
        <main className="md:col-span-4">
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
