export async function GET() {
  try {
    const res = await fetch(
      `https://api.faceio.net/deletefacialid?key=d5ae3f970ad8cb6f6f93835830c0e4ab&fid=89aed41c883e4dd48b40a30e64cc41ba`
    );
    const data = await res.json();
    return Response.json({
      data: data,
    });
  } catch (err: any) {
    console.log(err);
  }
}
