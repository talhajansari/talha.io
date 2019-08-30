.PHONY: deploy

deploy:
	aws s3 sync . s3://aws-website-talhaiowebsite-ivmju
