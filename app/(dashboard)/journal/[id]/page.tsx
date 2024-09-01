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
  const analysisData = [
    { name: 'Subject', value: '' },
    { name: 'Summary', value: '' },
    { name: 'Mood', value: '' },
    { name: 'Negative', value: 'False' },
  ];
  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">{entry && <Editor entry={entry} />}</div>
      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((data) => (
              <li
                key={data.name}
                className="flex items-center justify-between px-2 py-4 border-b border-black/10"
              >
                <span className="text-lg font-semibold">{data.name}</span>
                <span>{data.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
