module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'abb122cca47ca142e02daa1bb082a361'),
  },
});
