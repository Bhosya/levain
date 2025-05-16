import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, ThumbsUp, MessagesSquare } from "lucide-react";

interface RatingCategory {
  name: string;
  label: string;
  value: number;
}

const FeedbackForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [ratingCategories, setRatingCategories] = useState<RatingCategory[]>([
    { name: "ambience", label: "Ambience", value: 0 },
    { name: "service", label: "Service", value: 0 },
    { name: "food", label: "Food", value: 0 },
    { name: "beverage", label: "Beverage", value: 0 },
    { name: "valueForMoney", label: "Value for Money", value: 0 },
  ]);
  const [followUp, setFollowUp] = useState(false);

  const handleRatingChange = (categoryIndex: number, newValue: number) => {
    const updatedRatings = [...ratingCategories];
    updatedRatings[categoryIndex].value = newValue;
    setRatingCategories(updatedRatings);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      visitDate: formData.get("visitDate")?.toString() || "",
      suggestions: formData.get("suggestions")?.toString() || "",
      followUp: followUp ? "Yes" : "No",
      ...Object.fromEntries(
        ratingCategories.map((cat) => [cat.name, cat.value.toString()])
      ),
      timestamp: new Date().toISOString(),
    };

    console.log("Submitting data:", data);

    try {
      const res = await fetch(
        "https://api.sheetbest.com/sheets/b47204f1-e19b-4b7d-97d8-b96fe1f79d92",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! We appreciate your time.",
      });

      // Reset form
      const updatedRatings = ratingCategories.map((cat) => ({
        ...cat,
        value: 0,
      }));
      setRatingCategories(updatedRatings);
      setFollowUp(false);
      form.reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission Failed",
        description:
          "There was a problem submitting your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to render the stars for rating
  const renderStars = (categoryIndex: number) => {
    const stars = [];
    const category = ratingCategories[categoryIndex];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          type="button"
          key={i}
          onClick={() => handleRatingChange(categoryIndex, i)}
          className={`text-2xl transition-colors ${
            i <= category.value ? "text-levain-brown" : "text-gray-300"
          } hover:text-levain-brown focus:outline-none`}
          aria-label={`Rate ${category.label} ${i} out of 5 stars`}
        >
          <Star
            className={i <= category.value ? "fill-levain-brown" : ""}
            size={24}
          />
        </button>
      );
    }

    return stars;
  };

  return (
    <section
      id="feedback"
      className="cafe-section relative overflow-hidden w-full"
    >
      {/* Textured background with feedback theme - full width */}
      <div className="absolute inset-0 w-full h-full bg-levain-beige/50 opacity-70 z-0">
        <div className="absolute inset-0 w-full h-full bg-texture opacity-10"></div>
        <div className="absolute inset-0 w-full h-full bg-paper opacity-10"></div>
      </div>

      {/* Feedback-themed ornaments - positioned for edge-to-edge design */}
      <div className="absolute top-16 left-12 opacity-10 z-0 transform -rotate-6">
        <Star size={120} className="text-levain-brown fill-levain-brown/30" />
      </div>
      <div className="absolute bottom-20 right-16 opacity-10 z-0 transform rotate-12">
        <MessageCircle size={100} className="text-levain-brown" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 z-0">
        <ThumbsUp size={80} className="text-levain-brown" />
      </div>
      <div className="absolute bottom-40 left-16 opacity-10 z-0 transform -rotate-12">
        <MessagesSquare size={90} className="text-levain-brown" />
      </div>

      {/* Star rating patterns - extended across width */}
      <div className="absolute top-24 right-40 flex opacity-20">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={24}
            className={
              i < 3
                ? "fill-levain-brown text-levain-brown"
                : "text-levain-brown"
            }
          />
        ))}
      </div>
      <div className="absolute bottom-24 left-40 flex opacity-20">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < 4
                ? "fill-levain-brown text-levain-brown"
                : "text-levain-brown"
            }
          />
        ))}
      </div>

      {/* Extended edge-to-edge background elements */}
      {/* Left side vertical star pattern - expanded to full height */}
      <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-around items-center opacity-5">
        {[...Array(10)].map((_, i) => (
          <Star
            key={i}
            size={i % 2 === 0 ? 24 : 16}
            className={
              i % 3 === 0
                ? "fill-levain-brown text-levain-brown"
                : "text-levain-brown"
            }
          />
        ))}
      </div>

      {/* Right side vertical feedback icons - expanded to full height */}
      <div className="absolute right-0 top-0 bottom-0 w-12 flex flex-col justify-around items-center opacity-5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            {i % 2 === 0 ? (
              <ThumbsUp size={24} className="text-levain-brown mb-2" />
            ) : (
              <MessageCircle size={24} className="text-levain-brown mb-2" />
            )}
            {[...Array(5)].map((_, j) => (
              <Star
                key={`${i}-${j}`}
                size={12}
                className={
                  j < i + 1
                    ? "fill-levain-brown text-levain-brown"
                    : "text-levain-brown"
                }
              />
            ))}
          </div>
        ))}
      </div>

      {/* Horizontal star rating line across full width - expanded to screen width */}
      <div className="absolute top-1/3 left-0 right-0 w-screen h-8 flex justify-around items-center opacity-5">
        {[...Array(40)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={
              i % 5 < 4
                ? "fill-levain-brown text-levain-brown"
                : "text-levain-brown"
            }
          />
        ))}
      </div>

      {/* Bottom decorative pattern - expanded to full width */}
      <div className="absolute bottom-0 left-0 right-0 w-screen h-6 bg-levain-brown/5 flex justify-around items-center">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-levain-brown/10 rounded-full"
          ></div>
        ))}
      </div>

      {/* Added full-width edge decorative elements */}
      <div className="absolute -left-6 top-1/4 transform -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-levain-brown/5 flex items-center justify-center">
          <Star
            size={24}
            className="text-levain-brown/30 fill-levain-brown/30"
          />
        </div>
      </div>
      <div className="absolute -right-6 bottom-1/4 transform translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-levain-brown/5 flex items-center justify-center">
          <ThumbsUp size={24} className="text-levain-brown/30" />
        </div>
      </div>

      {/* Full-width divider lines */}
      <div className="absolute top-2/3 left-0 right-0 w-screen h-px bg-levain-brown/10 z-0"></div>
      <div className="absolute top-1/3 left-0 right-0 w-screen h-px bg-levain-brown/10 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="handwritten-accent">Share Your Experience</span>
            <h2 className="section-title mt-2">Feedback Form</h2>
            <p className="mt-6 text-lg">
              We value your opinion and are constantly working to improve.
              Please take a moment to share your experience with us.
            </p>
          </div>

          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-lg border-levain-brown/20 relative overflow-hidden">
            {/* Subtle star corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
              <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-levain-brown/20 rounded-tl-lg"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-levain-brown/20 rounded-br-lg"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Rating Section */}
              <div className="space-y-6">
                <h3 className="font-playfair text-xl font-medium text-levain-black">
                  How would you rate us?
                </h3>

                {ratingCategories.map((category, index) => (
                  <div
                    key={category.name}
                    className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                  >
                    <Label
                      htmlFor={category.name}
                      className="text-sm font-medium min-w-[140px]"
                    >
                      {category.label}:
                    </Label>
                    <div className="flex space-x-1">{renderStars(index)}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 pt-4 border-t border-levain-brown/20">
                <div>
                  <Label htmlFor="suggestions">
                    Suggestions for improvement:
                  </Label>
                  <Textarea
                    id="suggestions"
                    name="suggestions"
                    placeholder="Please share your thoughts with us..."
                    className="mt-2 input-field"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="mt-2 input-field"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number:</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="mt-2 input-field"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="visitDate">Date of Visit:</Label>
                  <Input
                    id="visitDate"
                    name="visitDate"
                    type="date"
                    className="mt-2 input-field"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="followUp"
                    checked={followUp}
                    onCheckedChange={(checked) =>
                      setFollowUp(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="followUp"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I would like to be contacted about my feedback
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-levain-brown hover:bg-levain-mid-brown text-white px-8 py-2 rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Feedback"
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
