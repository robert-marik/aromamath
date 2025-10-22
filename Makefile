.PHONY: html nb latex help import test nbclean

html:
	bash build.sh
import:	
	ghp-import -n -p _build/html
help:
	@echo "Usage: make [target]"
	@echo "Available targets:"
	@echo "  html    - Build HTML documentation"
	@echo "  import  - Upload using ghp-import to github pages"
