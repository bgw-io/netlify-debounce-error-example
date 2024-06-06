const someLongRunningTask = () => {
    return new Promise((accept) => {
      setTimeout(() => {
        accept(undefined);
      }, 3000);
    });
  };
  
  export default async () => {
    const v = await someLongRunningTask();
    console.log(v)
    console.log("Donwwwe!");
  };