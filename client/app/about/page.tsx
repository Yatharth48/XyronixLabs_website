import Image from "next/image"
import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from "@mui/icons-material/Email";

export default function FoundersPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-[#011529] bg-gradient-to-b from-background to-secondary/20">
      <div className="mb-12 ">
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Meet Our Founders</h1>
        <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
          The visionaries behind our company who are dedicated to innovation and excellence.
        </p>
      </div>

      <div className="grid gap-12 md:gap-16 pl-8 pr-5">
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
                    <LinkedInIcon className="h-5 w-5" />
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
                    <TwitterIcon className="h-5 w-5" />
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
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                )}
                {founder.social.mail && (
                  <a
                    href={founder.social.mail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${founder.name}'s GitHub profile`}
                  >
                    <EmailIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-12 ">
        <h1 className="mt-6 text-4xl font-bold tracking-wide pt-8 text-center sm:text-5xl md:text-6xl">Meet Our Team</h1>
      </div>
      <div className="grid gap-12 md:gap-16 pl-8 pr-5">
        {founders.map((team, index) => (
          <div
            key={team.id}
            className={`grid gap-8 md:grid-cols-2 md:gap-12 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden rounded-xl bg-muted h-[80vh] w-[80vh] ">
                <Image
                  src={team.image || "/placeholder.svg"}
                  alt={team.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <h2 className="text-3xl font-bold">{team.name}</h2>
              <p className="mt-2 text-xl font-medium text-primary">{team.role}</p>
              <div className="mt-6 space-y-4 text-muted-foreground text-justify pr-10">
                {team.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex space-x-4">
                {team.social.linkedin && (
                  <a
                    href={team.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${team.name}'s LinkedIn profile`}
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                )}
                {team.social.twitter && (
                  <a
                    href={team.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${team.name}'s Twitter profile`}
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                )}
                {team.social.github && (
                  <a
                    href={team.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${team.name}'s GitHub profile`}
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                )}
                {team.social.mail && (
                  <a
                    href={team.social.mail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${team.name}'s GitHub profile`}
                  >
                    <EmailIcon className="h-5 w-5" />
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


const founders = [
  {
    id: 1,
    name: "Aditya Seth",
    role: "Founder & Chief Executive Officer",
    image: "/Aditya.jpg",
    bio: [
      "Aditya is a tech entrepreneur and innovator, specializing in AI, IoT, Robotics, and Networking. As the Founder & CEO of Xyronix Labs, he leads cutting-edge research and development in the Internet of Robotic Things (IoRT).",
      "He also serves as the Deputy CEO at Business Press India, COO at Shambhavi Techno Consultancy, and COO at Novatech Scientifics & Informatics. His leadership spans multiple industries, focusing on AI-driven automation, backend systems, and software engineering.",
      "With expertise in building AI-powered solutions, Aditya has developed innovations such as a Fire Early Warning and Supression System. He is passionate about driving technological advancements to enhance safety, efficiency, and innovation.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/adityaseth936",
      twitter: null,
      github: "https://github.com/adityaseth0905",
      mail: "mailto:aditya@xyronixlabs.com",
    },
  },
  {
    id: 2,
    name: "Hemaang Mehra",
    role: "Co-Founder & Chief Operations Officer",
    image: "/placeholder.svg?height=600&width=600",
    bio: [
      "Hemaang brings deep technical expertise and innovative thinking to our company. With a background in Electronics and Communication Engineering with specialization in artificial intelligence, he leads our company's operations.",
      "His passion for technology and problem-solving has been instrumental in building our platform from the ground up.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/hemaang-mehra",
      twitter: null,
      github: null,
      mail: "mailto:hemaang@xyronixlabs.com",
    },
  },
  
]

const team = [
  {
    id: 1,
    name: "Aditya Seth",
    role: "Founder & Chief Executive Officer",
    image: "/Aditya.jpg",
    bio: [
      "Aditya is a tech entrepreneur and innovator, specializing in AI, IoT, Robotics, and Networking. As the Founder & CEO of Xyronix Labs, he leads cutting-edge research and development in the Internet of Robotic Things (IoRT).",
      "He also serves as the Deputy CEO at Business Press India, COO at Shambhavi Techno Consultancy, and COO at Novatech Scientifics & Informatics. His leadership spans multiple industries, focusing on AI-driven automation, backend systems, and software engineering.",
      "With expertise in building AI-powered solutions, Aditya has developed innovations such as a Fire Early Warning and Supression System. He is passionate about driving technological advancements to enhance safety, efficiency, and innovation.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/adityaseth936",
      twitter: null,
      github: "https://github.com/adityaseth0905",
      mail: "mailto:aditya@xyronixlabs.com",
    },
  },
  {
    id: 2,
    name: "Hemaang Mehra",
    role: "Co-Founder & Chief Operations Officer",
    image: "/placeholder.svg?height=600&width=600",
    bio: [
      "Hemaang brings deep technical expertise and innovative thinking to our company. With a background in Electronics and Communication Engineering with specialization in artificial intelligence, he leads our company's operations.",
      "His passion for technology and problem-solving has been instrumental in building our platform from the ground up.",
    ],
    social: {
      linkedin: "https://linkedin.com/in/hemaang-mehra",
      twitter: null,
      github: null,
      mail: "mailto:hemaang@xyronixlabs.com",
    },
  },
  
]