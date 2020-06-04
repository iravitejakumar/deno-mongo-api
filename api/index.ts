const helloDeno = ({ response }: { response: any }) => {
    response.body = {
      msg: 'Hello Deno',
    }
  }
  
  export default helloDeno;