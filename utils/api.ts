const createURL = (path: string): string => {
  return window.location.origin + path;
};

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      body: JSON.stringify({}),
    })
  );

  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
};

export const login = async () => {
  const res = await fetch(
    new Request('https://jsonplaceholder.typicode.com/todos/', {
      method: 'GET',
    })
  );

  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
};
