'use client';

import { updateEntry } from '@/utils/api';
import { JournalEntry } from '@prisma/client';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';

interface EditorProps {
  entry: JournalEntry;
}

const Editor = ({ entry }: EditorProps) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);

  useAutosave({
    data: value,
    onSave: async (updatedValue) => {
      setIsLoading(true);
      const updatedEntry = await updateEntry(entry.id, updatedValue);
      setValue(updatedEntry.content);
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <textarea
        className="w-full h-full p-8 text-xl"
        defaultValue={entry.content}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
