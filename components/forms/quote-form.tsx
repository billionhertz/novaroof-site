"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const buildingTypes = [
  "Office Building",
  "Retail/Shopping Center",
  "Warehouse/Distribution",
  "Manufacturing/Industrial",
  "Church/Religious",
  "Healthcare/Medical",
  "Restaurant/Food Service",
  "Education/School",
  "Multi-Family Residential",
  "Other",
];

const roofSizes = [
  "Under 5,000 sq ft",
  "5,000 - 10,000 sq ft",
  "10,000 - 25,000 sq ft",
  "25,000 - 50,000 sq ft",
  "50,000 - 100,000 sq ft",
  "Over 100,000 sq ft",
];

const currentRoofTypes = [
  "TPO",
  "EPDM (Rubber)",
  "PVC",
  "Metal",
  "Built-Up (BUR)",
  "Modified Bitumen",
  "Spray Foam",
  "Unknown",
  "Other",
];

const roofAges = [
  "Less than 5 years",
  "5 - 10 years",
  "10 - 15 years",
  "15 - 20 years",
  "Over 20 years",
  "Unknown",
];

const serviceInterests = [
  { id: "maintenance", label: "Roof Maintenance" },
  { id: "repair", label: "Roof Repair" },
  { id: "replacement", label: "Roof Replacement" },
  { id: "restoration", label: "Roof Restoration/Coating" },
  { id: "inspection", label: "Roof Inspection" },
  { id: "consulting", label: "Roof Consulting" },
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "VA",
    zip: "",
    buildingType: "",
    roofSize: "",
    currentRoofType: "",
    roofAge: "",
    services: [] as string[],
    issues: "",
  });

  const totalSteps = 4;

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.zip;
      case 3:
        return formData.services.length > 0;
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "quote", ...formData }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">
          Quote Request Received!
        </h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in NovaRoof. One of our roofing specialists will contact you within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                i + 1 <= step
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`h-1 w-full min-w-[2rem] sm:min-w-[4rem] mx-2 rounded ${
                  i + 1 < step ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
            <p className="text-sm text-muted-foreground">How can we reach you?</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Name <span className="text-destructive">*</span>
              </label>
              <Input
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Company
              </label>
              <Input
                value={formData.company}
                onChange={(e) => updateFormData("company", e.target.value)}
                placeholder="Company name"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Phone <span className="text-destructive">*</span>
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Property Info */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Property Information</h3>
            <p className="text-sm text-muted-foreground">Tell us about your building.</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Property Address <span className="text-destructive">*</span>
            </label>
            <Input
              value={formData.address}
              onChange={(e) => updateFormData("address", e.target.value)}
              placeholder="123 Main Street"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                City <span className="text-destructive">*</span>
              </label>
              <Input
                value={formData.city}
                onChange={(e) => updateFormData("city", e.target.value)}
                placeholder="City"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">State</label>
              <Input value="VA" disabled className="bg-muted" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                ZIP <span className="text-destructive">*</span>
              </label>
              <Input
                value={formData.zip}
                onChange={(e) => updateFormData("zip", e.target.value)}
                placeholder="12345"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Building Type</label>
              <Select
                value={formData.buildingType}
                onValueChange={(value) => updateFormData("buildingType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {buildingTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Approximate Roof Size
              </label>
              <Select
                value={formData.roofSize}
                onValueChange={(value) => updateFormData("roofSize", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {roofSizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Roof Details */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Roof Details</h3>
            <p className="text-sm text-muted-foreground">
              Tell us about your current roof and what you need.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Current Roof Type</label>
              <Select
                value={formData.currentRoofType}
                onValueChange={(value) => updateFormData("currentRoofType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {currentRoofTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Roof Age</label>
              <Select
                value={formData.roofAge}
                onValueChange={(value) => updateFormData("roofAge", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select age" />
                </SelectTrigger>
                <SelectContent>
                  {roofAges.map((age) => (
                    <SelectItem key={age} value={age}>
                      {age}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Services Interested In <span className="text-destructive">*</span>
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceInterests.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={formData.services.includes(service.id)}
                    onCheckedChange={() => toggleService(service.id)}
                  />
                  <label
                    htmlFor={service.id}
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {service.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Describe Any Current Issues
            </label>
            <Textarea
              value={formData.issues}
              onChange={(e) => updateFormData("issues", e.target.value)}
              placeholder="Leaks, ponding water, age concerns, etc."
              rows={4}
            />
          </div>
        </div>
      )}

      {/* Step 4: Review */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Review Your Request</h3>
            <p className="text-sm text-muted-foreground">
              Please confirm your information before submitting.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Contact</h4>
                <p className="text-foreground">{formData.name}</p>
                {formData.company && <p className="text-foreground">{formData.company}</p>}
                <p className="text-foreground">{formData.email}</p>
                <p className="text-foreground">{formData.phone}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Property</h4>
                <p className="text-foreground">{formData.address}</p>
                <p className="text-foreground">
                  {formData.city}, {formData.state} {formData.zip}
                </p>
                {formData.buildingType && (
                  <p className="text-foreground">{formData.buildingType}</p>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Roof Details</h4>
                {formData.roofSize && <p className="text-foreground">{formData.roofSize}</p>}
                {formData.currentRoofType && (
                  <p className="text-foreground">{formData.currentRoofType}</p>
                )}
                {formData.roofAge && <p className="text-foreground">{formData.roofAge}</p>}
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Services</h4>
                <ul className="text-foreground">
                  {formData.services.map((serviceId) => (
                    <li key={serviceId}>
                      {serviceInterests.find((s) => s.id === serviceId)?.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {formData.issues && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Current Issues</h4>
              <p className="text-foreground">{formData.issues}</p>
            </div>
          )}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 1}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        {step < totalSteps ? (
          <Button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canProceed()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        )}
      </div>
    </div>
  );
}
