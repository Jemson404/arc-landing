// Merge this into your existing next.config.mjs
async function headers() {
  return [
    {
      source: "/downloads/:path*",
      headers: [
        { key: "Content-Disposition", value: "attachment" },
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
      ]
    }
  ];
}
export default { headers }; // or merge with your existing export
