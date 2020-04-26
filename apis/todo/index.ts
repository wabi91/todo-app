export const fakeApi = (): Promise<boolean> => {
  const promise = new Promise<boolean>(resolve => {
    setTimeout(() => {
      resolve(Math.random() * 10 > 5);
    }, 500);
  });

  return promise;
};
