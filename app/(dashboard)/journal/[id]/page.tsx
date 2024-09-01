import Editor from '@/components/Editor';
import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';

interface EntryPageParams {
  params: {
    id: string;
  };
}

const getEntry = async (id: string) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  });

  return entry;
};

const EntryPage = async ({ params }: EntryPageParams) => {
  const entry = await getEntry(params.id);
  return (
    <div className="h-full w-full">{entry && <Editor entry={entry} />}</div>
  );
};

export default EntryPage;
