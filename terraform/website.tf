module "website" {
  source          = "./static-site"
  domain_name     = local.bucket
  with_cloudfront = true
}
