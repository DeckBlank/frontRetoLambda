export interface CCFormProps {
  card_number: number;
  email: string;
  cvv?: number;
  expiration_year: string;
  expiration_month: string;
}
export interface ResultProps {
  card_number: string;
  email: string;
  expiration_year: string;
  expiration_month: string;
}
