module "website" {
  source          = "./static-site"
  domain_name     = local.repo
  s3_acl          = "private"
  with_cloudfront = true
}
