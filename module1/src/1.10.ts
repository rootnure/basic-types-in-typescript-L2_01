{
  /* Union & Intersect */

  // Union type

  /* Union Type in Primitive Data */
  type AdminRanks = 'Administrator' | 'Super Moderator' | 'Moderator' | 'Staff Associate' | 'Test Staff';
  type NewUserRanks = 'Newbie' | 'Member' | 'Power User' | 'Elite' | 'Supreme' | 'Wizard';
  type UploaderRanks = 'Uploader' | 'Elite Uploader' | 'Star Uploader';
  type ReservedRanks = 'Legend' | 'VIP' | 'MVP';
  type PenaltyRanks = 'Jailed Member' | 'Warned Member';

  type UserRanks = AdminRanks | NewUserRanks | UploaderRanks | ReservedRanks | PenaltyRanks; // combine multiple types

  const userRank: AdminRanks = 'Test Staff';
  const user2Rank: ReservedRanks = 'Legend';
  const user3Rank: UploaderRanks = 'Elite Uploader';
  const user4Rank: NewUserRanks = 'Power User';
  const user5Rank: PenaltyRanks = 'Jailed Member';
  const user6Rank: UserRanks = 'MVP';

  console.log({ userRank, user2Rank, user3Rank, user4Rank, user5Rank, user6Rank });

  /* Union Type in Object property */
  type Patient = {
    name: string;
    age: number;
    contactNo?: string;
    gender: 'male' | 'female';
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | null;
    problem: string | null;
  };

  const patient1: Patient = {
    name: 'Nasrin Khanom',
    age: 54,
    gender: 'female',
    bloodGroup: 'B+',
    problem: null,
  }

  console.log({ patient1 });




  // Intersection Type

  type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
  }

  type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
  }

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer1: FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'Express', 'Mongoose'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
  }

  console.log({ developer1 });





}