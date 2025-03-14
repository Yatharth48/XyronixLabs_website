import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Twitter } from "lucide-react"

export default function FoundersPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-[#011529] bg-gradient-to-b from-background to-secondary/20">
      <div className="mb-12 ">
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Meet Our Founders</h1>
        <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
          The visionaries behind our company who are dedicated to innovation and excellence.
        </p>
      </div>

      <div className="grid gap-12 md:gap-16 pl-8 pr-8">
        {founders.map((founder, index) => (
          <div
            key={founder.id}
            className={`grid gap-8 md:grid-cols-2 md:gap-12 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden rounded-xl bg-muted h-[80vh] w-[80vh] ">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <h2 className="text-3xl font-bold">{founder.name}</h2>
              <p className="mt-2 text-xl font-medium text-primary">{founder.role}</p>
              <div className="mt-6 space-y-4 text-muted-foreground text-justify pr-10">
                {founder.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex space-x-4">
                {founder.social.linkedin && (
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${founder.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {founder.social.twitter && (
                  <a
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${founder.name}'s Twitter profile`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {founder.social.github && (
                  <a
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${founder.name}'s GitHub profile`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Sample data - replace with your actual founders information
const founders = [
  {
    id: 1,
    name: "Aditya Seth",
    role: "Founder & Chief Executive Officer",
    image: "/Aditya.jpg",
    bio: [
      "Aditya is a visionary leader with over 15 years of experience in the tech industry. She co-founded our company with a mission to revolutionize how businesses approach digital transformation.",
      "Prior to founding our company, Aditya led product development at several Fortune 500 companies, where she honed her skills in strategic planning and innovation.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/adityaseth936",
      twitter: "https://twitter.com",
      github: "https://github.com/adityaseth0905",
    },
  },
  {
    id: 2,
    name: "Hemaang Mehra",
    role: "Co-Founder & Chief Operations Officer",
    image: "/placeholder.svg?height=600&width=600",
    bio: [
      "Hemaang brings deep technical expertise and innovative thinking to our company. With a background in computer science and artificial intelligence, he leads our engineering team in developing cutting-edge solutions.",
      "His passion for technology and problem-solving has been instrumental in building our platform from the ground up.",
    ],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: null,
    },
  },
  {
    id: 3,
    name: "Dr. Sanjeev Seth",
    role: "Chief Advisor",
    image: "/placeholder.svg?height=600&width=600",
    bio: [
      "Dr. Sanjeev brings deep technical expertise and innovative thinking to our company. With a background in computer science and artificial intelligence, he leads our engineering team in developing cutting-edge solutions.",
      "His passion for technology and problem-solving has been instrumental in building our platform from the ground up.",
    ],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: null,
    },
  }
]

