interface EntryPageParams {
  params: {
    id: string;
  };
}

const EntryPage = ({ params }: EntryPageParams) => {
  return <div>{params.id}</div>;
};

export default EntryPage;
