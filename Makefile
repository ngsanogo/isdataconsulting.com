.PHONY: format check check-format check-html check-links check-lighthouse serve audit

format:
	prettier --write "site/**/*.{html,css,js}" "*.{json,md,yml,yaml}"

check: check-format check-html check-links

check-format:
	prettier --check "site/**/*.{html,css,js}" "*.{json,md,yml,yaml}"

check-html:
	npx --yes html-validate "site/**/*.html"

check-links:
	npx --yes lychee --exclude-mail --accept 200,429,999 "README.md" "site/**/*.html"

check-lighthouse:
	npx --yes serve site -l 4173 >/tmp/isdata-serve.log 2>&1 & \
	SERVER_PID=$$!; \
	sleep 2; \
	npx --yes @lhci/cli autorun --config=.lighthouserc.json; \
	STATUS=$$?; \
	kill $$SERVER_PID >/dev/null 2>&1 || true; \
	exit $$STATUS

serve:
	npx --yes serve site -l 3000

audit: check check-lighthouse
