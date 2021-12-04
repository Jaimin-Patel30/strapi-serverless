module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '398bb3c0953dafd2fc412cd7f304e05c'),
  },
});
