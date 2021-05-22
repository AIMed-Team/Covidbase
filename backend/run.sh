#!/bin/sh
set -eu

readonly CWD=$(dirname "$0")

main() {
  "$CWD/wait_for_db_service.sh"
  "$CWD"/manage.py migrate
  gunicorn --bind :8000 --workers 16 paper_registration.wsgi:application
}

main "$@"
