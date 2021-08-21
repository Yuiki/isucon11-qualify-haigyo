#!/bin/sh

sudo alp ltsv --file=/var/log/nginx/access.log -r -m "/api/isu/[a-z0-9]+,/api/isu/[a-z0-9]+/icon,/api/isu/[a-z0-9]+/graph,/api/condition/[a-z0-9]+,/isu/[a-z0-9]+,/isu/[a-z0-9]+/condition,/isu/[a-z0-9]+/graph" --sort=sum
