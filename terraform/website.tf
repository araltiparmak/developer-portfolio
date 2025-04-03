module "website" {
  source              = "github.com/araltiparmak/terraform-modules//static-site?ref=v1.1.0"
  domain_name         = local.bucket
  with_cloudfront     = true
  cloudfront_aliases  = ["www.araltiparmak.com", "araltiparmak.com"]
  acm_certificate_arn = "arn:aws:acm:us-east-1:789798665829:certificate/ef64a36f-1384-43a2-9264-7aef24c20496"
}
