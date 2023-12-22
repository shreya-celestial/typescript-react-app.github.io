export interface user {
  id: string;
  name: string;
  personal: {
    address: string;
    mobile: string;
    birthday: string;
  };
  profession: {
    experience: string;
    occupation: string;
  };
  academic: {
    collegeName: string;
    degree: string;
    passoutyear: string;
    addressCollege: string;
  };
  employment: {
    currentCompany: string;
  };
}

export const USERS: user[] = [
  {
    id: "abc1",
    name: "Shreya",
    personal: {
      address: "Delhi",
      mobile: "1234567890",
      birthday: new Date("2000-08-29").toLocaleDateString("en-GB"),
    },
    profession: {
      experience: "1 year",
      occupation: "developer",
    },
    academic: {
      collegeName: "JSS",
      degree: "btech",
      passoutyear: "2022",
      addressCollege: "Noida",
    },
    employment: {
      currentCompany: "Celestial Systems",
    },
  },
  {
    id: "def2",
    name: "Shalini",
    personal: {
      address: "Agra",
      mobile: "0987654321",
      birthday: new Date("2000-06-02").toLocaleDateString("en-GB"),
    },
    profession: {
      experience: "1 year",
      occupation: "developer",
    },
    academic: {
      collegeName: "JSS",
      degree: "Btech",
      passoutyear: "2023",
      addressCollege: "Noida",
    },
    employment: {
      currentCompany: "Celestial Systems",
    },
  },
  {
    id: "ghi3",
    name: "Shlok",
    personal: {
      address: "UP",
      mobile: "1234509876",
      birthday: new Date("2000-04-17").toLocaleDateString("en-GB"),
    },
    profession: {
      experience: "6 years",
      occupation: "Sales Manager",
    },
    academic: {
      collegeName: "MIT",
      degree: "Bcom",
      passoutyear: "2016",
      addressCollege: "America",
    },
    employment: {
      currentCompany: "Apple",
    },
  },
  {
    id: "jkl4",
    name: "Aman",
    personal: {
      address: "Haryana",
      mobile: "0987612345",
      birthday: new Date("2000-12-12").toLocaleDateString("en-GB"),
    },
    profession: {
      experience: "1 year",
      occupation: "Teacher",
    },
    academic: {
      collegeName: "DU",
      degree: "BEd",
      passoutyear: "2022",
      addressCollege: "Delhi",
    },
    employment: {
      currentCompany: "Some School",
    },
  },
];
