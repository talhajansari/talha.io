.PHONY: deploy

deploy:
	aws s3 sync . s3://aws-website-talhaiowebsite-ivmju --delete --include="*" --exclude="Makefile" --exclude=".git/*" --exclude=".gitignore" --exclude=".DS_Store"
