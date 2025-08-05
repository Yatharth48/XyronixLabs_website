"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, Briefcase, MapPin, Clock, Building2, DollarSign, GraduationCap, Mail, Users, ChevronRight, ArrowUpRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

type HiringTeamMember = {
  name: string;
  role: string;
};

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  company: string;
  contactEmail: string;
  hiringTeam: HiringTeamMember[];
  applicants: number;
  views: number;
  applicationDeadline: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: string;
  portfolio: string;
  linkedin: string;
  coverLetter: string;
  agree: boolean;
  jobTitle: string;
  jobId: number;
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>();
  const [selectedType, setSelectedType] = useState<string | undefined>();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [applicationProgress, setApplicationProgress] = useState(0);
  const [activeFormStep, setActiveFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: '',
    portfolio: '',
    linkedin: '',
    coverLetter: '',
    agree: false,
    jobTitle: '',
    jobId: 0
  });

  // Fetch jobs from JSON
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/jobs.json');
        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (selectedJob) {
      setFormData(prev => ({
        ...prev,
        jobTitle: selectedJob.title,
        jobId: selectedJob.id
      }));
    }
  }, [selectedJob]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = !selectedDepartment || selectedDepartment === "all-departments" || job.department === selectedDepartment;
    const matchesType = !selectedType || selectedType === "all-types" || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const handleNextStep = () => {
    if (activeFormStep < 3) {
      setActiveFormStep(activeFormStep + 1);
      setApplicationProgress((activeFormStep + 1) * 33.33);
    }
  };

  const handlePrevStep = () => {
    if (activeFormStep > 1) {
      setActiveFormStep(activeFormStep - 1);
      setApplicationProgress((activeFormStep - 1) * 33.33);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your Google Apps Script Web App URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxX9GQ-U0DnqOtQSi75j72WLeOwnyo6tWlSlb173KJjjjbqAZTWdLGdW2-IzgrkCJnh/exec';

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors mode, we can't check the response status
      // But we can assume it worked if we didn't get an error
      setIsApplyDialogOpen(false);
      setActiveFormStep(1);
      setApplicationProgress(0);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: '',
        portfolio: '',
        linkedin: '',
        coverLetter: '',
        agree: false,
        jobTitle: selectedJob?.title || '',
        jobId: selectedJob?.id || 0
      });

      toast({
        title: "Application Submitted!",
        description: "Your application has been successfully submitted.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-16">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl animate-float-delay"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl animate-float-delay-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build the future with us. Discover exciting opportunities and be part of something extraordinary.
          </p>
        </div>

        {/* Search and Filters - Glass Panel */}
        <div className="bg-gray-900/80 rounded-2xl p-6 shadow-xl mb-8 border border-gray-800 backdrop-blur-sm">
          <h2 className="text-lg font-semibold mb-4 text-white">Find your perfect role</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search by job title, keywords, or skills..."
                className="pl-10 bg-gray-800 h-12 text-white placeholder-gray-500 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full md:w-[200px] h-12 bg-gray-800 border-gray-700 text-white hover:bg-gray-800/80">
                <SelectValue placeholder="All Departments" className="placeholder-gray-500" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all-departments" className="hover:bg-gray-700 focus:bg-gray-700">All Departments</SelectItem>
                <SelectItem value="Engineering" className="hover:bg-gray-700 focus:bg-gray-700">Engineering</SelectItem>
                <SelectItem value="Design" className="hover:bg-gray-700 focus:bg-gray-700">Design</SelectItem>
                <SelectItem value="Operations" className="hover:bg-gray-700 focus:bg-gray-700">Operations</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-[200px] h-12 bg-gray-800 border-gray-700 text-white hover:bg-gray-800/80">
                <SelectValue placeholder="All Job Types" className="placeholder-gray-500" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all-types" className="hover:bg-gray-700 focus:bg-gray-700">All Types</SelectItem>
                <SelectItem value="Full-time" className="hover:bg-gray-700 focus:bg-gray-700">Full-time</SelectItem>
                <SelectItem value="Contract" className="hover:bg-gray-700 focus:bg-gray-700">Contract</SelectItem>
                <SelectItem value="Part-time" className="hover:bg-gray-700 focus:bg-gray-700">Part-time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'} found
            </p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500/50 group hover:border-l-purple-500 cursor-pointer bg-gray-900/80 border-gray-800 hover:bg-gray-900/60 backdrop-blur-sm"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <img src="/icon.png" alt="icon" className="h-10 w-10" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">{job.company}</span>
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">{job.title}</h2>
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
                            New
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                        <Briefcase className="h-3 w-3 text-purple-400" />
                        {job.department}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                        <MapPin className="h-3 w-3 text-purple-400" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                        <Clock className="h-3 w-3 text-purple-400" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                        <DollarSign className="h-3 w-3 text-purple-400" />
                        {job.salary}
                      </Badge>
                    </div>

                    <p className="text-gray-400 line-clamp-2 mb-4">{job.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Posted: {job.postedDate}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                    <Button
                      variant="outline"
                      className="group-hover:border-purple-500 group-hover:text-purple-400 bg-transparent border-gray-700 text-white hover:bg-gray-800/80"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      className="group-hover:bg-purple-500/90 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-500/90 hover:to-purple-600/90 text-white shadow-lg shadow-purple-500/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                        setIsApplyDialogOpen(true);
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center bg-gray-900/80 border-gray-800 backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center gap-4">
                <Search className="h-12 w-12 text-gray-500/50" />
                <h3 className="text-xl font-medium text-white">No jobs found</h3>
                <Button
                  variant="outline"
                  className="text-white border-gray-700 hover:bg-gray-800/80 hover:text-white"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDepartment(undefined);
                    setSelectedType(undefined);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            </Card>
          )}
        </div>

        {/* Job Details Dialog */}
        <Dialog open={selectedJob !== null && !isApplyDialogOpen} onOpenChange={() => setSelectedJob(null)}>
          {selectedJob && (
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-900 border-gray-800">
              <DialogHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <img src="/logo/Group8(1).png" alt="icon" className="h-10 w-10" />
                  </div>

                  <div>
                    <DialogTitle className="text-2xl text-left text-white">{selectedJob.title}</DialogTitle>
                    <DialogDescription className="text-purple-400 text-left">{selectedJob.company}</DialogDescription>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                        <MapPin className="h-3 w-3 text-purple-400" />
                        {selectedJob.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                        <Clock className="h-3 w-3 text-purple-400" />
                        {selectedJob.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 bg-gray-800 text-gray-300 border-gray-700">
                        <DollarSign className="h-3 w-3 text-purple-400" />
                        {selectedJob.salary}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <Separator className="my-4 bg-gray-800" />

              <div className="space-y-8">
                {/* Job Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700">
                    <p className="text-sm text-gray-500">Posted</p>
                    <p className="font-medium text-white">{selectedJob.postedDate}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-800/80 rounded-xl p-6 space-y-4 border border-gray-700">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
                    <Mail className="h-5 w-5 text-purple-400" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <a
                        href={`mailto:${selectedJob.contactEmail}`}
                        className="hover:underline text-purple-400 flex items-center gap-1"
                      >
                        {selectedJob.contactEmail}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-gray-500" />
                        <h4 className="font-medium text-white">Hiring Team</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {selectedJob.hiringTeam.map((member, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/60 transition-colors border border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                              <span className="font-medium text-purple-400">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-white">{member.name}</div>
                              <div className="text-sm text-gray-500">{member.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-6 text-white">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">About the Role</h3>
                    <p className="text-gray-400">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Requirements</h3>
                    <ul className="space-y-2 text-gray-400">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Benefits</h3>
                    <ul className="space-y-2 text-gray-400">
                      {selectedJob.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedJob(null)}
                  className="border-gray-700 text-white hover:bg-gray-800/80"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setIsApplyDialogOpen(true);
                  }}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-500/90 hover:to-purple-600/90 text-white shadow-lg shadow-purple-500/20"
                >
                  Apply for this Position
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>

        {/* Application Dialog */}
        <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
          {selectedJob && (
            <DialogContent className="max-w-2xl rounded-2xl bg-gray-900 border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-white">Apply for {selectedJob.title}</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Complete your application in just a few steps
                </DialogDescription>
                <div className="pt-4">
                  <Progress value={applicationProgress} className="h-2 bg-gray-800/80" />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Step {activeFormStep} of 3</span>
                    <span>{Math.round(applicationProgress)}% complete</span>
                  </div>
                </div>
              </DialogHeader>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {activeFormStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="font-medium text-white">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-400">First Name*</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-400">Last Name*</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-400">Email*</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-400">Phone Number*</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {activeFormStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-medium text-white">Professional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-gray-400">Resume Link*</Label>
                      <Input
                        id="resume"
                        type="url"
                        placeholder="https://drive.google.com/file/d/your-resume"
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                        value={formData.resume}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-gray-500">
                        Provide a link to your resume (Google Drive, Dropbox, etc.)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolio" className="text-gray-400">Portfolio Link (Optional)</Label>
                      <Input
                        id="portfolio"
                        type="url"
                        placeholder="https://yourportfolio.com"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                      />
                      <p className="text-sm text-gray-500">
                        Link to your portfolio website or project samples
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin" className="text-gray-400">LinkedIn Profile (Optional)</Label>
                      <Input
                        id="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {activeFormStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="font-medium text-white">Final Details</h3>
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter" className="text-gray-400">Cover Letter*</Label>
                      <Textarea
                        id="coverLetter"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        className="min-h-[200px] bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                        required
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="agree"
                        className="mt-1 accent-purple-500 bg-gray-800 border-gray-700"
                        required
                        checked={formData.agree}
                        onChange={handleCheckboxChange}
                      />
                      <Label htmlFor="agree" className="font-normal text-gray-400">
                        I confirm that the information provided is accurate and complete.*
                      </Label>
                    </div>
                  </div>
                )}

                <DialogFooter className="flex flex-col sm:flex-row gap-3">
                  {activeFormStep > 1 && (
                    <Button
                      variant="outline"
                      type="button"
                      onClick={handlePrevStep}
                      className="border-gray-700 text-white hover:bg-gray-800/80"
                      disabled={isSubmitting}
                    >
                      Back
                    </Button>
                  )}
                  <div className="flex-1" />
                  {activeFormStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-500/90 hover:to-purple-600/90 text-white shadow-lg shadow-purple-500/20"
                      disabled={isSubmitting}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-500/90 hover:to-purple-600/90 text-white shadow-lg shadow-purple-500/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </DialogFooter>
              </form>
            </DialogContent>
          )}
        </Dialog>
      </div>

      {/* Add these styles for the floating animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out 2s infinite;
        }
        .animate-float-delay-2 {
          animation: float 12s ease-in-out 4s infinite;
        },
                @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(5px); opacity: 1; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out 2s infinite;
        }
        .animate-float-delay-2 {
          animation: float 12s ease-in-out 4s infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 5s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
