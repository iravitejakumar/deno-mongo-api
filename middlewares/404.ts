export default ({ response }: any) => {
    response.status = 404;
    response.body = { msg: "Not Found" };
};