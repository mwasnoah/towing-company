export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const url = data.get("url")?.toString();
    const resp = await fetch(url as string);
    const googleData = await resp.json();

    return Response.json({ googleData });
  } catch (e) {
    console.error(e);
    return Response.json({ status: "An internal error occured" });
  }
}
