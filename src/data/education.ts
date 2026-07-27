export interface EducationRecord {
  qualification: string;
  institution: string;
  period: string;
  location: string;
}

export const educationRecords: EducationRecord[] = [
  {
    qualification: "Master of Science in Information Technology",
    institution: "Sardar Patel University",
    period: "2016–2018",
    location: "India",
  },
  {
    qualification: "Bachelor of Computer Applications",
    institution: "Sardar Patel University",
    period: "2013–2016",
    location: "India",
  },
];
