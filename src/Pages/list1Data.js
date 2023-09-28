const scholarships = [
  {
    id: 1,
    name: "National Scholarship Portal (NSP)",
    description:
      "A central platform offering various scholarships from different government ministries and departments.",
    state: "national",
    no: "10",
    students: [
      {
        sname: "Rahul singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 2,
    name: "Post-Matric Scholarship Scheme for SC/ST Students",
    description:
      "Provides financial assistance to Scheduled Caste (SC) and Scheduled Tribe (ST) students studying at the post-matriculation.",
    state: "state",
    no: "16",
    students: [
      {
        sname: "Rohan singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 3,
    name: "Central Sector Scheme of Scholarships for College and University Students",
    description:
      "Scholarship for meritorious students from low-income families, providing financial support for higher education.",
    state: "national",
    no: "09",
    students: [
      {
        sname: "Ranjit singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 4,
    name: "Prime Minister's Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
    description:
      "Offers scholarships to the wards of personnel of the Central Armed Police Forces and Assam Rifles.",
    state: "national",
    no: "09",
    students: [
      {
        sname: "Ram singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 5,
    name: "National Means Cum Merit Scholarship (NMMS)",
    description:
      "Scholarship for meritorious students of economically weaker sections to encourage studies at the secondary stage.",
    state: "state",
    no: "09",
    students: [
      {
        sname: "Rajesh singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 6,
    name: "INSPIRE Scholarship",
    description:
      "Administered at the national level by the Department of Science & Technology, Government of India",
    state: "national",
    no: "09",
    students: [
      {
        sname: "Rakesh singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 7,
    name: "Postgraduate Scholarships for Professional Courses for SC/ST Candidates",
    description: "Administered by various state governments for SC/ST students",
    state: "state",
    no: "19",
    students: [
      {
        sname: "Ramesh singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 8,
    name: "Indian Oil Academic Scholarships",
    description:
      "Offered by Indian Oil Corporation Limited (not tied to a specific state)",
    state: "national",
    no: "13",
    students: [
      {
        sname: "Rajnish singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 9,
    name: "AICTE Pragati Scholarship for Girls",
    description:
      "Administered by the All India Council for Technical Education (AICTE) at the national level",
    state: "national",
    no: "09",
    students: [
      {
        sname: "Kamlesh singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 10,
    name: "UGC Scholarships",
    description:
      "Administered at the national level by the University Grants Commission (UGC)",
    state: "national",
    no: "09",
    students: [
      {
        sname: "Mohan singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 11,
    name: "Dr. Ambedkar Post-Matric Scholarship for Economically Backward Classes",
    description:
      "Administered by various state governments for students from economically backward classes",
    state: "state",
    no: "21",
    students: [
      {
        sname: "Sohan singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 12,
    name: "Swami Vivekananda Scholarship (West Bengal)",
    description: "Administered by the Government of West Bengal",
    state: "West Bengal",
    no: "09",
    students: [
      {
        sname: "Akhilesh singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
  {
    id: 13,
    name: "Chief Minister's Scholarship (Delhi)",
    description: "Administered by the Delhi government",
    state: "Delhi",
    no: "11",
    students: [
      {
        sname: "Girdhar singh",
        date: "12-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Nishanta",
        date: "22-08-2023",
        govt: "Punjab",
      },
      {
        sname: "Avinash kumar",
        date: "31-09-2023",
        govt: "Bihar",
      },
      {
        sname: "Rajnish raj",
        date: "17-08-2023",
        govt: "Kerala",
      },
      {
        sname: "Hitesh kumar",
        date: "19-07-2023",
        govt: "Maharashtra",
      },
    ],
  },
];

export default scholarships;
