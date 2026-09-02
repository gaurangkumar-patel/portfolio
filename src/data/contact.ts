export interface ContactLink {
  label: string;
  description: string;
  url: string;
  type: "linkedin" | "github" | "email" | "cv";
  external: boolean;
}

const baseURL = import.meta.env.BASE_URL;

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    description: "Connect professionally or discuss opportunities.",
    url: "https://www.linkedin.com/in/gaurangpatel2326",
    type: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    description: "Review public repositories and engineering work.",
    url: "https://github.com/gaurangkumar-patel",
    type: "github",
    external: true,
  },
  {
    label: "Download CV",
    description: "View the latest Software Engineer · Backend Development CV.",
    url: `${baseURL}documents/Gaurangkumar_Patel_Software_Engineer_CV.pdf`,
    type: "cv",
    external: false,
  },
];

// Add only after the email is verified against v4.2.
export const confirmedEmail: string | null = "gaurangpatel3056@gmail.com";
