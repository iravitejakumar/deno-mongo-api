export default async ({ response }: any, nextFn: any) => {
    try {
      await nextFn();
    } catch (err) {
      response.status = 500;
      response.body = { msg: err.message };
    }
  };