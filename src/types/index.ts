export type PageTab =
  | 'beranda'
  | 'peta-jalur-fk'
  | 'perjalanan-3-tahun'
  | 'alumni-dan-bukti'
  | 'untuk-orang-tua'
  | 'biaya-dan-program';

export interface Alumni {
  id: string;
  name: string;
  school: string;
  campus: 'UI' | 'UGM' | 'UNAIR' | 'UNDIP' | 'UNPAD' | 'UNS' | 'OTHER';
  campusName: string;
  pathway: 'SNBP' | 'SNBT' | 'Mandiri' | 'IUP';
  pathwayLabel: string;
  year: number;
  avatarUrl: string;
  quote: string;
  metrics: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
  };
  details?: {
    nimVerified: string;
    mentor: string;
    highSchoolMajor: string;
    supercampAttended?: boolean;
    storyFull: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationRequest {
  parentOrStudentName: string;
  grade: string;
  targetCampus: string;
  phone: string;
  interestProgram?: string;
}
