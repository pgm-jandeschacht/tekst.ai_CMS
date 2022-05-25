module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "/data/public"
  },
});
