import { JournalEntry } from '@prisma/client';

interface EntryCardProps {
  entry: JournalEntry;
}

const EntryCard = ({ entry }: EntryCardProps) => {
  return <div>EntryCard</div>;
};

export default EntryCard;
