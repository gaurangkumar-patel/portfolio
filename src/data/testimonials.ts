export interface Testimonial {
  name: string;
  role: string;
  relationship: string;
  date: string;
  quote: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Suresh Nariya",
    role: "Solution Architect",
    relationship: "Managed Gaurang directly",
    date: "August 2026",
    featured: true,
    quote:
      "He is a dedicated developer who learns quickly and delivers quality work. He has a positive attitude and is always willing to learn and improve.",
  },
  {
    name: "Dhaval Sisodiya",
    role: "Senior Software Developer",
    relationship: "Managed Gaurang directly",
    date: "August 2026",
    quote:
      "Having worked closely with Gaurang, I have seen his growth and dedication firsthand. He possesses a rare combination of strong problem-solving skills and a strict focus on standard engineering processes. He is reliable, detail-oriented, and handles challenges with a calm, logical approach. I strongly recommend him.",
  },
  {
    name: "Namrata Patel",
    role: "Software Engineer",
    relationship: "Worked with Gaurangkumar at E2logy on different teams",
    date: "July 2026",
    quote:
      "Gaurang is a highly skilled and dependable PHP and Laravel developer with strong expertise in backend development, REST APIs, MySQL, application architecture, debugging and problem-solving. He consistently wrote clean, maintainable and scalable code while ensuring that technical solutions aligned with business requirements and user needs.",
  },
  {
    name: "Kerul Shah",
    role: "Senior Software Developer",
    relationship: "Worked with Gaurangkumar at E2logy",
    date: "July 2026",
    quote:
      "He is a knowledgeable developer who is always focused on delivering quality work. I appreciated how calmly he handled challenges and his willingness to learn and improve with every project.",
  },
  {
    name: "Jason Kung",
    role: "Co-Founder, FAM SG",
    relationship: "Professional collaborator",
    date: "May 2026",
    quote:
      "Working with Gaurang, I have been consistently impressed by his sharp attention to detail and foresight. He combines critical thinking with sound decision-making, and his empathy allows him to bridge gaps effectively and deliver meaningful impact.",
  },
  {
    name: "Chintan Vekariya",
    role: "Senior Software Engineer",
    relationship: "Former technical mentor",
    date: "June 2025",
    quote:
      "Gaurang is a talented and reliable software engineer with strong problem-solving skills and a collaborative attitude. He consistently delivers high-quality work, contributes valuable insights and supports team success.",
  },
  {
    name: "Dadhaniya Somin",
    role: "Full-Stack Engineer",
    relationship: "Worked alongside Gaurangkumar at E2logy",
    date: "June 2025",
    quote:
      "Gaurang was a reliable and supportive senior who consistently led by example. His knowledge in full-stack development, problem-solving skills and ability to adapt to new challenges made him a valuable asset to the team.",
  },
  {
    name: "Happy Christian",
    role: "Software Engineer",
    relationship: "Worked with Gaurangkumar on the same team",
    date: "June 2025",
    quote:
      "Gaurang demonstrates a deep understanding of core PHP and modern frameworks such as Laravel and Yii2. His ability to integrate complex APIs, design scalable database structures and deliver secure, performance-optimised backend systems consistently impressed me.",
  },
  {
    name: "Gunjan Prajapati",
    role: "Delivery Manager",
    relationship: "Former colleague",
    date: "June 2025",
    quote:
      "Gaurang is a talented Laravel developer with solid experience in React.js. He consistently delivers clean, efficient code and builds scalable, user-friendly applications. A great team player and problem-solver.",
  },
];
