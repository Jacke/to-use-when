import { serve } from "http/server.ts";
import { download } from "https://deno.land/x/download/mod.ts";

const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
var fileObj;
try {
    fileObj = await download(url);
    console.log(fileObj);
} catch (err) {
    console.log(err)
}


const body = new TextEncoder().encode(`<Hello, there is file for you ${JSON.stringify(fileObj)}`);
for await (const req of serve(":8000")) {
  req.respond({ body });
}
