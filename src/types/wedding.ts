// src/types/wedding.ts
export interface Guest {
  id: string;
  name: string;
  isAttending?: boolean;
  message?: string;
}

export interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

export interface WeddingData {
  groom: {
    name: string;
    father: string;
    mother: string;
    photo: string;
  };
  bride: {
    name: string;
    father: string;
    mother: string;
    photo: string;
  };
  date: {
    ceremony: string;
    reception: string;
  };
  location: {
    name: string;
    address: string;
    mapsUrl: string;
  };
  bankAccount?: {
    bankName: string;
    accountNumber: string;
    accountName: string;
  };
}
